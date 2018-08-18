let priceWithoutDiscount = parseFloat(prompt('Enter price', 0));
let discount = parseFloat(prompt('Enter discount', 0));
let priceWithDiscount = null;
let result = null;
let saved = null;
const maxPercent = 100;

if (priceWithoutDiscount > 0 && discount > 0 && discount < maxPercent) {
  priceWithDiscount = priceWithoutDiscount - priceWithoutDiscount * discount / maxPercent;
  saved = priceWithoutDiscount - priceWithDiscount;
  result = `
    Price without discount: ${+priceWithoutDiscount.toFixed(2)}
    Discount: ${+discount.toFixed(2)}
    Price with discount: ${+priceWithDiscount.toFixed(2)}
    Saved:  ${+saved.toFixed(2)}
    `;
} else {
  result = 'Invalid data';
}

console.log(result);