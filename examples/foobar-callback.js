var treePrinter = require('..');

console.log(treePrinter([
	{
		name: 'Foo',
		children: [
			{name: 'Foo-Foo'},
			{name: 'Foo-Bar'},
			{name: 'Foo-Baz'},
		],
	},
	{
		name: 'Bar',
		children: [
			{name: 'Bar-Foo'},
			{name: 'Bar-Bar'},
			{
				name: 'Bar-Baz',
				children: [
					{name: 'Bar-Baz-Foo'},
					{name: 'Bar-Baz-Bar'},
					{name: 'Bar-Baz-Baz'},
				],
			},
		],
	},
	{
		name: 'Baz',
		children: [
			{name: 'Baz-Foo'},
			{name: 'Baz-Bar'},
			{name: 'Baz-Baz'},
		],
	},
], {
	fields: {
		name: function(branch) {
			return 'BRANCH ' + branch.name;
		},
	},
}));
