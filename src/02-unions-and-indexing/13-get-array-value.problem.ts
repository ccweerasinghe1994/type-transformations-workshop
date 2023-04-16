import { Equal, Expect } from '../helpers/type-utils';

const fruits = ['apple', 'banana', 'orange'] as const;

type AppleOrBanana = typeof fruits;
type test = AppleOrBanana[0 | 1];
type Fruit = AppleOrBanana[number];

type tests = [
	Expect<Equal<test, 'apple' | 'banana'>>,
	Expect<Equal<Fruit, 'apple' | 'banana' | 'orange'>>
];
