import type { Pattern } from './Pattern';

interface WaveElement {
	entropy: number;
	possiblePatterns: Pattern[];
	connexElements: {
		connexElement: WaveElement;
		compatibilityMap: Map<Pattern, Map<Pattern, boolean>>;
	}[];
}

export type { WaveElement };
