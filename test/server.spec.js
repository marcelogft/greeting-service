import chai from 'chai';
import request from 'supertest';

// Tell chai that we'll be using the "should" style assertions.
const should = chai.should();

import server from '../src/index';

describe('testing  server', () => {
    
    it('responds to /health', (done) => {
        request(server)
            .get('/health')
            .expect(200)
            .end((err, res) => {  
                res.body.should.have.property('status');
                res.body.status.should.equal('up');
                done();
            }) 
    });

    it('responds to /info', (done) => {
        request(server)
            .get('/info')
            .expect(200)
            .end((err, res) => {  
                res.body.should.have.property('app'); 
                res.body.app.should.have.property('version');
                res.body.app.should.have.property('description');
                res.body.app.should.have.property('name'); 
                done();
            }) 
    });

      it('responds to /metrics', (done) => {
        request(server)
            .get('/metrics')
            .expect(200)
            .end((err, res) => {  
                res.body.should.have.property('platform'); 
                res.body.should.have.property('type'); 
                res.body.should.have.property('cpus'); 
                res.body.should.have.property('mem');
                res.body.should.have.property('net'); 
                done();
            }) 
    });
    it('responds to /api/greeting', (done) => {
        request(server)
            .get('/api/greeting')
            .expect(200)
            .end((err, res) => {  
                res.body.should.have.property('greeting');  
                done();
            }) 
    });
});    