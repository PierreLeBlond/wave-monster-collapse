import type { Constraint } from './Constraint';
import getEntropy from './getEntropy';
import propagateWave from './propagateWave';
import type { Wave } from './Wave';

export default function addConstraints(wave: Wave, width: number, constraints: Constraint[]) {
	constraints.forEach(({ x, y, value }) => {
		const waveElement = wave.elements[x + width * y];

		waveElement.possiblePatterns = waveElement.possiblePatterns.filter((pattern) => pattern.tile[0][0] == value);
		waveElement.entropy = getEntropy(waveElement.possiblePatterns);

		propagateWave(waveElement);
	});
}
