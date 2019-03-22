/* eslint-disable no-undef */

export default class TwitterQueryService {
    constructor(apiRequestor) {
        this.apiRequestor = apiRequestor;
    }

    async getTweets(userName, count) {
        return this.apiRequestor.get(`tweets/${userName}?count=${count}`)
    }
}