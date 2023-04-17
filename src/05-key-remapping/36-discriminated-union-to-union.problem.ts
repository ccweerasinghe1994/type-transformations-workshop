import { Equal, Expect } from '../helpers/type-utils';

type Fruit =
	| {
			name: 'apple';
			color: 'red';
	  }
	| {
			name: 'banana';
			color: 'yellow';
	  }
	| {
			name: 'orange';
			color: 'orange';
	  };

type TransformedFruit = {
	[R in Fruit as R['name']]: `${R['name']}:${R['color']}`;
}[Fruit['name']];

type test = TransformedFruit;

type tests = [
	Expect<
		Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>
	>
];
