export interface Exchange {
    id:            string;
    name:          string;
    description:   string;
    url:           string;
    image:         string;
    twitter_handle: string;
    reddit_url:     string;
    tickers:        Ticker[];
}

export interface Ticker {
    coin_id: string;
    base:    string;
    target:  string;
    last:    string;
}
