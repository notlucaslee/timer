const times = process.argv
.slice(2)
.filter(item => item > 0);

const sort = arr => {
  let orderedArr = [];
  while (arr.length > 0) {
    let indexOfLowest = arr.indexOf(min(arr));
    orderedArr.push(arr[indexOfLowest]);
    arr.splice(indexOfLowest, 1);
  }
  return orderedArr;
};

const min = arr => {
  let lowestValue = arr[0];
  for (let item of arr) {
    if (item < lowestValue) {
      lowestValue = item;
    }
  }
  return lowestValue;
};

const timer = arr => {
  for (let time of arr) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000)
  }
}

//timer(sort(times));
timer(sort(times));
