import areCompatible from './areCompatible';
import getEntropy from './getEntropy';
import type { Wave } from './Wave';
import type { WaveElement } from './WaveElement';

export default function reduceWaveElement(wave: Wave, waveElement: WaveElement, connexWaveElements: WaveElement[]) {
	const { patternSize } = wave;
	const { position } = waveElement;
	waveElement.possiblePatterns = waveElement.possiblePatterns.filter((pattern) =>
		connexWaveElements.every((connexWaveElement) => {
			const translation = {
				x: connexWaveElement.position.x - position.x,
				y: connexWaveElement.position.y - position.y
			};
			return connexWaveElement.possiblePatterns.some((nextPattern) =>
				areCompatible(pattern.tile, nextPattern.tile, patternSize, translation)
			);
		})
	);
	waveElement.entropy = getEntropy(waveElement.possiblePatterns);
}
