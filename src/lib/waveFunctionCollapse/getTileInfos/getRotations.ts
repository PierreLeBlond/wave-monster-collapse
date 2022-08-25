const addRotation = (rotations: number[][][], lastRotation: number[][], remainingRotations: number): number[][][] => {
	if (remainingRotations == 0) {
		return rotations;
	}

	const { length } = lastRotation;
	const rotation = lastRotation.map((column, i) => column.map((_, j) => lastRotation[j][length - (i + 1)]));

	return addRotation([...rotations, rotation], rotation, remainingRotations - 1);
};

export default function getRotations(tile: number[][]): number[][][] {
	return addRotation([tile], tile, 3);
}
