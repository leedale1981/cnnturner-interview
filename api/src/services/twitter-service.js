import Twitter from 'twitter';

export default class TwitterService {
    constructor(config) {
        this.config = config;
    }

    async getTweets(userName, count) {
        return new Promise(
            (resolve, reject) => {
                const client = new Twitter({
                    "consumer_key": this.config.consumerKey,
                    "consumer_secret": this.config.consumerSecret,
                    "access_token_key": this.accessTokenKey,
                    "access_token_secret": this.accessTokenSecret
                });
        
                client.get('statuses/user_timeline', 
                { 
                    screen_name: userName,
                    count
                }
                )
                .then((tweets) => {
                    resolve(tweets);
                })
                .catch((reason) => {
                    reject(reason);
                });
            }
        )
    }
}