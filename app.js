const PHONE_PRICE = 1000;
const CASE_PRICE = 50;
const TAX = 20;

function updateQuantity(product, price, TAX, isIncreasing) {
  const productQuantity = document.getElementById(product + "-quantity");
  let productQuantityValue = Number(productQuantity.value);
  let newQuantity = 0;
  if (isIncreasing) {
    newQuantity = productQuantityValue + 1;
  } else {
    if (productQuantityValue > 0) {
      newQuantity = productQuantityValue - 1;
    }
  }

  productQuantity.value = newQuantity;
  console.log(isIncreasing, "newQuantity ", newQuantity);
  updatePrice(product, newQuantity, price);
  updateTotal(TAX);
}

function updatePrice(product, productQuantity, price, TAX) {
  let newPrice = Number(productQuantity) * Number(price);
  console.log(newPrice, productQuantity, price);
  let productPrice = document.getElementById(product + "-price");
  productPrice.innerText = newPrice;
}

function updateSuptotal() {
  let subtotalPrice = document.getElementById("subtotal-price");

  let phonePrice = document.getElementById("phone-price").innerText;
  let casePrice = document.getElementById("case-price").innerText;
  let newSubtotalPrice = Number(phonePrice) + Number(casePrice);

  subtotalPrice.innerText = newSubtotalPrice;
  return newSubtotalPrice;
}
function updateTax(suptotal, TAX) {
  let tax = document.getElementById("tax");
  let newTax = suptotal * (TAX / 100);
  tax.innerText = newTax;
  return newTax;
}
function updateTotal(TAX) {
  let suptotal = updateSuptotal();
  let tax = updateTax(suptotal, TAX);
  console.log("suptotal", suptotal, "tax", tax);
  document.getElementById("total-price").innerText = suptotal + tax;
}

document.getElementById("phone-plus").addEventListener("click", () => {
  updateQuantity("phone", PHONE_PRICE, TAX, true);
});

document.getElementById("case-plus").addEventListener("click", () => {
  updateQuantity("case", CASE_PRICE, TAX, true);
});

document.getElementById("phone-minus").addEventListener("click", () => {
  updateQuantity("phone", PHONE_PRICE, TAX, false);
});

document.getElementById("case-minus").addEventListener("click", () => {
  updateQuantity("case", CASE_PRICE, TAX, false);
});
