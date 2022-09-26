// The wasm-pack uses wasm-bindgen to build and generate JavaScript binding file.
// Import the wasm-bindgen crate.
use js_sys::Float64Array;
use wasm_bindgen::prelude::*;

// Define the size of our "checkerboard"
const N_POINTS: usize = 100000;

#[wasm_bindgen]
pub fn run_math_functions(points_min: f64, points_max: f64) -> Float64Array {
    let mut arr = [0.; N_POINTS];
    for i in 0..N_POINTS {
        let x = points_min + (points_max - points_min) * (i as f64) / ((N_POINTS - 1) as f64);
        arr[i] = math_function(x);
    }

    return Float64Array::from(arr.as_ref());
}

pub fn math_function(x: f64) -> f64 {
    return x * x + x.sin() * x.cos();
}
