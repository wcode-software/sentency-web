import React from "react";
import {QuoteStore} from "../stores/QuoteStore";

export const rootContext = React.createContext({
    quoteStore: new QuoteStore(),
})