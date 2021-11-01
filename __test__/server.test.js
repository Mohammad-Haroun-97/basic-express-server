'use strict';
const server=require('../src/server.js');
const supertest=require('supertest');
const request=supertest(server.app);

describe('server', ()=>{
  it('should get status 404',async()=>{
    const response =await request.get('/foo');
    expect(response.status).toBe(404);
 
  });

});
 