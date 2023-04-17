import { log } from 'console';
import { Equal, Expect } from '../helpers/type-utils';

type Route =
	| {
			route: '/';
			search: {
				page: string;
				perPage: string;
			};
	  }
	| { route: '/about' }
	| { route: '/admin' }
	| { route: '/admin/users' };

type RoutesObject = {
	[O in Route as O['route']]: O extends { search: infer S } ? S : never;
};

type example = RoutesObject;

type tests = [
	Expect<
		Equal<
			RoutesObject,
			{
				'/': {
					page: string;
					perPage: string;
				};
				'/about': never;
				'/admin': never;
				'/admin/users': never;
			}
		>
	>
];
