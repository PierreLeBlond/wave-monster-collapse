import getEntropy from './getEntropy';
import type { Pattern } from './Pattern';
import type { WaveElement } from './WaveElement';

const hasCompatibility = (
	compatibilityMap: Map<Pattern, Map<Pattern, boolean>>,
	pattern: Pattern,
	possiblePatterns: Pattern[]
): boolean => {
	const { length } = possiblePatterns;
	/* we use a for loop for performance */
	for (let i = 0; i < length; i++) {
		if ((compatibilityMap.get(possiblePatterns[i] as Pattern) as Map<Pattern, boolean>).get(pattern)) {
			return true;
		}
	}
	return false;
};

export default function reduceWaveElement(
	compatibilityMap: Map<Pattern, Map<Pattern, boolean>>,
	waveElement: WaveElement,
	nextWaveElement: WaveElement
) {
	const { length } = waveElement.possiblePatterns;

	const possiblePatterns = [];
	/* we use a for loop for performance */
	for (let i = 0; i < length; i++) {
		const pattern = waveElement.possiblePatterns[i] as Pattern;
		if (hasCompatibility(compatibilityMap, pattern, nextWaveElement.possiblePatterns)) {
			possiblePatterns.push(pattern);
		}
	}

	waveElement.possiblePatterns = possiblePatterns;
	waveElement.entropy = getEntropy(waveElement.possiblePatterns);
}
