import { Injectable } from "@nestjs/common";
import { OrderCreatedEvent } from "../events/order-created.event";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class OrderCreatedListener {
  // Listener Class를 module에 추가해야 한다.
  @OnEvent('order.created')
  handleOrderCreatedEvent(event: OrderCreatedEvent) {
    console.log(event)
  }

  @OnEvent('order.deleted')
  handleOrderDeletedEvent(event: OrderCreatedEvent) {
    console.log(`Deleted order ${event.name}`)
  }
}
