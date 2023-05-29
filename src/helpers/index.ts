export const reduceNumbers = (number: number): string => {
  const numberToReduce = number;
  if (numberToReduce >= 1000 && numberToReduce < 1000000) {
    return `${(number / 1000).toFixed(2)}k`;
  }
  if (numberToReduce >= 1000000 && numberToReduce < 1000000000) {
    return `${(number / 1000000).toFixed(2)}m`;
  }
  if (numberToReduce >= 1000000000 && numberToReduce < 1000000000000) {
    return `${(number / 1000000000).toFixed(2)}b`;
  }
  return number.toFixed(2);
};
