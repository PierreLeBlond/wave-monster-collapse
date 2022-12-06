import type { Symmetry } from './Symmetry';
import type { TilesetInfos } from './TilesetInfos';
import { tilesetDatasObject } from './tilesetDatasObject';
import type { TilesetCompatibilityMaps } from './TilesetCompatibilityMaps';

interface Transformation {
	cardinality: number,
	transformations: number[]
}

const transformationsFromSymmetry: Map<Symmetry, Transformation> = new Map([
	['I', {
		cardinality: 2,
		transformations: [0, 1, 0, 1, 0, 0, 1, 1]
	}],
	['X', {
		cardinality: 1,
		transformations: [0, 0, 0, 0, 0, 0, 0, 0]
	}],
	['T', {
		cardinality: 4,
		transformations: [0, 1, 2, 3, 2, 0, 3, 1]
	}],
	['L', {
		cardinality: 4,
		transformations: [0, 1, 2, 3, 3, 1, 0, 2]
	}],
	['\\', {
		cardinality: 2,
		transformations: [0, 1, 0, 1, 1, 1, 0, 0]
	}]
]);

const directionFromTransformationIndex: number[] = [0, 1, 2, 3, 0, 2, 1, 3];
const directionFromInvertedTransformationIndex: number[] = [2, 3, 0, 1, 2, 0, 3, 1];

const cayleyTable = [
	[1, 2, 3, 4, 5, 6, 7, 8],
	[2, 3, 4, 1, 8, 7, 5, 6],
	[3, 4, 1, 2, 6, 5, 8, 7],
	[4, 1, 2, 3, 7, 8, 6, 5],
	[5, 7, 6, 8, 1, 3, 2, 4],
	[6, 8, 5, 7, 3, 1, 4, 2],
	[7, 6, 8, 5, 4, 2, 1, 3],
	[8, 5, 7, 6, 2, 4, 3, 1]
];

export default function getTilesetInfos(): TilesetInfos {
	const patternsMap = new Map();

	const { tiles, neighbors } = tilesetDatasObject;

	tiles.forEach((tile) => {
		const { name, frequency, symmetry } = tile;

		const transformations = transformationsFromSymmetry.get(symmetry);

		if (!transformations) {
			throw new Error(`Couldn't get transformations for symmetry ${symmetry}.`)
		}

		const transformedPatterns = [];
		for (let i = 0; i < transformations.cardinality; i++) {
			transformedPatterns.push({
				name,
				frequency,
				transformationIndex: i,
				available: true
			});
		}

		patternsMap.set(name, {
			transformedPatterns,
			transformations: transformations.transformations
		});
	});

	const patterns = Array.from(patternsMap.values()).flatMap((patterns) => patterns.transformedPatterns);

	const totalFrequency = patterns.reduce((accu, pattern) => accu + pattern.frequency, 0);
	patterns.forEach((pattern) => {
		pattern.frequency /= totalFrequency;
	});

	const compatibilityMaps: TilesetCompatibilityMaps = Array.from(Array(4), () => new Map());

	compatibilityMaps.forEach((compatibilityMapsFromTransformation) => {
		patterns.forEach((pattern) => {
			const map = new Map();
			compatibilityMapsFromTransformation.set(pattern, map);
			patterns.forEach((nextPattern) => {
				map.set(nextPattern, false);
			});
		});
	});

	neighbors.forEach((neighbor) => {
		for (let i = 0; i < 8; i++) {
			const leftPatternTransformationIndex = (cayleyTable[Number(neighbor.leftPattern.index)] as number[])[i] as number - 1;
			const rightPatternTransformationIndex = (cayleyTable[Number(neighbor.rightPattern.index)] as number[])[i] as number - 1;

			const leftPattern = patternsMap.get(neighbor.leftPattern.name);
			const leftTransformedPattern =
				leftPattern.transformedPatterns[leftPattern.transformations[leftPatternTransformationIndex]];
			const rightPattern = patternsMap.get(neighbor.rightPattern.name);
			const rightTransformedPattern =
				rightPattern.transformedPatterns[rightPattern.transformations[rightPatternTransformationIndex]];

			const direction = directionFromTransformationIndex[i] as number;

			const compatibilityMap = compatibilityMaps[direction];
			if (!compatibilityMap) {
				throw new Error(`Could'nt find compatibility map`);
			}

			const patternCompatibilityMap = compatibilityMap.get(leftTransformedPattern);
			if (!patternCompatibilityMap) {
				throw new Error(`Could'nt find pattern compatibility map`);
			}
			patternCompatibilityMap.set(rightTransformedPattern, true);

			const invertedDirection = directionFromInvertedTransformationIndex[i] as number;

			const invertedCompatibilityMap = compatibilityMaps[invertedDirection];
			if (!invertedCompatibilityMap) {
				throw new Error(`Could'nt find inverted compatibility map`);
			}

			const patternInvertedCompatibilityMap = invertedCompatibilityMap.get(rightTransformedPattern);
			if (!patternInvertedCompatibilityMap) {
				throw new Error(`Could'nt find pattern inverted compatibility map`);
			}
			patternInvertedCompatibilityMap.set(leftTransformedPattern, true);
		}
	});

	return {
		patterns,
		compatibilityMaps
	};
}
