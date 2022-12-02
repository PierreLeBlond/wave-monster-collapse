<script lang="ts">
	import { onMount } from 'svelte';
	import Map from './Map/Map.svelte';
	import Control from './Panel/Control.svelte';
	import xmlFile from './assets/Circuit.xml?url';
	import getTilesetInfos from './waveFunctionCollapse/getTilesetInfos/getTilesetInfos';
	import type { TilesetInfos } from './waveFunctionCollapse/getTilesetInfos/TilesetInfos';

	let mapSize = 3;

	let tilesetInfos: TilesetInfos;
	let display = false;
	onMount(async () => {
		tilesetInfos = await getTilesetInfos(xmlFile);
		display = true;
	});
</script>

<div class="w-full h-full flex-col">
	{#if display}
		<div class="h-3/4 flex justify-center">
			<Map {mapSize} {tilesetInfos} />
		</div>
		<div class="h-1/4 flex justify-center">
			<Control bind:mapSize bind:tilesetInfos />
		</div>
	{/if}
</div>
