import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../../data/context/UseStore";

export const QuoteScreen: React.FC<any> = observer((props) => {
    const {quoteStore} = useStores()
    const dailyQuote = quoteStore.dailyQuote

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title font-tangerine font-bold is-size-1">
                        {dailyQuote?.quote ?? ""}
                    </h1>
                    <h2 className="subtitle font-tangerine font-light is-size-3">
                        {dailyQuote?.authorId ?? ""}
                    </h2>
                </div>
            </div>
        </section>
    )
})