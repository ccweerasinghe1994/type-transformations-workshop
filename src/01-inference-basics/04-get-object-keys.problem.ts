import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type Testing = typeof testingFrameworks;

type TestingFramework = keyof Testing;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
