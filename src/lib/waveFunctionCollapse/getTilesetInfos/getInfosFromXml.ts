interface TilesetTile {
	name: string;
	frequency: number;
	symmetry: string;
}

export default async function getInfosFromXml(xmlFileUrl: string) {
	const response = await fetch(xmlFileUrl);
	const text = await response.text();
	const domParser = new DOMParser();
	const xmlDocument = domParser.parseFromString(text, 'text/xml');

	const tiles = Array.from(xmlDocument.getElementsByTagName('tiles')[0].children).map(
		(tile): TilesetTile => ({
			name: tile.getAttribute('name') as string,
			frequency: tile.hasAttribute('weight') ? Number(tile.getAttribute('weight')) : 1,
			symmetry: tile.getAttribute('symmetry') as string
		})
	);

	const neighbors = Array.from(xmlDocument.getElementsByTagName('neighbors')[0].children).map((neighbor) => {
		const [leftPatternName, leftPatternTransformationIndex] = (neighbor.getAttribute('left') as string).split(' ');
		const [rightPatternName, rightPatternTransformationIndex] = (neighbor.getAttribute('right') as string).split(' ');
		return {
			leftPattern: {
				name: leftPatternName,
				index: !!leftPatternTransformationIndex ? leftPatternTransformationIndex : 0
			},
			rightPattern: {
				name: rightPatternName,
				index: !!rightPatternTransformationIndex ? rightPatternTransformationIndex : 0
			}
		};
	});

	return {
		tiles,
		neighbors
	};
}
