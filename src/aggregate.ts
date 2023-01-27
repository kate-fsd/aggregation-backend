import { Reserves, TypedRequest, TypedResponse, AggregationResponse } from "./types";

export const aggregate = (
  req: TypedRequest<{}, { amount: string; reserves: Reserves }>,
  res: TypedResponse<AggregationResponse>
) => {
  const { amount, reserves } = req.body;

  const mock = {
    amountIn: "1000.0",
    amountOut: "305089.348262337981366719",
    routes: [
      {
        amountIn: "50.3491184328320073",
        amountOut: "15335.020576641538443172",
        path: [
          "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082",
          "0xF45cd219aEF8618A92BAa7aD848364a158a24F33"
        ]
      },
      {
        amountIn: "785.31567206011200737",
        amountOut: "239573.86781657556927694",
        path: ["0x58f876857a02d6762e0101bb5c46a8c1ed44dc16"]
      },
      {
        amountIn: "164.33520950705598533",
        amountOut: "50180.459869120873646607",
        path: ["0xaCAac9311b0096E04Dfe96b6D87dec867d3883Dc"]
      }
    ]
  };

  return res.json(mock);
};
