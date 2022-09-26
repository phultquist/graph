import wasmInit, { run_math_functions } from "./pkg/wasm_playground.js";

const runWasm = async () => {
  // Instantiate our wasm module
  await wasmInit("./pkg/wasm_playground_bg.wasm");

  // Generate the output
  const output = run_math_functions(-1, 1);

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(200, 0, 0)";
  //   ctx.fillRect(10, 10, 55, 50);

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.translate(0.5, 0.5);

  for (let i = 0; i < output.length; i++) {
    ctx.beginPath();
    // ctx.(i, output[i], 5, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgb(200, 0, 0)";
    // ctx.ellipse(i, output[i], 5, 5, 0, 0, 2 * Math.PI);
    ctx.fillRect(i * 10, output[i] * 90, 5, 5);
  }
};

runWasm();
