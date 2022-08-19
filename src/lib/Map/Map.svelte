<script lang="ts">
  import { onMount } from 'svelte';
  import getPatternsFromSample from '$lib/waveFunctionCollapse/getPatternsFromSample';
  import getCanvasFromPatterns from '$lib/waveFunctionCollapse/getCanvasFromPatterns';
  import input from './assets/test.png';
  import type { Pattern } from '$lib/waveFunctionCollapse/Pattern';

  export let mapSize: number;

  const patternSize = 2;

  let patterns: Pattern[] = [];
  let palette: string[] = [];

  $: mapWidth = mapSize;
  $: mapHeight = mapSize;

  let canvas: number[] = [];
  $: {
    if (patterns.length > 1) {
      canvas = getCanvasFromPatterns(patterns, mapWidth, mapHeight, patternSize);
    }
  }

  let width: number;
  let height: number;

  $: size = 0.8 * Math.min(width, height);

  let display = false;
  onMount(() => {
    const img = new Image();
    img.src = input;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const rgba = ctx.getImageData(0, 0, img.width, img.height).data;

      const paletteMap: {[key: string]: number} = {};

      const sample = Array.from(Array(img.width), () => Array(img.height));

      palette = [];

      for (let i = 0; i < img.width*img.height; i++) {
        const colorString = `rgb(${rgba[4*i]}, ${rgba[4*i+1]}, ${rgba[4*i+2]})`;

        let paletteIndex = paletteMap[colorString];

        if (paletteIndex == undefined) {
          paletteIndex = palette.length;
          palette.push(colorString);
          paletteMap[colorString] = paletteIndex;
        }

        sample[i%img.width][Math.floor(i/img.width)] = paletteIndex;
      }

      patterns = getPatternsFromSample(sample, patternSize);
    }

    display = true;
  });
</script>

<div class="map-wrapper" bind:clientWidth={width} bind:clientHeight={height}>
  <div class="map" style="width: {size}px; height: {size}px">
    {#if display}
      {#each canvas as value}
        <div
          class="tile"
          style="width: { 100 / mapSize }%; height: { 100 / mapSize }%;background-color: { palette[value] };"
        >
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .map-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .map {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }
</style>
