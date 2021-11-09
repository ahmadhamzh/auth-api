
'use strict'

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', () => {

    test('check api v1 get route', async () => {
        const response = await mockRequest.get('/api/v1/food');
        expect(response.status).toEqual(200)
    });   


})