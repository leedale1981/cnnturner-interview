/* eslint-disable class-methods-use-this */

export default class TwitterRoute {

    constructor(router, twitterService) {
        this.router = router;
        this.twitterService = twitterService;
        this.configureRoute();
    }

    configureRoute() {
        this.router.get('/', (req, res) => {
            this.getTweets(req, res);
        });

        this.router.get('/:user', (req, res) => {
            this.getTweets(req, res);
        });
    }

    async getTweets(req, res) {
        const userName = (req.params.user) ? req.params.user : 'cnnbrk';
        const count = (req.query.count) ? req.query.count : 10;

        const tweets = await this.twitterService.getTweets(userName, count);
        res.send(tweets);
    }
}