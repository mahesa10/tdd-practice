const analyzeArray = (arr) => {
  let average = arr.reduce((total, val) => total + val) / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;

  return {
    average,
    min,
    max,
    length
  }
}

export default analyzeArray;