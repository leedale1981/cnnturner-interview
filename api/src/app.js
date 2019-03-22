/* eslint-disable no-console */
/* eslint-disable import/no-commonjs */

import express from 'express';
import TwitterRoute from './routes/twitter-route';
import TwitterService from './services/twitter-service';
import TwitterAPIConfig from './config/twitter-api-config';

const app = express();
const hostname = 'localhost';
const port = 31000;

const router = express.Router();

const twitterApiConfig = new TwitterAPIConfig();
const twitterService = new TwitterService(twitterApiConfig);
const twitterRoute = new TwitterRoute(router, twitterService);

app.use('/tweets', twitterRoute.router)

app.listen(port, hostname, () => {    
    console.log(`CNN Twitter Service listening at ${hostname}:${port}`)
});

export default app;