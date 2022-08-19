import type { Pattern } from './Pattern';
import type { WaveElement } from './WaveElement';
import reduceWaveElement from './reduceWaveElement';
import getEntropy from './getEntropy';
import collapseWaveElement from './collapseWaveElement';
import getTranslations from './getTranslations';
import type { Wave } from './Wave';

const hasCollapsed = (wave: Wave) =>
	wave.elements.every((elementsColumn) => elementsColumn.every((waveElement) => waveElement.entropy == 0));

const getWaveElementWithLowestEntropy = (wave: Wave): WaveElement => {
	return wave.elements
		.flatMap((elementsColumn) => elementsColumn)
		.filter((waveElement) => waveElement.entropy != 0)
		.reduce((waveElement: WaveElement, nextWaveElement: WaveElement) =>
			waveElement.entropy > nextWaveElement.entropy ? nextWaveElement : waveElement
		);
};

const propagateWave = (wave: Wave, waveElement: WaveElement) => {
	const ElementToPropagateTo: WaveElement[] = [];

	const { elements, width, height, translations } = wave;

	const propagate = () => {
		const nextWaveElement = ElementToPropagateTo.pop();
		if (!nextWaveElement) {
			return;
		}
		// We'll need to compare entropies to know if the element has reduced
		const { entropy, position } = nextWaveElement;
		const connexWaveElements = translations
			.filter(
				(translation) =>
					position.x + translation.x >= 0 &&
					position.x + translation.x < width &&
					position.y + translation.y >= 0 &&
					position.y + translation.y < height
			)
			.map((translation) => elements[position.x + translation.x][position.y + translation.y]);
		reduceWaveElement(wave, nextWaveElement, connexWaveElements);

		if (nextWaveElement.entropy == 0 || nextWaveElement.entropy != entropy) {
			const waveElementsToPropagateTo = connexWaveElements
				.filter((connexWaveElement) => connexWaveElement.entropy != 0)
				.filter((connexWaveElement) =>
					ElementToPropagateTo.every((otherWaveElement) => connexWaveElement != otherWaveElement)
				);

			ElementToPropagateTo.push(...waveElementsToPropagateTo);
		}
	};

	ElementToPropagateTo.push(waveElement);

	while (ElementToPropagateTo.length > 0) {
		propagate();
	}
};

const collapseWave = (wave: Wave) => {
	const collapse = () => {
		const waveElement = getWaveElementWithLowestEntropy(wave);
		collapseWaveElement(waveElement);
		propagateWave(wave, waveElement);
	};

	while (!hasCollapsed(wave)) {
		collapse();
	}
};

export default function getCanvasFromPatterns(patterns: Pattern[], width: number, height: number, patternSize: number) {
	const wave = {
		elements: Array.from(Array(width), (_, x) =>
			Array.from(Array(height), (_, y) => ({
				entropy: getEntropy(patterns),
				possiblePatterns: patterns.slice(0),
				position: { x, y }
			}))
		),
		width,
		height,
		patternSize,
		translations: getTranslations(patternSize)
	};
	collapseWave(wave);
	const canvas = Array.from(Array(width * height), () => 180);
	wave.elements.forEach((elementsColumn, i) =>
		elementsColumn.forEach((waveElement, j) => {
			canvas[i + j * width] = waveElement.possiblePatterns[0].tile[0][0];
		})
	);
	return canvas;
}
