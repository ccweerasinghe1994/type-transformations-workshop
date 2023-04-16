import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};
// let's get the parameters of makeQuery
type MakeQuery = typeof makeQuery;
// let's use Parameters utility type to get the parameters of makeQuery
type MakeQueryParameters = Parameters<MakeQuery>
// we can use this to extract types from external libraries
type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        },
      ]
    >
  >,
];
