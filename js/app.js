'use strict';

let form = document.querySelector('form');

console.log('form');

let handleSubmit = function (event) {
  event.preventDefault();
  const name = event.target.storeName.value;
  const min = parseInt(event.target.minPerHour.value);
  const max = parseInt(event.target.maxPerHour.value);
  const avg = parseInt(event.target.avgPerHour.value);
  let newStore = new Store(
    name,
    min,
    max,
    avg,
  );
  storeArray.push(newStore);
  // firstRow.removeChild(total)
  newStore.tableRender();
  renderFooter();

}

form.addEventListener('submit', handleSubmit);




let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

const tableElement = document.getElementById('Table');



function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHourArray = [];
  this.dailyTotal = 0;
  this.generateRandomNumberOfC = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.calculateCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfC();
      let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
      this.cookiesPerHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  };
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
  };
}
function renderHours() {
  let tr = document.createElement('tr');
  tableElement.appendChild(tr);
  let thElem = document.createElement('th');
  tr.appendChild(thElem);
  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = `${hours[i]}`
    tr.appendChild(thElem);
  }
  let total = document.createElement('th');
  total.textContent = "Daily Location Total"
  tr.appendChild(total);
}

function renderFooter() {
  let footer = document.querySelector('tfoot');
  if (footer){
    footer.innerHTML = '';
  }
  footer = document.createElement('tfoot')
  tableElement.appendChild(footer);
  let timeTotal =document.createElement('td')
  timeTotal.textContent = "Total";
  footer.appendChild(timeTotal);
  let hourly2 = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourly = 0;
    for (let j = 0; j < storeArray.length; j++) {
      hourly += storeArray[j].cookiesPerHourArray[i];
      hourly2 += storeArray[j].cookiesPerHourArray[i];
    }
    let timeTotal2 = document.createElement('td');
    timeTotal2.textContent = `${hourly}`;
    footer.appendChild(timeTotal2);
  }
  let timeTotal3 = document.createElement('td');
  timeTotal3.textContent = `${hourly2}`;
  footer.appendChild(timeTotal3);
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
renderFooconst();
// newStore.tableRender();










