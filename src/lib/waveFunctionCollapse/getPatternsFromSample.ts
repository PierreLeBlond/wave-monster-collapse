import type { Pattern } from './Pattern';
import getRotations from './getRotations';

const getIdFromTile = (tile: number[][]) => tile.toString();

const getRotatedPatterns = (tile: number[][]) => {
	const rotations = getRotations(tile).map((rotation) => ({
		id: getIdFromTile(rotation),
		tile: rotation,
		frequency: 1
	}));
	const uniqueRotations = rotations.reduce(
		(accu: Pattern[], rotation: Pattern) =>
			accu.some((uniqueRotation) => uniqueRotation.id == rotation.id) ? accu : [...accu, rotation],
		[]
	);

	return uniqueRotations;
};

// Based on
// https://medium.com/swlh/wave-function-collapse-tutorial-with-a-basic-exmaple-implementation-in-python-152d83d5cdb1
export default function getPatternsFromSample(
	sample: number[][],
	patternWidth: number,
	patternHeight: number,
	withRotations: boolean
): Pattern[] {
	const patterns: Pattern[] = [];

	// We assume that sample is a non flat rectangle
	const width = sample.length;
	const height = sample[0].length;

	// As we take a NxN pattern, we stop N-1 pixel before reaching the sample
	// boundaries
	for (let i = 0; i < width - (patternWidth - 1); i++) {
		for (let j = 0; j < height - (patternHeight - 1); j++) {
			const tile = Array.from(Array(patternWidth), () => Array(patternHeight));
			for (let x = 0; x < patternWidth; x++) {
				for (let y = 0; y < patternHeight; y++) {
					tile[x][y] = sample[i + x][j + y];
				}
			}

			const newPatterns = withRotations
				? getRotatedPatterns(tile)
				: [
						{
							id: getIdFromTile(tile),
							tile,
							frequency: 1
						}
				  ];

			newPatterns.forEach((newPattern) => {
				let existingPattern = patterns.find((pattern: Pattern) => pattern.id == newPattern.id);

				if (!existingPattern) {
					patterns.push(newPattern);
				} else {
					existingPattern.frequency++;
				}
			});
		}
	}

	const totalFrequency = patterns.reduce((accu, pattern) => accu + pattern.frequency, 0);
	patterns.forEach((pattern) => {
		pattern.frequency /= totalFrequency;
	});

	return patterns;
}
