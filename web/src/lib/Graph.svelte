<script lang="ts">
  import wasmInit, { run_math_functions } from "../pkg/wasm_playground.js";
  import { onMount } from "svelte";

  let points: Float64Array = new Float64Array(100);

  let min = -1;
  let max = 1;
  let initialized = false;
  const calc = () => {
    if (initialized) {
      console.time("calc — WASM");
      points = run_math_functions(min, max).slice(0, 100);
      console.timeEnd("calc — WASM");
    }
  };

  onMount(async () => {
    await wasmInit("/wasm_playground_bg.wasm");

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
