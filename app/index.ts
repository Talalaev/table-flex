import './styles/styles.scss'
import {reversCompare, sortName} from "./helpers";

const arr1 = [1, 4, 3, 8, 28, 2, 43];
const arr2 = ['t', 'w', 'y', 's'];
const arr3 = ['2', '21', '1', '15'];
const arr4: Array<any> = [
  {
    name: 'One',
    data: {
      price: 12,
    },
  },
  {
    name: 'AFDGU',
    data: {
      price: 64,
    },
  },
  {
    name: 'Three',
    data: {
      price: 39,
    },
  },
  {
    name: 'Ten',
    data: {
      price: 29,
    },
  },
];
const arr5: Array<any> = [
  {
    name: 'One',
    data: {
      price: 12,
    },
  },
  {
    name: 'AFDGU',
    data: {
      price: 64,
    },
  },
  {
    name: 'Three',
    data: {
      price: 39,
    },
  },
  'esdw',
  // 34,
  // null,
  // undefined,
  // NaN,
  // 'rrrr',
  // ['hoba'],
  {
    name: 'Ten',
    data: {
      price: 29,
    },
  },
];

arr4.sort((a, b) => reversCompare(sortName('name')(a, b)));
arr5.sort(sortName(v => typeof v === 'string' ? v : v.name));

console.log(arr5);
