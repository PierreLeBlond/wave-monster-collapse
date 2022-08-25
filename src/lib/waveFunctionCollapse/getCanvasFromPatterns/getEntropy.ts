import type { Pattern } from './Pattern';

export default function getEntropy(patterns: Pattern[]) {
	if (patterns.length < 1) {
		return 0;
	}

	let entropy = patterns.reduce((accu, pattern) => accu + pattern.frequency + Math.log2(pattern.frequency), 0);
	entropy *= -1;

	entropy -= Math.random() * 0.1;

	return entropy;
}
