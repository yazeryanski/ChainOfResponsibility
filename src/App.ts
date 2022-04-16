import ATM from './ATM';

const USD = new ATM(100, 50, 20, 5, 1);

console.log(USD.getMoney(459));