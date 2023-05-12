import '@/scss/base.scss';
import { sum } from './sum.js';

const a = 1;
const b = 2;

document.getElementById('app').innerHTML = `
  <h1>${a} + ${b} = ${sum(a, b)}</h1>
`;
