import getReducedWaveElement from '../src/lib/waveFunctionCollapse/getReducedWaveElement';
import getEntropy from '../src/lib/waveFunctionCollapse/getEntropy';

const patterns = [
	{
		id: '',
		tile: [
			[0, 1],
			[0, 1]
		],
		frequency: 0.333
	},
	{
		id: '',
		tile: [
			[0, 0],
			[1, 1]
		],
		frequency: 0.333
	},
	{
		id: '',
		tile: [
			[0, 0],
			[0, 1]
		],
		frequency: 0.333
	}
];

const tiles = [
	{
		entropy: getEntropy([patterns[0], patterns[1]]),
		hasCollapsed: false,
		possiblePatterns: [patterns[0], patterns[1]]
	},
	{
		entropy: getEntropy([patterns[0], patterns[2]]),
		hasCollapsed: false,
		possiblePatterns: [patterns[0], patterns[2]]
	},
	{
		entropy: getEntropy([patterns[1], patterns[2]]),
		hasCollapsed: false,
		possiblePatterns: [patterns[1], patterns[2]]
	},
	{
		entropy: getEntropy([patterns[0], patterns[1], patterns[2]]),
		hasCollapsed: false,
		possiblePatterns: [patterns[0], patterns[1], patterns[2]]
	},
	{
		entropy: 0,
		hasCollapsed: true,
		possiblePatterns: [patterns[1]],
		collapsedPattern: patterns[1]
	}
];

const directions = [
	{
		x: 1,
		y: -1
	},
	{
		x: -1,
		y: 1
	}
];

const connexTiles = [
	{
		waveElement: tiles[1],
		translation: directions[1],
		position: directions[1]
	},
	{
		waveElement: tiles[1],
		translation: directions[0],
		position: directions[0]
	},
	{
		waveElement: tiles[2],
		translation: directions[0],
		position: directions[0]
	}
];

test('no reduce', () => {
	expect(getReducedWaveElement(tiles[1], [connexTiles[1], connexTiles[2]], 2)).toStrictEqual(tiles[1]);
});

test('reduce', () => {
	expect(getReducedWaveElement(tiles[3], [connexTiles[1], connexTiles[2]], 2)).toStrictEqual(tiles[1]);
});

test('reduce to collapsed', () => {
	expect(getReducedWaveElement(tiles[0], [connexTiles[0]], 2)).toStrictEqual(tiles[4]);
});
