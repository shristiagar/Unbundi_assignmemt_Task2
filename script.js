const maxChocolates = 8;
const pricePerChocolate =5.0 ; // You can change the price of each chocolate

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const priceSpan = document.querySelector(".total-price");
const form = document.querySelector("form");

let selectedChocolates = [];

function updatePrice() {
  let totalPrice = selectedChocolates.length * pricePerChocolate;
  priceSpan.textContent = totalPrice.toFixed(2);
}

function handleCheckboxClick(event) {
  const checkbox = event.target;
  const chocolateName = checkbox.value;

  if (checkbox.checked) {
    if (selectedChocolates.length >= maxChocolates) {
      checkbox.checked = false;
      alert(`You can only select up to ${maxChocolates} chocolates.`);
    } else {
      selectedChocolates.push(chocolateName);
      updatePrice();
    }
  } else {
    selectedChocolates = selectedChocolates.filter(
      (name) => name !== chocolateName
    );
    updatePrice();
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (selectedChocolates.length === 0) {
    alert("Please select at least one chocolate.");
    return;
  }

  alert(
    `You have added the following chocolates to your cart: ${selectedChocolates.join(
      ", "
    )}.`
  );
  form.reset();
  selectedChocolates = [];
  updatePrice();
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckboxClick);
});

form.addEventListener("submit", handleFormSubmit);
