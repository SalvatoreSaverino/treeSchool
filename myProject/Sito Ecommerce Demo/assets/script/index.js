// Cart

const cartIcon = document.querySelector("#cart_icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close_cart");
// Open
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// Close
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Making Function

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
}
ready();

function ready() {
  // Remove items from cart
  var removeCartButtons = document.getElementsByClassName("cart_remove");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //   Quantity Changes
  var quantityInputs = document.querySelector(".cart_quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}
// Update total
function updateTotal() {
  var cartContent = document.querySelector(".cart_content")[0];
  var cartBoxes = cartContent.querySelector(".cart_box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.querySelector(".cart_price")[0];
    var quantityElement = cartBox.querySelector(".cart_quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$",""));
    var quantity = quantityElement.value;
    total = total + quantity * price;
    document.querySelector(".total_price")[0].innerText = "$" + total;
  }
}
