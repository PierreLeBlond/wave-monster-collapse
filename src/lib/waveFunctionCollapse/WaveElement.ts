import type { Pattern } from './Pattern';

interface WaveElement {
	entropy: number;
	possiblePatterns: Pattern[];
	position: { x: number; y: number };
}

export type { WaveElement };
