'use strict';
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (main, second) {
    return [this.starterMenu[main], this.mainMenu[second]];
  },
  openingHours,

  orderRecived: function ({ name1, location, main, second }) {
    console.log(
      `order recived: for ${name1}, at ${location} items are ${this.starterMenu[main]} and ${this.mainMenu[second]}`
    );
  },

  orderPizzza: function (mainIng, ...otherIng) {
    console.log(mainIng, ': This is main ingredants');
    console.log(otherIng, ': This is others ingdredants');
  },
};

// looping over objects
//object properties
const properties = Object.keys(openingHours);
console.log(properties);

//object values
const values = Object.values(openingHours);
console.log(values);

//enteris
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(` ${day} We opens at ${open} and close at ${close}`);
}

//
restaurant.orderRecived({
  name1: 'Ankit',
  location: 'oposite of pvr, 102 ls.',
  second: 2,
  main: 2,
});

//Object destructuring..

const { name, categories, openingHour } = restaurant;
console.log(name, categories, openingHour);

const { name: resturent, categories: food, openingHours: hours } = restaurant;
console.log(resturent, food, hours);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// //array destructuring..

// const [maincourse, secondary] = restaurant.categories;
// console.log(maincourse, secondary);

// const [first, second] = [secondary, maincourse];
// console.log(first, second);
// //ordering from destructuring..
// const [pehle, baadMain] = restaurant.order(2, 0);
// console.log(baadMain, pehle);
// //array destructuring..
// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);
// //nested array
// const nestedArr = [1, 2, [4, 5]];
// const [x, y, [z, s]] = nestedArr;
// console.log(x, y, z, s);
// //defaiult
// const arrDefault = [2, 4];
// const [f = 1, g = 1, h = 1] = arrDefault;
// console.log(f, g, h);

//Spread operator...

const arr = [1, 2, 3];

const newArr = [...arr, 4, 5];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'baigan'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//joins two arrray..
const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu);

//rest pattern..

const [a, b, ...others] = [2, 5, 7, 8, 5, 52];
console.log(a, b, others);

const [pizza, , roisotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, roisotto, otherfood);

const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(7, 8, 9, 4);
add(4, 5, 6, 1, 7, 8);

const x = [1, 2, 3, 4];
add(...x);

restaurant.orderPizzza('masroom', 'paneer', 'onion', 'tammato');

//short circuiting with $$ and || operator....

// And operator return first truthy value..
console.log(0 || 'Ankit');
console.log(null || undefined || 5 || 'Ankit' || '3');

// OR operator returns last value if all conditions are falls
// OR operator stops after gets first falsey  value.

console.log('Ankit' && 5 && true && null && undefined && 10);

restaurant.guestList = 21;
const guest1 = restaurant.guestList || undefined || 10;

console.log(guest1);

// nullish coalecing operator
// nullish coalecing are only null and undefined its does not include o and '';
const guest = restaurant.guestList ?? 10;
console.log(guest);

// for of loop

for (const [indx, items] of menu.entries()) {
  console.log(`${indx + 1} : ${items}`);
}

//Opetional chaining...

//without opetional chaining
if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(openingHours.fri.open);
}

// With opetional chaining
console.log(restaurant.openingHours?.sat?.open);
console.log(restaurant.openingHours.mon?.open); // if mon does not exist its logs undefined

//

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day}: We are open at ${open}`);
}

// optional chaining with methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPasts?.(0, 1) ?? 'Method does not exist');
