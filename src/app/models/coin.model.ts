export interface Coin {
    name:        string;
    description: Description;
    links:       Links;
    image:       Image;
    market_data: MarketData;
}

export interface Description {
    en: string;
}

export interface Image {
    large: string;
}

export interface Links {
    homepage:           any[];
    official_forum_url: any[];
    repos_url:          ReposURL;
}

export interface ReposURL {
    bitbucket: any[];
    github:    any[];
}

export interface MarketData {
    current_price: CurrentPrice;
}

export interface CurrentPrice {
    clp: string;
    usd: string;
    eur: string;
    cad: string;
}