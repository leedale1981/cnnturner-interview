/* eslint-disable import/no-nodejs-modules */
/* eslint-disable no-undef */
export default class ApiRequestor {
    constructor(config) {
        this.config = config;
    }

    async get(url) {
        const self = this;

        return new Promise(
            (resolve, reject) => {
                const http = require('http');
                http.get(`${self.config.hostUrl}/${url}`, (res) => {
                    let data = '';

                    res.on('data', (chunk) => data += chunk);
                    res.on('end', () => resolve(JSON.parse(data)));
                })
                .on('error', (err) => reject(err));
            }
        ) 
    }
}