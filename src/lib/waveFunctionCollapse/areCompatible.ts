export default function areCompatible(
	tile: number[][],
	otherTile: number[][],
	tileSize: number,
	translation: { x: number; y: number }
): boolean {
	return tile.every((tileColumn, i) =>
		tileColumn.every((value, j) => {
			const position = { x: i - translation.x, y: j - translation.y };
			if (position.x < 0 || position.x >= tileSize || position.y < 0 || position.y >= tileSize) {
				return true;
			}
			return value == otherTile[position.x][position.y];
		})
	);
}
