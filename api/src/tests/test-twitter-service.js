import { describe, it } from 'mocha';
import TwitterService from '../services/twitter-service';
import TwitterAPIConfig from '../config/twitter-api-config';
require('chai').should();

describe('TwitterService', () => {
    it('it should GET top 10 tweets from cnnbrk account', (done) => {
        const config = new TwitterAPIConfig();
        const service = new TwitterService(config);
        service.getTweets('cnnbrk', 10)
        .then((tweets) => {
            tweets.length.should.be.eql(10);
            tweets[0].id.should.not.be.eql(null);
            done();
        })
        .catch((reason) => {
            reason.should.be(null);
            done();
        });
    });
});