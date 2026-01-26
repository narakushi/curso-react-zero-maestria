// 7 - spread operator

const a1 = [1, 2, 3];

const a2 = [4, 5, 6]

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4]

console.log(a4);

const carName = { name: 'Gol' };
const cardBrand = { brand: 'VW' }
const otherInfos = { km: 100000, price: 49000 }

const car = { ...carName, ...cardBrand, ...otherInfos, wheels: 4 };

console.log(car)