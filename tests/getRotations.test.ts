import getRotations from '../src/lib/waveFunctionCollapse/getRotations';

test('size 2 rotations', () => {
	expect(
		getRotations([
			[0, 1],
			[0, 1]
		])
	).toStrictEqual([
		[
			[0, 1],
			[0, 1]
		],
		[
			[1, 1],
			[0, 0]
		],
		[
			[1, 0],
			[1, 0]
		],
		[
			[0, 0],
			[1, 1]
		]
	]);
});

test('size 3 rotations', () => {
	expect(
		getRotations([
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9]
		])
	).toStrictEqual([
		[
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9]
		],
		[
			[7, 8, 9],
			[4, 5, 6],
			[1, 2, 3]
		],
		[
			[9, 6, 3],
			[8, 5, 2],
			[7, 4, 1]
		],
		[
			[3, 2, 1],
			[6, 5, 4],
			[9, 8, 7]
		]
	]);
});
