export declare module Exmo {

    export interface Data {
        src: string;
        para: string;
        price: number[][];
        amount: number[][];
    }

    export interface RootObject {
        success: number;
        ctlr: string;
        error: string;
        data: Data;
    }

}