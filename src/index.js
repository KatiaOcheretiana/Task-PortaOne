import data from "../10m.txt";

// read numbers
const dataArray = data.split("\n").map(Number);

// max number
const findMax = (arr) => {
  let max = -Infinity;
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
};

// min number
const findMin = (arr) => {
  let min = Infinity;
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
};

// median
const getMedian = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);
  return sortedArr.length % 2 !== 0
    ? sortedArr[mid]
    : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
};

// avarage
const getAverage = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;

// longest sequence of increasing numbers
const longestIncreasing = (arr) => {
  if (arr.length === 0) return [];

  let maxLength = 1;
  let currentLength = 1;
  let startIndex = 0;
  let endIndex = 0;
  let maxStartIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLength++;
      endIndex = i;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = startIndex;
      }
      startIndex = i;
      currentLength = 1;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxStartIndex = startIndex;
  }

  return arr.slice(maxStartIndex, maxStartIndex + maxLength);
};

// longest sequence of encreasing numbers
const longestDecreasing = (arr) => {
  if (arr.length === 0) return [];

  let maxLength = 1;
  let currentLength = 1;
  let startIndex = 0;
  let endIndex = 0;
  let maxStartIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      currentLength++;
      endIndex = i;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = startIndex;
      }
      startIndex = i;
      currentLength = 1;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxStartIndex = startIndex;
  }

  return arr.slice(maxStartIndex, maxStartIndex + maxLength);
};

const maxNumber = findMax(dataArray);
const minNumber = findMin(dataArray);
const medianNumber = getMedian(dataArray);
const averageNumber = getAverage(dataArray);
const longestIncreasingNumbers = longestIncreasing(dataArray);
const longestDecreasingNumbers = longestDecreasing(dataArray);

const textContent = `
  <div>
    <p>Максимальне число в файлі - <b>${maxNumber}</b></p>
    <p>Мінімальне число в файлі - <b>${minNumber}</b></p>
    <p>Медіана - <b>${medianNumber}</b></p>
    <p>Середнє арифметичне значення - <b>${averageNumber}</b></p>
    <p>*Найбільшу послідовність чисел (які ідуть один за одним), яка збільшується (опціонально) - <b>${longestIncreasingNumbers}</b></p>
    <p>*Найбільшу послідовність чисел (які ідуть один за одним), яка зменшується (опціонально) - <b>${longestDecreasingNumbers}</b></p>
  </div>
`;

const app = document.querySelector("#root");
app.innerHTML = textContent;
