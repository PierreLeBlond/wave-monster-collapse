import getCompatibilityMap from './getCompatibilityMaps';
import getPatternsFromSample from './getPatternsFromSample';
import getSampleFromImage from './getSampleFromImage';

export default async function getTileInfos(
	imageUrl: string,
	patternWidth: number,
	patternHeight: number,
	withRotations: boolean
) {
	const { sample, palette } = await getSampleFromImage(imageUrl);
	const patterns = getPatternsFromSample(sample, patternWidth, patternHeight, withRotations);
	const compatibilityMaps = getCompatibilityMap(patterns, patternWidth, patternHeight);

	return {
		patterns,
		compatibilityMaps,
		palette
	};
}
