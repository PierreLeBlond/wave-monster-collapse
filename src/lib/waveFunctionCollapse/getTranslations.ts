export default function getTranslations(size: number) {
	const translations = [];
	for (let x = -size + 1; x < size; x++) {
		for (let y = -size + 1; y < size; y++) {
			if (x != 0 || y != 0) {
				translations.push({ x, y });
			}
		}
	}
	return translations;
}
