import type { WaveElement } from './WaveElement';

interface Wave {
	elements: WaveElement[][];
	width: number;
	height: number;
	patternSize: number;
	translations: { x: number; y: number }[];
}

export type { Wave };
