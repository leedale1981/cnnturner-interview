import { describe, it } from 'mocha';
import TwitterQueryService from '../services/twitter-query-service';
import sinon from 'sinon';
import ApiRequestor from '../services/api-requestor';

require('chai').should();

describe('TwitterQueryService', () => {
    it('it should GET top 10 tweets from cnnbrk account', (done) => {
        const stubRequestor = sinon.createStubInstance(ApiRequestor, {
            get: Promise.resolve([{id: 1111111111}])
        });
        const service = new TwitterQueryService(stubRequestor);

        service.getTweets('cnnbrk', 10)
        .then((tweets) => {
            tweets.length.should.be.eql(1);
            tweets[0].id.should.be.eql(1111111111);
            done();
        })
        .catch((reason) => {
            reason.should.be(null);
            done();
        });
    });
});