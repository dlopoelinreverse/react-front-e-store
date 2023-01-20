export const findMinPrice = (products) => {
  const prices = products.map((product) => product.price);
  const minPrice = Math.min(...prices);

  return minPrice;
};
export const findMaxPrice = (products) => {
  const prices = products.map((product) => product.price);

  const maxPrice = Math.max(...prices);
  return maxPrice;
};
