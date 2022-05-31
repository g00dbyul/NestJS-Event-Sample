import { Body, Controller, Delete, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDTO } from "./dto/create-order.dto";

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDTO: CreateOrderDTO) {
    return this.ordersService.create(createOrderDTO)
  }

  @Delete()
  delete() {
    return this.ordersService.delete()
  }
}
