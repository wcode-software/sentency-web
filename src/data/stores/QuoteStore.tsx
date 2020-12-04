import {action, observable, runInAction} from "mobx";
import {Quote} from "../models/Quote";
import {BaseStore} from "../base/BaseStore";
import {QuoteService} from "../../network/services/QuoteService";

export class QuoteStore extends BaseStore {

    @observable dailyQuote?: Quote = undefined

    @action
    async loadDailyQuote() {
        this.baseCall(async () => {
            const quote = await QuoteService.getDailyQuote()
            runInAction(() => {
                this.dailyQuote = quote
            })
        })
    }
}