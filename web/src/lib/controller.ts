const n_points = 100000;

export const math_function = (x: number) => {
  return x * x + Math.sin(x) * Math.cos(x);
};

export const get_data = (points_min: number, points_max: number) => {
  const data = new Float64Array(n_points);
  for (let i = 0; i < n_points; i++) {
    const x = points_min + ((points_max - points_min) * i) / (n_points - 1);
    data[i] = math_function(x);
  }

  return data;
};
