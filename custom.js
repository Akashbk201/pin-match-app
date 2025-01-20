let genBtn = document.getElementById("gen-btn");
let genInput = document.getElementById("pin-box");

// Generate 4 Digit Number

function getPin() {
  let pinOutput = Math.floor(1000 + Math.random() * 9999);
  genInput.value = pinOutput;
}

genBtn.addEventListener("click", getPin);

// KeyPad Function

let keypadValue = document.getElementById("keypad-box");

function keypad(number) {
  if (genInput.value === "") {
    alert("Please Generate a Number First!");
  } else {
    keypadValue.value += number;
  }

  if (number === "C") {
    keypadValue.value = "";
  }
}

// remove signle digit

let singleRemBtn = document.getElementById("single-remove");

function removeSingle() {
  let currentValue = keypadValue.value;
  if (genInput.value === "") {
    alert("Please Generate a Number First!");
  }

  if (keypadValue.value === "") {
    alert("There is no Number");
  }

  keypadValue.value = currentValue.slice(0, -1);
}

singleRemBtn.addEventListener("click", removeSingle);

// Submit Button Function

let submitBtn = document.getElementById("m-submit-btn");
let announceBox = document.getElementById("annouce-box");
let announceText = document.getElementById("announce-text");

function checkPin() {
  if (genInput.value === keypadValue.value) {
    announceText.innerText = "Your Pin Matched! Congratulations.";
    announceBox.classList.remove("bg-gray-900");
    announceBox.classList.add("bg-lime-500");
    genInput.value = "";
    keypadValue.value = "";
  } else {
    announceText.innerText = "Sorry Wrong Pin! Please Try again.";
    announceBox.classList.remove("bg-gray-900");
    announceBox.classList.add("bg-red-500");
    keypadValue.value = "";
    tryLeft();
  }
}

// Limited Submit Function

let tryLitmit = document.getElementById("try-left");

function tryLeft() {
  let tryTotal = parseInt(tryLitmit.innerText);

  if (0 < tryTotal) {
    tryLitmit.innerText = tryTotal - 1;
  } else {
    submitBtn.disabled = true;
    genBtn.disabled = true;
    genBtn.classList.remove("bg-indigo-600");
    genBtn.classList.add("bg-red-500");
    genBtn.innerText = "No More!";
    submitBtn.classList.remove("bg-indigo-600");
    submitBtn.classList.add("bg-red-500");
    submitBtn.innerText = "You Reached Your Limit!";
    announceText.innerText = "Please Try Again in 30 Minutes.";
  }
}

submitBtn.addEventListener("click", checkPin);
