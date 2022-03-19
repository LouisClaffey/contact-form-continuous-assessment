
// Referenced for parsing text to float: https://www.youtube.com/watch?v=YeFzkC2awTM&ab_channel=WebDevSimplified & https://www.w3schools.com/js/js_number_methods.asp
// Referenced for onchange - value method: https://www.w3schools.com/jsref/event_onchange.asp
function optionChange() {
  var selection = parseFloat(document.getElementById("my-selection").value);
  document.getElementById("total-value").innerHTML = "€" + selection;
}


// https://stackoverflow.com/questions/15280851/how-can-i-increment-a-value-inside-html
function validateDiscount() {
  var correctCode = "mextexgood"
  var discount = document.forms["myForm"]["discount-code"].value;
  if (discount === null || discount === "") {
    console.log("no discount applied.")
    return false;
  } else if ((discount.toUpperCase()) === (correctCode.toUpperCase()) && (discount.toLowerCase()) === correctCode) {
    alert("Valid code! You get 13.5% off!");
    return true;
  } else {
    alert("Invalid code. Try Again.")
    return false;
  }

}


function getTotal() {
  var total = 0;
  var amount = document.getElementById("amount");
  var number = parseFloat(amount.innerHTML);
  var selection = parseFloat(document.getElementById("my-selection").value);
  total = (selection * number);
  document.getElementById("total-value").innerHTML = "Your Total is: €" + total;
  if (validateDiscount() === true){
    var newTotal = (total * 13.5) / 100;
    var discTotal = total - newTotal;
    // Referenced: https://www.handlebar-online.com/writing-tips/how-do-you-round-to-2-decimal-places-in-javascript/
    document.getElementById("total-value").innerHTML = "Your Total is: €" + discTotal.toFixed(2);
  }
}


// referenced: https://stackoverflow.com/questions/15280851/how-can-i-increment-a-value-inside-html
function addNumber() {
  var amount = document.getElementById("amount");
  var number = parseFloat(amount.innerHTML);
  number++;
  amount.innerHTML = number;
}

function subNumber() {
  var staticAmount = 0;
  var amount = document.getElementById("amount");
  var number = parseInt(amount.innerHTML);
  number--;
  amount.innerHTML = number;
  if (number < 0) {
    number = staticAmount;
    amount.innerHTML = number;
  }
}

function validateNum() {
  var amount = document.getElementById("amount");
  var number = parseInt(amount);
  if(isNan(number)){
    alert("Must be a number")
    return false;
  }
}


function validateForm() {
  // varibales

  var amount = document.getElementById("amount");
  var number = parseFloat(amount.innerHTML);
  amount.innerHTML = number;
  var password = document.forms["myForm"]["pword"].value;
  var username = document.forms["myForm"]["username"].value;
  var sizes = document.forms["myForm"]["sizes"].value;
  // var amount = document.forms.namedItem("amount");

  // referenced:  https://www.w3docs.com/snippets/javascript/how-to-get-the-current-date-and-time-in-javascript.html
  // referenced: https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object/1197939#1197939
  var orderTime = new Date();
  orderTime.setMinutes(orderTime.getMinutes() + 30);
  orderTime = new Date(orderTime);
  if (username === null || username === "") {
    document.querySelector(".inputs").style.border = "2px solid #dc143c";
    alert("Username must be valid.")
    return false;
  } else if (username.length > 20) {
    document.querySelector(".inputs").style.border = "2px solid #dc143c";
    alert("Username must be under 20 characters")
    return false;
  } else if (password.length < 11) {
    alert("Password must be 11 characters long");
    document.getElementById("passWord").style.border = "2px solid #dc143c";
    return false;
  } else if (sizes === "0") {
    document.getElementById("my-selection").style.border = "2px solid #dc143c";
    alert("You must choose a size");
    return false;
  } else if (sizes === "17") {
    alert("Warning! The supersize should only be shared, you run the risk of cardiovascular disease if eating alone. Thank you for your order! Arriving @ approx: " + orderTime);
    return;
  } else if (number === 0) {
    alert("You need to add to your order");
    return false;
  } else {
    alert("Thank you for your order! Arriving @ approx: " + orderTime);
    return true;
  }
}

  // Used this code for email validation: https://www.codexworld.com/how-to/email-validation-in-javascript-using-regular-expression/

  function validateEmail(email){
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if(reg.test(email)){
    return true;
    }
    alert('Please enter valid email.');
    return false;
}
