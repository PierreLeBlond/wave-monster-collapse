export default function getTranslations(width: number, height: number) {
	const translations = [];
	for (let x = -width + 1; x < width; x++) {
		for (let y = -height + 1; y < height; y++) {
			if (x != 0 || y != 0) {
				translations.push({ x, y });
			}
		}
	}
	return translations;
}
