import Config from "../../core/Config";
import {Quote} from "../../data/models/Quote";
import request from "superagent";

export class QuoteService {
    private static baseUrl: string = Config.BASE_URL + "/quotes"

    static async getDailyQuote(): Promise<Quote> {
        return request.get(Config.BASE_URL + "/random")
            .then(res => {
                let quote: Quote = res.body
                return quote
            })
    }
}