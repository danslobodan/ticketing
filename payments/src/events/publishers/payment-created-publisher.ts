import { Subjects, Publisher, PaymentCreatedEvent } from '@sdtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}
