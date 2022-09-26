<script lang="ts">
  import { onMount } from "svelte";
  import { get_data } from "./controller.js";

  let points: Float64Array = new Float64Array(100);

  let min = -1;
  let max = 1;
  let initialized = false;
  const calc = () => {
    if (initialized) {
      console.time("calc — JS");
      points = get_data(min, max).slice(0, 100);
      console.timeEnd("calc — JS");
    }
  };

  onMount(async () => {
    calc();
    initialized = true;
  });

  $: {
    min, max, calc();
  }
</script>

<div>
  <label for="">start</label>
  <input type="range" name="" bind:value={min} id="" />
</div>

<div>
  <label for="">end</label>
  <input type="range" name="" bind:value={max} id="" />
</div>

{#each points as point}
  <div>
    {point}
  </div>
{/each}
