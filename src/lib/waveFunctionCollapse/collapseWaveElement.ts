import type { Pattern } from './Pattern';
import type { WaveElement } from './WaveElement';

export default function collapseWaveElement(waveElement: WaveElement) {
	const totalProbability = waveElement.possiblePatterns.reduce((accu, { frequency }) => accu + frequency, 0);
	const probabilities = waveElement.possiblePatterns.reduce(
		(accu: number[], { frequency }) => [...accu, accu[accu.length - 1] + frequency / totalProbability],
		[0]
	);
	const value = Math.random();
	const collapsedPattern = waveElement.possiblePatterns.find((_, i) => value <= probabilities[i + 1]) as Pattern;

	waveElement.entropy = 0;
	waveElement.possiblePatterns = [collapsedPattern];
}
