/* eslint-disable import/no-nodejs-modules */
/* eslint-disable no-sync */
/* eslint-disable class-methods-use-this */

import Vue from 'vue';

export default class HomeRoute {

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

        let template = `<div class="row">`;
        tweets.forEach((tweet) => template += 
            `
                <div class="col-sm-6 col-xs-12">
                    <h3>${tweet.text}</a></h3>
                    <p>Created: ${tweet.created_at}</p>
                    <p>By: ${tweet.user.name}</p>
                </div>`
        );

        template += "</div>";
        const tweetlist = new Vue({ template });
        const path = require('path');
        const renderer = require('vue-server-renderer').createRenderer({
            template: require('fs').readFileSync(path.resolve(__dirname, '../views/index.html'), 'utf-8')
        });

        renderer.renderToString(tweetlist, { user: userName }, (err, html) => res.send(html));
    }
}