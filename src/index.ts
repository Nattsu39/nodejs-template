export function foo(bar: string) {
	console.log(bar);
}

export function hello() {
	console.log('world');
}

export type TestType = typeof foo
