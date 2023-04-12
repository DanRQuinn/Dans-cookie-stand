'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

const tableElement = document.getElementById('Table');

function Store(name, min, max, avg) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.cookiesPerHourArray = [],
  this.dailyTotal = 0,
  this.generateRandomNumberOfC = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
    this.calculateCookiesPerHour = function () {
      for (let i = 0; i < hours.length; i++) {
        let randomNumberOfCustomers = this.generateRandomNumberOfC();
        let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
        this.cookiesPerHourArray.push(cookiesSoldPerHour);
        this.dailyTotal += cookiesSoldPerHour;
      }
    },
    this.tableRender = function () {
      this.calculateCookiesPerHour();
      let firstRow = document.createElement('tr');
      tableElement.appendChild(firstRow);
      let cityName = document.createElement('td');
      cityName.textContent = this.name;
      firstRow.appendChild(cityName);

      for (let i = 0; i < hours.length; i++) {
        let firstElem = document.createElement('td')
        firstElem.textContent = `${this.cookiesPerHourArray[i]}`
        firstRow.appendChild(firstElem);
      }
      let total = document.createElement('td');
      total.textContent = this.dailyTotal
      firstRow.appendChild(total)
    }
}
function renderHours() {
  let tdElem = document.createElement('td');
  tableElement.appendChild(tdElem);
  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = `${hours[i]}`
    tableElement.appendChild(tdElem);
  }
  let total = document.createElement('td');
  total.textContent = "Daily Location Total"
  tableElement.appendChild(total);
}

function storeTotal(){
  let timeTotal = document.createElement('td');
  timeTotal.textContent = "Total";
  tableElement.appendChild(timeTotal);
  let hourly2 = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourly = 0;
    for(let j = 0; j < storeArray.length; j++){
      hourly += storeArray[j].cookiesPerHourArray[i];
      hourly2 += storeArray[j].cookiesPerHourArray[i];
    }
    let timeTotal2 = document.createElement('td');
    timeTotal2.textContent = `${hourly}`;
    tableElement.appendChild(timeTotal2);
  }
  let timeTotal3 = document.createElement('td');
  timeTotal3.textContent = `${hourly2}`;
  tableElement.appendChild(timeTotal3);
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

let storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];

renderHours();
Seattle.tableRender();
Tokyo.tableRender();
Dubai.tableRender();
Paris.tableRender();
Lima.tableRender();
storeTotal();
// console.log(Seattle);
// let tokyo = new Store(
//   storeName: 'Tokyo'
//   min:
//   max:
//   id: `${this.storeName}Profile`
//     render: function () {
//   let storeArticle = document.createElement('article')
//   storeArticle.setAttribute('id', this.id);
// );

// Store.prototype.renderTable = function () {
//   let tr = document.createAttribute.createElement('tr');
//   stodreTableBody.appendChild(tr);
//   let th = documen
//   for (let i = 0; i < this. .lenght; i++) {
//     let td = document.createElement('td');
//     td.textContent = this. .{ i };
//     tr.appendChild(td)
//   }
// }




// for (let i = 0; i < storeArray.length; i++) {
//   storeArray[i].introduce();
// }

// for (let i = 0; i < storeArray.length; i++) {
//   totalsArray[i].greenfunction();
// }

// working stuff...



// seattleStore.calculateCookiesPerHour();

// seattleStore.renderList();

// // TOKYO

// let tokyoContainer = document.getElementById("tokyoList");

// let tokyoStore = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       tokyoContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     tokyoContainer.appendChild(li);
//   }
// }


// tokyoStore.calculateCookiesPerHour();

// tokyoStore.renderList();

// // DUBAI 

// let dubaiContainer = document.getElementById("dubaiList");

// let dubaiStore = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       dubaiContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     dubaiContainer.appendChild(li);
//   }
// }


// dubaiStore.calculateCookiesPerHour();

// dubaiStore.renderList();

// // PARIS 

// let parisContainer = document.getElementById("parisList");

// let parisStore = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       parisContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     parisContainer.appendChild(li);
//   }
// }


// parisStore.calculateCookiesPerHour();

// parisStore.renderList();

// // LIMA


// let limaContainer = document.getElementById("limaList");

// let limaStore = {
//   name: 'Lima',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       limaContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     limaContainer.appendChild(li);
//   }
// }


// limaStore.calculateCookiesPerHour();

// limaStore.renderList();

// NOTES ???

//   let storeArticle = document.createElement('article');

// storeInfo.appendChild(storeContainer);

// let storeTwo = document.createElement('h3');

// storeTwo.textContent = 'Store 2'

// storeContainer.appendChild(storeTwo);

// let p = document.createElement('p');
// p.textContent = `${hours[i]}: ${cookiesSoldPerHourArray[i]} cookies`;
// storeContainer.appendChild(p);

// let img = document.createElement('img');
// img.src = 'img/';
// img.alt = 'alt text';
// storeContainer.appendChild(img);

// let li = document.createElement('li');
// li.textContent = '6am: ${seattle.sumValueInAnArray[i]} cookies';
