import request from 'supertest';
import { app } from '../../app';

jest.mock('../../nats-wrapper');

const createTicket = () => {
    return request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'asfa',
            price: 20,
        });
};

describe('GET /api/tickets', () => {
    it('can fetch a list of tickets', async () => {
        await createTicket();
        await createTicket();
        await createTicket();

        const response = await request(app)
            .get('/api/tickets')
            .send()
            .expect(200);

        expect(response.body.length).toEqual(3);
    });
});
