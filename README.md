tree-printer
============
CLI module to pretty print a tree generated from a collection (array of objects).


Example
-------

	var treePrinter = require('tree-printer

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
	]));

Outputs:

	┬
	├─┬ Foo
	│ ├── Foo-Foo
	│ ├── Foo-Bar
	│ └── Foo-Baz
	├─┬ Bar
	│ ├── Bar-Foo
	│ ├── Bar-Bar
	│ └─┬ Bar-Baz
	│   ├── Bar-Baz-Foo
	│   ├── Bar-Baz-Bar
	│   └── Bar-Baz-Baz
	└─┬ Baz
	  ├── Baz-Foo
	  ├── Baz-Bar
	  └── Baz-Baz


Options
-------
The main `treePrinter(tree, options)` function takes the collection and an object of options which can be any, all or none of the following:

| Option        | Type          | Default          | Description |
|---------------|---------------|------------------|-------------|
| `depth`       | Number        | 0                | Initial depth of the tree (auto-computed during recursion) |
| `depths`      | Array         | `[false]`        | Whether each of the depths is on the last item - used to draw the correct '*last' formatter (auto-computed during recursion) |
| `format`      | Object        | see below        | Object of various formatters |
| `format.root` | String        | `'┬'`            | Formatter to use when drawing the root node |
| `format.branchNoChildren` | String        | `'├── {{name}}'`            | Formatter to use when drawing a branch that has no children |
| `format.branchChildren` | String        | `'├─┬ {{name}}'`            | Formatter to use when drawing a branch that has children |
| `format.branchNoChildrenLast` | String        | `'└── {{name}}'`            | Formatter to use when drawing a branch that has no children and is also the last of the set |
| `format.branchChildrenLast` | String        | `'└─┬ {{name}}'`            | Formatter to use when drawing a branch that has childre and is also the last of the set |
| `format.depth` | String       | `'│ '`           | Formatter to use when drawing a depth marker |
| `format.depthLast` | String   | `'  '`           | Formatter to use when drawing a depth marker that is also the last of a set |
| `format.eol` | String         | `'\n'`           | Formatter to use to end a line output |
| `fields`     | Object         | see below        | Object to indicate which fields should be used during formatting
| `fields.name` | String        | `'name'`         | Which field to draw the nodes name from |
| `fields.children` | String    | `'children'`     | Which field to draw the nodes childrens from. This should be an array |
| `autoPrint`  | Boolean        | `false`          | Whether to invoke `console.log` automatically when finished |
