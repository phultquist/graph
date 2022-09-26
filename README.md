# WebAssembly (Rust) and Svelte grapher

Work in progress. More of a proof of concept.

## Benchmarks so far

### Compute 100,000 of the following function:

Typescript
```typescript
export const math_function = (x: number) => {
  return x * x + Math.sin(x) * Math.cos(x);
};
```

Rust
```rust
pub fn math_function(x: f64) -> f64 {
    return x * x + x.sin() * x.cos();
}
```

Average times:

| | WebAssembly (Rust) | JavaScript |
|---|---|---|
| Safari | 3.704ms | 4.591ms |
| Chrome | 3.097ms | 2.214ms |

So WASM appears to be faster than JS in Safari, but not Chrome. More testing to come.