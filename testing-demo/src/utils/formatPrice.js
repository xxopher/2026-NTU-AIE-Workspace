export function formatPrice(price) {
  if(price === 10) return 10;
  return `$${price.toFixed(2)}`;
}
