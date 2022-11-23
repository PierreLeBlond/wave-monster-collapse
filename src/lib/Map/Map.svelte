<script lang="ts">
	import getCanvasFromPatterns from '../waveFunctionCollapse/getCanvasFromPatterns/getCanvasFromPatterns';
	import type { TilesetPattern } from '../waveFunctionCollapse/getTilesetInfos/TilesetPattern';
	import type { TilesetInfos } from '../waveFunctionCollapse/getTilesetInfos/TilesetInfos';
	import tilesUrls from '../assets/tiles';
	import border from '../assets/ui/border.png';

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
	class="tw-w-full md:tw-w-auto md:tw-h-full tw-aspect-square tw-p-5 tw-flex tw-grow-0 tw-shrink-0 tw-justify-center tw-items-center"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<div
		class="tw-p-3 tw-flex tw-flex-wrap tw-justify-center tw-content-center"
		style="width: {size}px; height: {size}px; background-image: url({border}); background-size: 100% 100%; background-position: center;"
	>
		{#each canvas as value}
			<div style="width: {100 / mapSize}%; height: {100 / mapSize}%;">
				{#if value}
					<img
						class="tw-w-full tw-h-full"
						style="transform: rotate({kRotations[value.transformationIndex]})"
						src={tilesUrls[value.name]}
						alt={value.name}
					/>
				{/if}
			</div>
		{/each}
	</div>
</div>
