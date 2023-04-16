import { Equal, Expect } from '../helpers/type-utils';

const myFunc = () => {
	return 'hello';
};

type MyFunc = typeof myFunc;
/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<MyFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
