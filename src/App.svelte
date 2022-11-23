<script lang="ts">
	import { onMount } from 'svelte';
	import Map from './lib/Map/Map.svelte';
	import Control from './lib/Panel/Control.svelte';
	import xmlFile from './lib/assets/Circuit.xml?url';
	import getTilesetInfos from './lib/waveFunctionCollapse/getTilesetInfos/getTilesetInfos';
	import type { TilesetInfos } from './lib/waveFunctionCollapse/getTilesetInfos/TilesetInfos';

	let mapSize = 3;

	let tilesetInfos: TilesetInfos;
	let display = false;
	onMount(async () => {
		tilesetInfos = await getTilesetInfos(xmlFile);
		display = true;
	});
</script>

<div class="tw-w-full tw-h-full tw-flex-column">
	{#if display}
		<div class="tw-h-3/4 tw-flex tw-justify-center">
			<Map {mapSize} {tilesetInfos} />
		</div>
		<div class="tw-h-1/4 tw-flex tw-justify-center">
			<Control bind:mapSize bind:tilesetInfos />
		</div>
	{/if}
</div>
