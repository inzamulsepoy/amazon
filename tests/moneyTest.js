import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suit: test formatCurency');

//basic test cases

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95'){
  console.log('passed');
} else{
  console.log("failed");
}

//edge test cases

console.log('worsk with zero');

if (formatCurrency(0) === '0.00'){
  console.log('passed');
} else{
  console.log("failed");
}

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01'){
  console.log('passed');
} else{
  console.log("failed");
}

