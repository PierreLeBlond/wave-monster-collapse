<script lang="ts">
	import type { TilesetInfos } from '../waveFunctionCollapse/getTilesetInfos/TilesetInfos';
	import type { TilesetPattern } from '../waveFunctionCollapse/getTilesetInfos/TilesetPattern';
	import plus from '../assets/ui/plus.png';
	import minus from '../assets/ui/minus.png';
	import reload from '../assets/ui/reload.png';

	export let mapSize: number;
	export let tilesetInfos: TilesetInfos;

	// const changeAvailability = (pattern: TilesetPattern) => {
	//   const { available } = pattern;
	//   tilesetInfos.patterns.filter(otherPattern => otherPattern.name == pattern.name).forEach(otherPattern => {
	//     otherPattern.available = !available;
	//   });
	//   // triggers reactivity
	//   tilesetInfos = tilesetInfos;
	// };
</script>

<div class="w-96 relative flex grow justify-center gap-x-16">
	<div
		class="w-16 p-2 cursor-pointer"
		on:click={() => {
			tilesetInfos = tilesetInfos;
		}}
		on:keydown={() => {
			tilesetInfos = tilesetInfos;
		}}
	>
		<img class="w-14" src={reload} alt="settings" />
	</div>

	<div class="flex justify-evenly">
		<div
			class="w-10 p-2 cursor-pointer"
			on:click={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
			on:keydown={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
		>
			<img class="w-8" src={minus} alt="minus" />
		</div>
		<div class="w-14 p-2 text-center align-bottom"><p>{mapSize}</p></div>
		<div
			class="w-10 p-2 cursor-pointer"
			on:click={() => {
				mapSize = Math.min(42, mapSize + 1);
			}}
			on:keydown={() => {
				mapSize = Math.min(42, mapSize + 1);
			}}
		>
			<img class="w-8" src={plus} alt="plus" />
		</div>
	</div>
</div>
