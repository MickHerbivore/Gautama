export interface RespTrendingCoins {
    coins:     RespCoin[];
}

export interface RespCoin {
    item: Item;
}

export interface Item {
    id:              string;
    name:            string;
    small:           string;
}
