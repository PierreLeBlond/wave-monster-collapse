<script lang="ts">
	import plus from '../assets/ui/plus.png';
	import minus from '../assets/ui/minus.png';
	import reload from '../assets/ui/reload.png';

	export let mapSize: number;
	export let wrapperSize: number;

	export let update: (newMapSize: number) => void;
</script>

<div style:width="{wrapperSize}px" class="grid grid-cols-7">
	<div
		class="col-start-2 flex items-center p-2 cursor-pointer"
		on:click={() => update(mapSize)}
		on:keydown={() => update(mapSize)}
	>
		<img class="w-8 sm:w-14" src={reload} alt="settings" />
	</div>

	<div
		class="col-start-4 flex items-center p-2 cursor-pointer"
		on:click={() => {
			mapSize = Math.max(3, mapSize - 1);
		}}
		on:keydown={() => {
			mapSize = Math.max(3, mapSize - 1);
		}}
	>
		<img class="w-8 sm:w-14" src={minus} alt="minus" />
	</div>
	<div class="col-start-5 flex items-center justify-center p-2 align-bottom text-xl sm:text-3xl">
		<p>{mapSize}</p>
	</div>
	<div
		class="col-start-6 flex items-center p-2 cursor-pointer"
		on:click={() => {
			mapSize = Math.min(42, mapSize + 1);
		}}
		on:keydown={() => {
			mapSize = Math.min(42, mapSize + 1);
		}}
	>
		<img class="w-8 sm:w-14" src={plus} alt="plus" />
	</div>
</div>
