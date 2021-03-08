import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { NotFoundError, errorHandler, currentUser } from '@sdtickets/common';

import { createTicketRouter } from './routes/createTicket';
import { getTicketRouter } from './routes/getTicket';
import { getTicketsRouter } from './routes/getTickets';

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test',
    })
);

app.use(currentUser);

app.use(createTicketRouter);
app.use(getTicketRouter);
app.use(getTicketsRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
