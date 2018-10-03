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
let factoryPower = 1000;
let factoryPriceAmount = 10000;
let factoryLevelNumber = 0;
let factoryAuto = false;

// DOM declarations
const buyFactory = document.getElementById('buy-factory');
const factoryPrice = document.getElementById('factory-price');
const factoryLevel = document.getElementById('factory-level');
const factoryMultiple = document.getElementById('factory-multiple');

// Buy a facility
buyFactory.addEventListener('click', function() {
  // set autoLoop to false;
  factoryAuto = false;

  // make sure we have enough cookies
  if(cookieCount >= factoryPriceAmount) {
    cookieCount -= factoryPriceAmount;
    refreshCookieCount();

    // upgrade power level
    factoryLevelNumber += 1;

    // update price
    factoryPower += 500 + Math.floor(factoryLevelNumber * 1.05);

    // update facility power
    factoryPower += 500;

    // turn autoFacility on!
    factoryAuto = true;
    autoFactoryStart();

    // refresh shop item
    refreshFactory();
  } else {
    notEnoughCookies();
  }
});

// game loop
const autoFactoryStart = () => {
  const numOfMilliSecs = 1000;
  let factoryInt = window.setInterval(()=>{
    cookieCount += factoryPower;
    refreshCookieCount();
  }, numOfMilliSecs)
};

// refresh shop
const refreshFactory = () => {
  factoryLevel.innerHTML = factoryLevelNumber;
  factoryPrice.innerHTML = factoryPriceAmount;
  factoryMultiple.innerHTML = factoryPower - 500;
};

// Alert user they don't have enough cookies
const notEnoughCookies = function() {
  alert("You don't have enough cookies");
};