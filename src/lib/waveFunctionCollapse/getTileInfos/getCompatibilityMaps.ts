import type { TilePattern } from './TilePattern';
import areCompatible from './areCompatible';
import type { TileCompatibilityMaps } from './TileCompatibilityMaps';

const translations = [
	{ x: 1, y: 0 },
	{ x: 0, y: -1 },
	{ x: -1, y: 0 },
	{ x: 0, y: 1 }
];

export default function getCompatibilityMap(
	patterns: TilePattern[],
	patternWidth: number,
	patternHeight: number
): TileCompatibilityMaps {
	const compatibilityMap: TileCompatibilityMaps = Array.from(Array(4), () => new Map());

	translations.forEach(({ x, y }, i) => {
		patterns.forEach((pattern) => {
			compatibilityMap[i].set(pattern, new Map());
			patterns.forEach((otherPattern) => {
				(compatibilityMap[i].get(pattern) as Map<TilePattern, boolean>).set(
					otherPattern,
					areCompatible(pattern.tile, otherPattern.tile, patternWidth, patternHeight, {
						x,
						y
					})
				);
			});
		});
	});

	return compatibilityMap;
}
