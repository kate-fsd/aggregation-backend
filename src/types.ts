import { Query, Send } from "express-serve-static-core";

export interface TypedRequest<T extends Query, U> extends Express.Request {
  body: U;
  query: T;
}

export interface TypedResponse<ResBody> extends Express.Response {
  json: Send<ResBody, this>;
}

export type Reserves = {
  STANDARD: {
    address: string;
    tokens: {
      address: string;
      name: string;
      reserve: string;
    }[];
    dex: string;
    fee: number;
  }[];
  ELLIPSIS: {
    address: string;
    info: {
      balances: string[];
      amplifier: string;
      totalSupply: string;
      feeNumerator: string;
      feeDenominator: string;
    };
    tokens: {
      address: string;
      name: string;
    }[];
    dex: string;
    fee: null;
  }[];
  PANCAKE_V2_STABLE: {
    address: string;
    info: {
      balances: string[];
      amplifier: string;
      totalSupply: string;
      feeNumerator: string;
      feeDenominator: string;
    };
    tokens: {
      address: string;
      name: string;
    }[];
    dex: string;
    fee: null;
  }[];
};

export type AggregationResponse = {
  amountIn: string;
  amountOut: string;
  routes: AggregationRoute[];
};

type AggregationRoute = {
  amountIn: string;
  amountOut: string;
  path: string[];
};
