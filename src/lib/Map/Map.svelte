<script lang="ts">
  import { onMount } from 'svelte';
  import getPatternsFromSample from '$lib/waveFunctionCollapse/getPatternsFromSample';
  import getCanvasFromPatterns from '$lib/waveFunctionCollapse/getCanvasFromPatterns';
  import input from './assets/test_2.png';
  import type { Pattern } from '$lib/waveFunctionCollapse/Pattern';
  import getCompatibilityMaps from '$lib/waveFunctionCollapse/getCompatibilityMaps';
  import type { CompatibilityMaps } from '$lib/waveFunctionCollapse/CompatibilityMaps';

  export let mapSize: number;

  const patternWidth = 3;
  const patternHeight = 3;

  const errorColor = 'rgb(230, 86, 216)';

  let patterns: Pattern[] = [];
  let compatibilityMaps: CompatibilityMaps = [];
  let palette: string[] = [];

  $: mapWidth = mapSize;
  $: mapHeight = mapSize;

  let canvas: number[] = [];
  $: {
    if (patterns.length > 0) {
      canvas = getCanvasFromPatterns(patterns, compatibilityMaps, mapWidth, mapHeight, patternWidth, patternHeight);
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

      const withBorders = false;
      if (withBorders) {
        const sampleWidth = img.width + 2;
        const sampleHeight = img.height + 2;

        const sampleWithBorder = Array.from(Array(sampleWidth), () => Array(sampleHeight));

        const borderIndex = palette.length;
        palette.push("rgb(0, 0, 0)");

        for (let i = 0; i < sampleWidth; i ++) {
          sampleWithBorder[i][0] = borderIndex;
          sampleWithBorder[i][sampleHeight - 1] = borderIndex;
        }

        for (let i = 0; i < sampleHeight; i ++) {
          sampleWithBorder[0][i] = borderIndex;
          sampleWithBorder[sampleHeight - 1][i] = borderIndex;
        }

        for (let i = 0; i < img.width; i++) {
          for (let j = 0; j < img.height; j++) {
            sampleWithBorder[i+1][j+1] = sample[i][j];

          }
        }
      }

      patterns = getPatternsFromSample(sample, patternWidth, patternHeight, false);
      compatibilityMaps = getCompatibilityMaps(patterns, patternWidth, patternHeight);
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
          style="width: { 100 / mapSize }%; height: { 100 / mapSize }%;background-color: { value != -1 ? palette[value] : errorColor };"
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
