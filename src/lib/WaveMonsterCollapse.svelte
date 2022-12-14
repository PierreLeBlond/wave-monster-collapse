<script lang="ts">
	import Map from './Map/Map.svelte';
	import Control from './Panel/Control.svelte';
	import getTilesetInfos from './waveFunctionCollapse/getTilesetInfos/getTilesetInfos';
	import type { TilesetInfos } from './waveFunctionCollapse/getTilesetInfos/TilesetInfos';

	let width: number;
	let height: number;

	let mapSize = 3;
	let tilesetInfos: TilesetInfos = getTilesetInfos();

	let update: (newMapSize: number) => void;
</script>

<div
	class="w-full h-full flex flex-col justify-center items-center"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<Map {mapSize} {tilesetInfos} {width} {height} bind:update />
	<Control {update} bind:mapSize />
</div>
