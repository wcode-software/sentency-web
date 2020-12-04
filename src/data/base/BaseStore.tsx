import {observable} from "mobx";

export abstract class BaseStore {

    @observable isLoading = false;

    protected baseCall(execute: () => void) {
        this.isLoading = true
        try {
            execute()
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }
}