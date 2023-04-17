import { Equal, Expect } from '../helpers/type-utils';

const getServerSideProps = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const json: { title: string } = await data.json();
	return {
		props: {
			json
		}
	};
};

type InferPropsFromServerSideFunction<T> = T extends (
	...args: any
) => Promise<infer ReturnType>
	? ReturnType extends { ['props']: infer PropsType }
		? PropsType
		: never
	: never;

type test = InferPropsFromServerSideFunction<typeof getServerSideProps>;

type tests = [
	Expect<
		Equal<
			InferPropsFromServerSideFunction<typeof getServerSideProps>,
			{ json: { title: string } }
		>
	>
];
