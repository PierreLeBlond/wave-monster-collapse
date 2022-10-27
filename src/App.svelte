<script lang="ts">
	import { onMount } from 'svelte';
	import Map from './lib/Map/Map.svelte';
	import Info from './lib/Panel/Info.svelte';
	import Control from './lib/Panel/Control.svelte';
	import xmlFile from './lib/assets/Circuit.xml?url';
	import getTilesetInfos from './lib/waveFunctionCollapse/getTilesetInfos/getTilesetInfos';
	import type { TilesetInfos } from './lib/waveFunctionCollapse/getTilesetInfos/TilesetInfos';
	import type { TilesetPattern } from './lib/waveFunctionCollapse/getTilesetInfos/TilesetPattern';

	let mapSize = 3;

	let tilesetInfos: TilesetInfos;
	let selectedPattern: TilesetPattern;
	let display = false;
	onMount(async () => {
		tilesetInfos = await getTilesetInfos(xmlFile);
		display = true;
	});
</script>

<main class="w-full h-full flex">
	{#if display}
		<Control bind:mapSize bind:tilesetInfos bind:selectedPattern />
		<Map {mapSize} {tilesetInfos} />
		<Info {tilesetInfos} {selectedPattern} />
	{/if}
</main>
