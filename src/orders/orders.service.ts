import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from "@nestjs/event-emitter";
import { CreateOrderDTO } from "./dto/create-order.dto";
import { OrderCreatedEvent } from "./events/order-created.event";
import { Order } from "./entities/order.entity";

@Injectable()
export class OrdersService {
  public orders:Order[] = [
    {
      id: 1,
      name: 'Order #1',
      description: 'Description order #1',
    },
    {
      id: 2,
      name: 'Order #2',
      description: 'Description order #2',
    },
  ]

  constructor(private eventEmitter: EventEmitter2) {}

  create(createOrderDTO: CreateOrderDTO) {
    const order = {
      id: this.orders.length + 1,
      ...createOrderDTO,
    };
    this.orders.push(order)

    const orderCreatedEvent = new OrderCreatedEvent();
    orderCreatedEvent.name = order.name;
    orderCreatedEvent.description = order.description;
    this.eventEmitter.emit('order.created', orderCreatedEvent)

    return order;
  }

  delete() {
    const pop = this.orders.pop()

    const orderDeleteEvent = new OrderCreatedEvent();
    orderDeleteEvent.name = pop.name;
    orderDeleteEvent.description = pop.description;

    this.eventEmitter.emit('order.deleted', orderDeleteEvent)

    return pop
  }
}
