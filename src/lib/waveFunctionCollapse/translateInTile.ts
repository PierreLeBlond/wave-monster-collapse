export default function translateInTile(tileSize: number, i: number, x: number, y: number): number {
	const position = { x: i % tileSize, y: Math.floor(i / tileSize) };
	const nextPosition = { x: x + position.x, y: y + position.y };

	if (nextPosition.x < 0 || nextPosition.x >= tileSize || nextPosition.y < 0 || nextPosition.y >= tileSize) {
		return -1; // -1 indicates that we are outside of the tile
	}

	return nextPosition.x + tileSize * nextPosition.y;
}
