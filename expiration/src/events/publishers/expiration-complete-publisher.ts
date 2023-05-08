import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
} from '@sdtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
