import getEntropy from './getEntropy';
import type { Pattern } from './Pattern';
import type { WaveElement } from './WaveElement';

const hasCompatibility = (
	compatibilityMap: Map<Pattern, Map<Pattern, boolean>>,
	pattern: Pattern,
	possiblePatterns: Pattern[]
): boolean => {
	const { length } = possiblePatterns;
	for (let i = 0; i < length; i++) {
		if ((compatibilityMap.get(pattern) as Map<Pattern, boolean>).get(possiblePatterns[i])) {
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
	for (let i = 0; i < length; i++) {
		const pattern = waveElement.possiblePatterns[i];
		if (hasCompatibility(compatibilityMap, pattern, nextWaveElement.possiblePatterns)) {
			possiblePatterns.push(pattern);
		}
	}

	waveElement.possiblePatterns = possiblePatterns;
	waveElement.entropy = getEntropy(waveElement.possiblePatterns);
}
