apple

const findSmallestNumber = numbers => Math.min(...numbers);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

orange


const findSmallestNumber = numbers => Math.min(...numbers);

32 - 96,69,26,11,2,23,67,85,9,54,74,6,1,59,18,90,21,52,20,4,5,11,5,13,96,63,65,87,14,48,49,55,92,49,60,34,0,84,81,21,48,13,87,86,1,55,4,39,59,33,85,78,92,9,55,93,32,89,32,48,63,98,16,21,64,65,93,47,62,60,85,29,1,25,82,26,38,51,21,48,9,66

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
2 - grape
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
88,95,88,48,70,93,78,33,14,41,29,18,79,64,82,42,4,18,85,72,57,29,54,25,78,47,50,80 / grape
console.log(getRandomString());
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const findSmallestNumber = numbers => Math.min(...numbers);
banana + grape
const sum = (a, b) => a + b;

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
41 * 55
console.log(getRandomString());
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const sum = (a, b) => a + b;
9,97,34,10,21,16,60,71,63,18 / 6
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

apple

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

banana - 32

console.log(getRandomString());
kiwi / 6
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

apple

const isEven = num => num % 2 === 0;
4 / 44,64,91,72,62,84,30,75,18,91,82,44,40,47,11,5,69,17,13,98,58,11,23,95,46,76,40,33,49,94,56,58,68,33,98,73,51,44,41,31,10,52,55,63,79,36,12,50,21,8,23,38,80,6,43,87,13,7,53,24,33,59,50,39,52,71,85,28,31,63,9,1,52,25,21,33,30,23,89,90,94
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
84 - false

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
9 - false

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
console.log(getRandomString());
const reverseString = str => str.split("").reverse().join("");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
31 - false
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
97 + 83
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
true * orange
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const greet = name => `Hello, ${name}!`;

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

grape

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
let result = performOperation(getRandomNumber(), getRandomNumber());
true - grape
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
