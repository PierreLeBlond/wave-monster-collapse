import type { Constraint } from './Constraint';
import getEntropy from './getCanvasFromPatterns/getEntropy';
import propagateWave from './getCanvasFromPatterns/propagateWave';
import type { Wave } from './getCanvasFromPatterns/Wave';

export default function addConstraints(wave: Wave, width: number, constraints: Constraint[]) {
	constraints.forEach(({ x, y, value }) => {
		const waveElement = wave.elements[x + width * y];

		if (!waveElement) {
			throw new Error('Couldn"t find wave element')
		}

		waveElement.possiblePatterns = waveElement.possiblePatterns.filter((pattern) => pattern.tile[0][0] == value);
		waveElement.entropy = getEntropy(waveElement.possiblePatterns);

		propagateWave(waveElement);
	});
}
