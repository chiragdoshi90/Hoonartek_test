const findCount = (arr) => {
  const result = {};

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (result[element] != null) {
      result[element] = result[element] + 1;
    } else {
      result[element] = 1;
    }
  }

  return result;
};
const arr = [10, 20, 10, 10, 20, 40, 80, 30];
console.log("findCount", findCount(arr));
