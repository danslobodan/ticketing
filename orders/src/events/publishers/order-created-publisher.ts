import { Publisher, OrderCreatedEvent, Subjects } from '@sdtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
