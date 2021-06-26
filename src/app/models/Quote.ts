import {Author} from "./Author";
import {QuoteLocalization} from "./QuoteLocalization";

export interface Quote {
  id: string,
  messages: QuoteLocalization[],
  author: Author
}
