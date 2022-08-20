import type { WaveElement } from './WaveElement';

interface Wave {
	elements: WaveElement[];
	elementWithLowestEntropy: WaveElement;
}

export type { Wave };
