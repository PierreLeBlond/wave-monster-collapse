<script lang="ts">
	import Map from './Map/Map.svelte';
	import Control from './Panel/Control.svelte';
	import getTilesetInfos from './waveFunctionCollapse/getTilesetInfos/getTilesetInfos';
	import type { TilesetInfos } from './waveFunctionCollapse/getTilesetInfos/TilesetInfos';

	let width: number;
	let height: number;

	$: wrapperSize = Math.min(width, 0.75 * height);

	let mapSize = 3;
	let tilesetInfos: TilesetInfos = getTilesetInfos();

	let update: (newMapSize: number) => void;
</script>

<div
	class="w-full h-full flex flex-col justify-center items-center overflow-hidden"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<Map {mapSize} {tilesetInfos} {wrapperSize} bind:update />
	<Control {update} {wrapperSize} bind:mapSize />
</div>
