import areCompatible from '../src/lib/waveFunctionCollapse/areCompatible';

test('compatible on diagonal', () => {
	expect(
		areCompatible(
			[
				[0, 1],
				[0, 1]
			],
			[
				[1, 0],
				[0, 1]
			],
			2,
			{ x: 1, y: -1 }
		)
	).toBe(true);
});

test('compatible on side', () => {
	expect(
		areCompatible(
			[
				[1, 0],
				[0, 1]
			],
			[
				[0, 1],
				[1, 1]
			],
			2,
			{ x: 1, y: 0 }
		)
	).toBe(true);
});

test('not compatible on diagonal', () => {
	expect(
		areCompatible(
			[
				[0, 1],
				[0, 1]
			],
			[
				[1, 1],
				[0, 1]
			],
			2,
			{ x: 1, y: -1 }
		)
	).toBe(false);
});

test('not compatible on side', () => {
	expect(
		areCompatible(
			[
				[1, 0],
				[0, 1]
			],
			[
				[0, 0],
				[1, 1]
			],
			2,
			{ x: 1, y: 0 }
		)
	).toBe(false);
});

test('size 3 compatible', () => {
	expect(
		areCompatible(
			[
				[0, 0, 0],
				[1, 0, 1],
				[0, 1, 1]
			],
			[
				[1, 1, 0],
				[1, 0, 1],
				[0, 1, 1]
			],
			3,
			{ x: 1, y: -1 }
		)
	).toBe(true);
});
