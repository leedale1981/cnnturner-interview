/* eslint-disable no-console */
/* eslint-disable import/no-commonjs */

import express from 'express';
import HomeRoute from './routes/home-route';
import TwitterQueryService from './services/twitter-query-service';
import ApiConfig from './config/api-config';
import ApiRequestor from './services/api-requestor';

const app = express();
const hostname = 'localhost';
const port = 30000;

const router = express.Router();

const apiConfig = new ApiConfig();
const apiRequestor = new ApiRequestor(apiConfig);
const twitterQueryService = new TwitterQueryService(apiRequestor);
const homeRoute = new HomeRoute(router, twitterQueryService);

app.use('/cnnbrk-tweets', homeRoute.router)

app.listen(port, hostname, () => {    
    console.log(`CNN Twitter Web Site running at ${hostname}:${port}`)
});

export default app;