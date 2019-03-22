import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
require('chai').should();

describe('TwitterRoute', () => {
    it('it should GET top 10 tweets without passing username, defaulting to cnnbrk', (done) => {
        chai.request(app)
            .get('/cnnbrk-tweets')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(10);
                done();
            });
    });

    it('it should GET top 10 tweets passing different username', (done) => {
        chai.request(app)
            .get('/cnnbrk-tweets/leejdale')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(10);
                done();
            });
    });

    it('it should GET top 20 tweets passing username and count', (done) => {
        const count = 20;

        chai.request(app)
            .get(`/cnnbrk-tweets/cnnbrk?count=${count}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(count);
                done();
            });
    });
});