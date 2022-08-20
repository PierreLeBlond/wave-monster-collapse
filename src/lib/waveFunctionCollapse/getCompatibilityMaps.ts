import type { Pattern } from './Pattern';
import areCompatible from './areCompatible';
import type { CompatibilityMaps } from './CompatibilityMaps';

export default function getCompatibilityMap(
	patterns: Pattern[],
	patternWidth: number,
	patternHeight: number
): CompatibilityMaps {
	const width = 2 * patternWidth - 1;
	const height = 2 * patternHeight - 1;

	const compatibilityMap: CompatibilityMaps = Array.from(Array(width), () =>
		Array.from(Array(height), () => new Map())
	);

	for (let x = 0; x < width; x++) {
		for (let y = 0; y < height; y++) {
			patterns.forEach((pattern) => {
				compatibilityMap[x][y].set(pattern, new Map());
				patterns.forEach((otherPattern) => {
					(compatibilityMap[x][y].get(pattern) as Map<Pattern, boolean>).set(
						otherPattern,
						areCompatible(otherPattern.tile, pattern.tile, patternWidth, patternHeight, {
							x: x - (patternWidth - 1),
							y: y - (patternHeight - 1)
						})
					);
				});
			});
		}
	}

	return compatibilityMap;
}
