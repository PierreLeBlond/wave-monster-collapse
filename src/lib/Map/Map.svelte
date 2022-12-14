<script lang="ts">
	import getCanvasFromPatterns from '../waveFunctionCollapse/getCanvasFromPatterns/getCanvasFromPatterns';
	import type { TilesetPattern } from '../waveFunctionCollapse/getTilesetInfos/TilesetPattern';
	import type { TilesetInfos } from '../waveFunctionCollapse/getTilesetInfos/TilesetInfos';
	import tilesUrls from '../assets/tiles';
	import border from '../assets/ui/border.png';
	import type { TilesetCompatibilityMaps } from '../waveFunctionCollapse/getTilesetInfos/TilesetCompatibilityMaps';

	const kRotations = ['0deg', '-90deg', '180deg', '90deg'];

	export let width: number;
	export let height: number;

	$: wrapperSize = Math.min(width, 0.75 * height);
	$: size = 0.9 * wrapperSize;

	export let mapSize: number;
	export let tilesetInfos: TilesetInfos;

	let mapWidth: number;
	let mapHeight: number;

	let compatibilityMaps: TilesetCompatibilityMaps;
	let patterns: TilesetPattern[];

	let canvas: TilesetPattern[] = [];

	export const update = (newMapSize: number) => {
		mapWidth = newMapSize;
		mapHeight = newMapSize;
		compatibilityMaps = tilesetInfos.compatibilityMaps;
		patterns = tilesetInfos.patterns.filter(({ available }) => available);

		canvas = getCanvasFromPatterns(patterns, compatibilityMaps, mapWidth, mapHeight) as TilesetPattern[];
	};

	$: update(mapSize);
</script>

<div
	class="h-3/4 max-w-full aspect-square p-5 flex justify-center items-center"
	style="width: {wrapperSize}px; height: {wrapperSize}px"
>
	<div
		class="p-3 relative flex flex-wrap justify-center content-center"
		style="width: {size}px; height: {size}px; background-image: url({border}); background-size: 100% 100%; background-position: center;"
	>
		{#each canvas as value}
			<div style="width: {100 / mapSize}%; height: {100 / mapSize}%;">
				{#if value}
					<img
						class="w-full h-full"
						style="transform: rotate({kRotations[value.transformationIndex]})"
						src={tilesUrls[value.name]}
						alt={value.name}
					/>
				{/if}
			</div>
		{/each}
	</div>
</div>
