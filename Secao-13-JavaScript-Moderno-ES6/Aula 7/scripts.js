// 7 - Spread Operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4]

console.log(a4)


const carName = {name: 'Fusca'}
const carBrand = {brand: 'Volkswagen'}
const otherInfo = {km: 1000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfo, wheels: 4}

console.log(car)