'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

let storeContainer = document.getElementById("seattleList");

let seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,
  generateRandomNumberOfC: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfC();
      let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  },
    renderList: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      storeContainer.appendChild(li) ;
    }
  }
}


seattleStore.renderList();

seattleStore.calculateCookiesPerHour();
console.log(seattleStore.cookiesSoldPerHourArray);
console.log(seattleStore.dailyTotal);


console.log(storeContainer);

let storeArticle = document.createElement('article');

storeInfo.appendChild(storeContainer);

let storeTwo = document.createElement('h3');

storeTwo.textContent = 'Store 2'

storeContainer.appendChild(storeTwo);

let p = document.createElement('p');
p.textContent = `${hours[i]}: ${cookiesSoldPerHourArray[i]} cookies`;
storeContainer.appendChild(p);

let img = document.createElement('img');
img.src = 'img/';
img.alt = 'alt text';
storeContainer.appendChild(img);

let li = document.createElement('li');
li.textContent = '6am: ${seattle.sumValueInAnArray[i]} cookies';
