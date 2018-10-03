// scripts.js

/********************************

 COOKIE clicker

 ********************************/

// Defaults
let cookieCount = 0;

// DOM declaration
const cookieCounter = document.getElementById('cookie-counter');
const cookieClicker = document.getElementById('cookie-clicker');

cookieCounter.innerHTML = cookieCount;

<!-- Make the button respond to JS -->
cookieClicker.addEventListener('click', function () {
  cookieCount += clickPower;
  refreshCookieCount();
});

const refreshCookieCount = () => {
  cookieCounter.innerHTML = cookieCount;
};

/********************************

 Click Power

 ********************************/

// Defaults
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

// DOM declarations
const buyClickPower = document.getElementById('buy-click-power');
const clickPowerPrice = document.getElementById('click-power-price');
const clickPowerLevel = document.getElementById('click-power-level');
const clickPowerMultiple = document.getElementById('click-power-multiple');

buyClickPower.addEventListener('click', function () {
  if (cookieCount >= clickPowerPriceAmount) {
    cookieCount -= clickPowerPriceAmount;
    refreshCookieCount();

    clickPowerLevelNumber += 1;
    clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

    clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);
    refreshPowerClick();

    // Let the user know they bought the power up!
    setTimeout(() => {
      alert('Power up bought!');
      }, 350);
  } else {
    notEnoughCookies();
  }
});

const refreshPowerClick = () => {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
};

/********************************

 Grandmas

 ********************************/
// Defaults
let grandmaPower = 20;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let autoGrandma = false;

// DOM declarations
const buyGrandma = document.getElementById('buy-grandma');
const grandmaPrice = document.getElementById('grandma-price');
const grandmaLevel = document.getElementById('grandma-level');
const grandmaMultiple = document.getElementById('grandma-multiple');

buyGrandma.addEventListener('click', () => {
  // make sure we have enough cookies and subtract our cookies from the price
  if(cookieCount >= grandmaPriceAmount) {
    cookieCount -= grandmaPriceAmount;
    refreshCookieCount()
    // upgrade power level
    grandmaLevelNumber += 1;
    // update price
    grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    // update grandma power
    grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
    // turn autoGrandma on!
    autoGrandma = true
    autoGrandmaStart();

    // refresh shop item
    refreshGrandma();
  } else {
    notEnoughCookies();
  }

});

const refreshGrandma = () => {
  grandmaLevel.innerHTML = grandmaLevelNumber;
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower - 10;// alert the user they bought some grannies
  let numOfMilliSecs = 350;
  // alert the user they bought some grannies
  setTimeout(() => {
    alert('You bought some grandmas on the black market!');
  }, numOfMilliSecs);

};

const autoGrandmaStart = () => {
  const numOfMilliseconds = 1000;
  let grandmaInt = window.setInterval(() => {
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, numOfMilliseconds);
};

/********************************

 Facilities

 ********************************/

// Defaults
let facilityPower = 1000;
let facilityPriceAmount = 10000;
let facilityLevelNumber = 0;
let facilityAuto = false;

// DOM declarations
const buyFacility = document.getElementById('buy-facility');
const facilityPrice = document.getElementById('facility-price');
const facilityLevel = document.getElementById('facility-level');
const facilityMultiple = document.getElementById('facility-multiple');

// Buy a facility
buyFacility.addEventListener('click', function() {
  // set autoLoop to false;
  facilityAuto = false;

  // make sure we have enough cookies
  if(cookieCount >= facilityPriceAmount) {
    cookieCount -= facilityPriceAmount;
    refreshCookieCount();

    // upgrade power level
    facilityLevelNumber += 1;

    // update price
    facilityPower += 500 + Math.floor(facilityLevelNumber * 1.05);

    // update facility power
    facilityPower += 500;

    // turn autoFacility on!
    facilityAuto = true;
    autoFacilityStart();

    // refresh shop item
    refreshFacility();
  } else {
    notEnoughCookies();
  }
});

// game loop
const autoFacilityStart = () => {
  const numOfMilliSecs = 1000;
  let facilityInt = window.setInterval(()=>{
    cookieCount += facilityPower;
    refreshCookieCount();
  }, numOfMilliSecs)
};

// refresh shop
const refreshFacility = () => {
  facilityLevel.innerHTML = facilityLevelNumber;
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 500;
};

// Alert user they don't have enough cookies
const notEnoughCookies = () => {
  alert("You don't have enough cookies");
};