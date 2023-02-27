<script lang="ts">
	import plus from '../assets/ui/plus.png';
	import minus from '../assets/ui/minus.png';
	import reload from '../assets/ui/reload.png';

	export let mapSize: number;

	export let update: (newMapSize: number) => void;
</script>

<div class="w-full h-16 sm:h-24 flex items-center justify-center gap-x-16">
	<div class="w-16 sm:w-24 p-2 cursor-pointer" on:click={() => update(mapSize)} on:keydown={() => update(mapSize)}>
		<img class="w-14 sm:w-20" src={reload} alt="settings" />
	</div>

	<div class="flex justify-evenly">
		<div
			class="w-10 sm:w-16 flex items-center p-2 cursor-pointer"
			on:click={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
			on:keydown={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
		>
			<img class="w-8 sm:w-14" src={minus} alt="minus" />
		</div>
		<div class="w-10 sm:w-16 flex items-center justify-center p-2 align-bottom text-xl sm:text-3xl">
			<p>{mapSize}</p>
		</div>
		<div
			class="w-10 sm:w-16 flex items-center p-2 cursor-pointer"
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
</div>
