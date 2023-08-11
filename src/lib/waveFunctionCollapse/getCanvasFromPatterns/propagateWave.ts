import type { WaveElement } from './WaveElement';
import reduceWaveElement from './reduceWaveElement';

export default function propagateWave(waveElement: WaveElement) {
	const ElementsToPropagateFrom: WaveElement[] = [];

	const propagate = () => {
		const nextWaveElement = ElementsToPropagateFrom.pop() as WaveElement;

		const { connexElements } = nextWaveElement;

		const { length } = connexElements;

		/* we use a for loop for performance */
		for (let i = 0; i < length; i++) {

			const element = connexElements[i];

			if (!element) {
				throw new Error('connex element does not exists');
			}

			const { connexElement, compatibilityMap } = element;
			if (connexElement.entropy != 0) {
				const possiblePatternsLength = connexElement.possiblePatterns.length;
				reduceWaveElement(compatibilityMap, connexElement, nextWaveElement);
				if (connexElement.possiblePatterns.length != possiblePatternsLength) {
					if (!ElementsToPropagateFrom.includes(connexElement)) {
						ElementsToPropagateFrom.push(connexElement);
					}
				}
			}
		}
	};

	ElementsToPropagateFrom.push(waveElement);

	while (ElementsToPropagateFrom.length > 0) {
		propagate();
	}
}
