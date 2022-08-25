<script lang="ts">
  import type { TilesetCompatibilityMaps } from "$lib/waveFunctionCollapse/getTilesetInfos/TilesetCompatibilityMaps";
  import type { TilesetInfos } from "$lib/waveFunctionCollapse/getTilesetInfos/TilesetInfos";
  import type { TilesetPattern } from "$lib/waveFunctionCollapse/getTilesetInfos/TilesetPattern";
  import tilesUrls from "$lib/assets/tiles";

  export let tilesetInfos: TilesetInfos;
  export let selectedPattern: TilesetPattern;

  $: patternGroups = tilesetInfos.patterns.filter(pattern => pattern.transformationIndex == 0)
  .map(pattern => ({
    name: pattern.name,
    transformations: tilesetInfos.patterns.filter(otherPattern => otherPattern.name == pattern.name)
  }));

  $: compatiblePatternNames = selectedPattern
    ?  patternGroups.filter(patternGroup => (tilesetInfos.compatibilityMaps as TilesetCompatibilityMaps).some(compatibilityMap => patternGroup.transformations.some(pattern => compatibilityMap.get(selectedPattern).get(pattern)))).map(patternGroup => patternGroup.name)
    : [];
    $: incompatiblePatternNames = selectedPattern
      ? patternGroups.filter(patternGroup => compatiblePatternNames.indexOf(patternGroup.name) == -1).map(patternGroup => patternGroup.name)
      : [];

</script>

<div class="w-96 pt-8 h-screen relative flex flex-col grow items-center">
  {#if selectedPattern}
    <div class="w-16 p-2" style="background-image: url(./assets/selected.png); background-size: 100% 100%;">
      <img class="w-14" src="{ tilesUrls[selectedPattern.name] }" alt="{ selectedPattern.name }" />
    </div>

    <div class="pt-8 flex flex-col items-center">
      <div class="w-16 p-2 mb-2" style="background-image: url(./assets/menu.png); background-size: 100% 100%;">
        <img class="w-14" src="./assets/like.png" alt="like" />
      </div>
      <ul class="flex flex-wrap place-content-center overflow-y-auto">
        {#each compatiblePatternNames as patternName }
          <li class="w-16 p-2" style="background-image: url(./assets/info.png); background-size: 100% 100%;">
            <img class="w-14" src="{ tilesUrls[patternName] }" alt="{ patternName }"/>
          </li>
        {/each}
      </ul>
    </div>

    <div class="pt-8 flex flex-col items-center">
      <div class="w-16 p-2 mb-2" style="background-image: url(./assets/menu.png); background-size: 100% 100%;">
        <img class="w-14" src="./assets/dislike.png" alt="like" />
      </div>
      <ul class="flex flex-wrap place-content-center overflow-y-auto">
        {#each incompatiblePatternNames as patternName }
          <li class="w-16 p-2" style="background-image: url(./assets/info.png); background-size: 100% 100%;">
            <img class="w-14" src="{ tilesUrls[patternName] }" alt="{ patternName }"/>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

</div>
