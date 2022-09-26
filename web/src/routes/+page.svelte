<script lang="ts">
  import Graph from "$lib/Graph.svelte";
  import GraphJS from "$lib/GraphJS.svelte";
</script>

<div class="flex">
  <div>
    <Graph />
  </div>
  <div>
    <GraphJS />
  </div>
</div>

<style>
  .flex {
    display: flex;
  }

  .flex div {
    flex: 1;
  }
</style>
