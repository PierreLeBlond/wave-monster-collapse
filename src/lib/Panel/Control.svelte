<script lang="ts">
	import plus from '../assets/ui/plus.png';
	import minus from '../assets/ui/minus.png';
	import reload from '../assets/ui/reload.png';

	export let mapSize: number;

	export let update: (newMapSize: number) => void;
</script>

<div class="w-full h-16 flex justify-center gap-x-16">
	<div class="w-16 p-2 cursor-pointer" on:click={() => update(mapSize)} on:keydown={() => update(mapSize)}>
		<img class="w-14" src={reload} alt="settings" />
	</div>

	<div class="flex justify-evenly">
		<div
			class="w-10 flex items-center p-2 cursor-pointer"
			on:click={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
			on:keydown={() => {
				mapSize = Math.max(3, mapSize - 1);
			}}
		>
			<img class="w-8" src={minus} alt="minus" />
		</div>
		<div class="w-14 flex items-center justify-center p-2 align-bottom"><p>{mapSize}</p></div>
		<div
			class="w-10 flex items-center p-2 cursor-pointer"
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
