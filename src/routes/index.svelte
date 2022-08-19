<script lang="ts">
  import Map from '$lib/Map/Map.svelte';
  import Info from '$lib/Panel/Info.svelte';
  import Control from '$lib/Panel/Control.svelte';

  let mapSize = 3;
</script>

<svelte:head>
  <title>square motion relax</title>
  <meta name="description" content="Wave function collapse example" />
</svelte:head>

<main>
  <Control bind:mapSize={mapSize} />
  <Map {mapSize} />
  <Info />
</main>

<style>
  main {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
