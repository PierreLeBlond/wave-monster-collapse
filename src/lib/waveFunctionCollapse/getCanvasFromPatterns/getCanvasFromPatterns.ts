import type { Pattern } from './Pattern';
import type { WaveElement } from './WaveElement';
import getEntropy from './getEntropy';
import collapseWaveElement from './collapseWaveElement';
import type { Wave } from './Wave';
import type { CompatibilityMaps } from './CompatibilityMaps';
import propagateWave from './propagateWave';

const translations = [
	{ x: 1, y: 0 },
	{ x: 0, y: -1 },
	{ x: -1, y: 0 },
	{ x: 0, y: 1 }
];

const getWaveElementWithLowestEntropy = (elements: WaveElement[]): null | WaveElement => {
	let elementWithLowestEntropy: null | WaveElement = null;
	const { length } = elements;
	const index = elements.findIndex((waveElement) => waveElement.entropy != 0);
	elementWithLowestEntropy = elements[index] ?? null;
	/* we use a for loop for performance */
	for (let i = index + 1; i < length; i++) {
		const element = elements[i];

		elementWithLowestEntropy =
			element && element.entropy != 0 && elementWithLowestEntropy && element.entropy < elementWithLowestEntropy.entropy
				? element
				: elementWithLowestEntropy;
	}
	return elementWithLowestEntropy;
};

const collapseWave = (wave: Wave) => {
	for (; ;) {
		const waveElement = getWaveElementWithLowestEntropy(wave.elements);
		if (!waveElement) {
			// The whole wave has collapsed
			break;
		}
		collapseWaveElement(waveElement);
		propagateWave(waveElement);
	}
};

const computeConnexElements = (wave: Wave, compatibilityMaps: CompatibilityMaps, width: number, height: number) => {
	wave.elements.forEach((waveElement, index) => {
		translations.forEach((translation, i) => {
			const x = (index % width) + translation.x;
			const y = Math.floor(index / width) + translation.y;

			if (x >= 0 && x < width && y >= 0 && y < height) {

				const connexElement = wave.elements[x + width * y];
				if (!connexElement) {
					throw new Error('Connex element does not exists');
				}

				const compatibilityMap = compatibilityMaps[i];
				if (!compatibilityMap) {
					throw new Error('CompatibilityMap does not exists');
				}

				waveElement.connexElements.push({
					connexElement,
					compatibilityMap
				});
			}
		});
	});
};

export default function getCanvasFromPatterns(
	patterns: Pattern[],
	compatibilityMaps: CompatibilityMaps,
	width: number,
	height: number
) {
	const elements = Array.from(Array(width * height), () => ({
		entropy: getEntropy(patterns),
		possiblePatterns: patterns.slice(0),
		connexElements: []
	}));

	const wave = {
		elements
	};

	computeConnexElements(wave, compatibilityMaps, width, height);

	collapseWave(wave);

	return wave.elements.map((waveElement) => waveElement.possiblePatterns[0]);
}
