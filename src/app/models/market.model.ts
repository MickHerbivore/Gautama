export interface Market {
    id:                   string;
    name:                 string;
    base_currency:        string;
    quote_currency:       string;
    minimum_order_amount: string[];
    disabled:             boolean;
    illiquid:             boolean;
    rpo_disabled:         boolean | null;
    taker_fee:            string;
    maker_fee:            string;
}