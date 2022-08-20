import type { Pattern } from './Pattern';
import type { WaveElement } from './WaveElement';
import getEntropy from './getEntropy';
import collapseWaveElement from './collapseWaveElement';
import type { Wave } from './Wave';
import type { CompatibilityMaps } from './CompatibilityMaps';
import propagateWave from './propagateWave';

const getWaveElementWithLowestEntropy = (elements: WaveElement[]): null | WaveElement => {
	let elementWithLowestEntropy: null | WaveElement = null;
	const { length } = elements;
	const index = elements.findIndex((waveElement) => waveElement.entropy != 0);
	elementWithLowestEntropy = elements[index];
	for (let i = index + 1; i < length; i++) {
		const element = elements[i];
		elementWithLowestEntropy =
			element.entropy != 0 && element.entropy < elementWithLowestEntropy.entropy ? element : elementWithLowestEntropy;
	}
	return elementWithLowestEntropy;
};

const collapseWave = (wave: Wave) => {
	for (;;) {
		const waveElement = getWaveElementWithLowestEntropy(wave.elements);
		if (!waveElement) {
			// The whole wave has collapsed
			break;
		}
		collapseWaveElement(waveElement);
		propagateWave(waveElement);
	}
};

const computeConnexElements = (
	wave: Wave,
	compatibilityMaps: CompatibilityMaps,
	width: number,
	height: number,
	patternWidth: number,
	patternHeight: number
) => {
	wave.elements.forEach((waveElement, index) => {
		compatibilityMaps.forEach((column, i) =>
			column.forEach((compatibilityMap, j) => {
				// If we have NxM patterns, some translation aren't relevant
				if (compatibilityMap.size != 0) {
					const x = (index % width) + i - (patternWidth - 1);
					const y = Math.floor(index / width) + j - (patternHeight - 1);

					if (x >= 0 && x < width && y >= 0 && y < height) {
						waveElement.connexElements.push({
							connexElement: wave.elements[x + width * y],
							compatibilityMap
						});
					}
				}
			})
		);
	});
};

export default function getCanvasFromPatterns(
	patterns: Pattern[],
	compatibilityMaps: CompatibilityMaps,
	width: number,
	height: number,
	patternWidth: number,
	patternHeight: number
) {
	const elements = Array.from(Array(width * height), () => ({
		entropy: getEntropy(patterns),
		possiblePatterns: patterns.slice(0),
		connexElements: []
	}));

	const wave = {
		elements,
		elementWithLowestEntropy: getWaveElementWithLowestEntropy(elements)
	};

	computeConnexElements(wave, compatibilityMaps, width, height, patternWidth, patternHeight);
	collapseWave(wave);
	console.log(wave);
	const canvas = Array.from(Array(width * height), () => 180);
	wave.elements.forEach((waveElement, index) => {
		canvas[index] = !!waveElement.possiblePatterns[0] ? waveElement.possiblePatterns[0].tile[0][0] : -1;
	});
	return canvas;
}
