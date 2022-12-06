<script lang="ts">
	import Map from './Map/Map.svelte';
	import Control from './Panel/Control.svelte';
	import getTilesetInfos from './waveFunctionCollapse/getTilesetInfos/getTilesetInfos';
	import type { TilesetInfos } from './waveFunctionCollapse/getTilesetInfos/TilesetInfos';

	let mapSize = 3;
	let tilesetInfos: TilesetInfos = getTilesetInfos();

	let update: (newMapSize: number) => void;
</script>

<div class="w-full h-full flex-col">
	<div class="h-3/4 flex justify-center">
		<Map {mapSize} {tilesetInfos} bind:update />
	</div>
	<div class="h-1/4 flex justify-center">
		<Control {update} bind:mapSize />
	</div>
</div>
