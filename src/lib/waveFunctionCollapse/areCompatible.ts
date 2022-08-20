export default function areCompatible(
	tile: number[][],
	otherTile: number[][],
	tileWidth: number,
	tileHeight: number,
	translation: { x: number; y: number }
): boolean {
	for (let i = 0; i < tileWidth; i++) {
		for (let j = 0; j < tileHeight; j++) {
			const x = i - translation.x;
			const y = j - translation.y;
			if (x >= 0 && x < tileWidth && y >= 0 && y < tileHeight && tile[i][j] != otherTile[x][y]) {
				return false;
			}
		}
	}
	return true;
}
