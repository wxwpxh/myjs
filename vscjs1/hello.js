function hello() {
	var a={};
	var b=a;

	a.a=10;
	b.b=12

	console.log(a);
	console.log(a);
	console.log('Hello World!');
}
hello();
