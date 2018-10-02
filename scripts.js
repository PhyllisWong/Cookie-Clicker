// scripts.js

// declare default variables
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

// declare DOM variables
const cookieCounter = document.getElementById('cookie-counter');
const cookieClicker = document.getElementById('cookie-clicker');
const buyClickPower = document.getElementById('buy-click-power');
const clickPowerPrice = document.getElementById('click-power-price');
const clickPowerLevel = document.getElementById('click-power-level');
const clickPowerMultiple = document.getElementById('click-power-multiple');

cookieCounter.innerHTML = cookieCount;

<!-- Make the button respond to JS -->
cookieClicker.addEventListener('click', function () {
  cookieCount += clickPower;
  refreshCookieCount();
});

buyClickPower.addEventListener('click', function () {
  if (cookieCount >= clickPowerPriceAmount) {
    cookieCount -= clickPowerPriceAmount;
    refreshCookieCount();

    // Upgrade power level
    clickPowerLevelNumber += 1;

    // Update click price
    clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

    // Update click Power
    clickPower += 1;

    // Refresh shop item
    refreshPowerClick();

    // Let the user know they bought the power up!
    setTimeout(() => { alert('Power up bought!'); }, 350);
  } else {
    alert("You don't have enough cookies!")
  }
});

const refreshCookieCount = () => {
  cookieCounter.innerHTML = cookieCount;
};

const refreshPowerClick = () => {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
};

