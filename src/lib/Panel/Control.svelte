<script lang="ts">

  export let mapSize: number;

</script>

<div class="panel">
  <h2> Control </h2>

  <label>
    <input type=number bind:value={mapSize} min=1 max=100>
    <input type=range bind:value={mapSize} min=1 max=100>
  </label>
</div>

<style>
  .panel {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    width: 20%;
    height: 100%;
    background-color: #DDD;
  }
</style>
