<script lang="ts">
	import type { TilesetInfos } from '../waveFunctionCollapse/getTilesetInfos/TilesetInfos';
	import type { TilesetPattern } from '../waveFunctionCollapse/getTilesetInfos/TilesetPattern';
	import tilesUrls from '../assets/tiles';

	export let mapSize: number;
	export let tilesetInfos: TilesetInfos;
	export let selectedPattern: TilesetPattern;

	$: patterns = tilesetInfos.patterns.filter((pattern) => pattern.transformationIndex == 0);

	// const changeAvailability = (pattern: TilesetPattern) => {
	//   const { available } = pattern;
	//   tilesetInfos.patterns.filter(otherPattern => otherPattern.name == pattern.name).forEach(otherPattern => {
	//     otherPattern.available = !available;
	//   });
	//   // triggers reactivity
	//   tilesetInfos = tilesetInfos;
	// };

	const selectPattern = (pattern: TilesetPattern) => {
		selectedPattern = pattern;
	};
</script>

<div class="w-96 pt-8 h-screen relative flex flex-col grow items-center">
	<div class="w-16 p-2" style="background-image: url(./assets/menu.png); background-size: 100% 100%;">
		<img class="w-14" src="./assets/settings.png" alt="settings" />
	</div>

	<div
		class="w-16 p-2 mt-8 cursor-pointer"
		style="background-image: url(./assets/item.png); background-size: 100% 100%;"
		on:click={() => {
			tilesetInfos = tilesetInfos;
		}}
	>
		<img class="w-14" src="./assets/reload.png" alt="settings" />
	</div>

	<div class="flex justify-evenly items-center pt-8">
		<div
			class="w-10 p-2 cursor-pointer"
			style="background-image: url(./assets/item.png); background-size: 100% 100%;"
			on:click={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
		>
			<img class="w-8" src="./assets/minus.png" alt="minus" />
		</div>
		<div class="w-14 text-center align-bottom">{mapSize}</div>
		<div
			class="w-10 p-2 cursor-pointer"
			style="background-image: url(./assets/item.png); background-size: 100% 100%;"
			on:click={() => {
				mapSize = Math.min(42, mapSize + 1);
			}}
		>
			<img class="w-8" src="./assets/plus.png" alt="plus" />
		</div>
	</div>

	<ul class="pt-8 flex flex-wrap place-content-center overflow-y-auto">
		{#each patterns as pattern}
			<li
				class:selected={pattern.name == selectedPattern?.name}
				class="flex flex-wrap w-16 p-2"
				on:click={() => selectPattern(pattern)}
			>
				<img class="w-14" src={tilesUrls[pattern.name]} alt={pattern.name} />
			</li>
		{/each}
	</ul>
</div>

<style>
	li {
		background-image: url('/assets/item.png');
		background-size: 100% 100%;
	}

	li:hover {
		background-image: url('/assets/hovered.png');
	}

	li.selected {
		background-image: url('/assets/selected.png');
	}
</style>
