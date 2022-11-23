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

<div class="tw-w-96 tw-relative tw-flex tw-grow tw-justify-center tw-gap-x-16">
	<div
		class="tw-w-16 tw-p-2 tw-cursor-pointer"
		on:click={() => {
			tilesetInfos = tilesetInfos;
		}}
		on:keydown={() => {
			tilesetInfos = tilesetInfos;
		}}
	>
		<img class="tw-w-14" src={reload} alt="settings" />
	</div>

	<div class="tw-flex tw-justify-evenly">
		<div
			class="tw-w-10 tw-p-2 tw-cursor-pointer"
			on:click={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
			on:keydown={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
		>
			<img class="tw-w-8" src={minus} alt="minus" />
		</div>
		<div class="tw-w-14 tw-p-2 tw-text-center tw-align-bottom"><p>{mapSize}</p></div>
		<div
			class="tw-w-10 tw-p-2 tw-cursor-pointer"
			on:click={() => {
				mapSize = Math.min(42, mapSize + 1);
			}}
			on:keydown={() => {
				mapSize = Math.min(42, mapSize + 1);
			}}
		>
			<img class="tw-w-8" src={plus} alt="plus" />
		</div>
	</div>
</div>
