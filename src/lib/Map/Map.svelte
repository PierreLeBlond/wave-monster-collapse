<script lang="ts">
	import getCanvasFromPatterns from '../waveFunctionCollapse/getCanvasFromPatterns/getCanvasFromPatterns';
	import type { TilesetPattern } from '../waveFunctionCollapse/getTilesetInfos/TilesetPattern';
	import type { TilesetInfos } from '../waveFunctionCollapse/getTilesetInfos/TilesetInfos';
	import tilesUrls from '../assets/tiles';

	const kRotations = ['0deg', '-90deg', '180deg', '90deg'];

	let width: number;
	let height: number;
	$: size = 0.9 * Math.min(width, height);

	export let mapSize: number;
	export let tilesetInfos: TilesetInfos;

	$: mapWidth = mapSize;
	$: mapHeight = mapSize;

	$: compatibilityMaps = tilesetInfos.compatibilityMaps;
	$: patterns = tilesetInfos.patterns.filter(({ available }) => available);
	let canvas: TilesetPattern[] = [];
	$: {
		if (patterns.length > 0) {
			canvas = getCanvasFromPatterns(patterns, compatibilityMaps, mapWidth, mapHeight) as TilesetPattern[];
		}
	}
</script>

<div
	class="h-full aspect-square flex grow-0 shrink-0 justify-center items-center"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<div
		class="p-5 flex flex-wrap justify-center content-center"
		style="width: {size}px; height: {size}px; background-image: url(./assets/border.png); background-size: 100% 100%; background-position: center;"
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
