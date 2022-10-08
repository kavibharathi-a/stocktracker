export interface Finhub {

    description: string,
    displaySymbol: string,
    symbol: string,
    d: number,
    o: number,
    c: number,
    h: number,
    mspr: number,
    change: number,
    month: number
}

export interface Finhubdata {
    result: Finhub[],
    

}
