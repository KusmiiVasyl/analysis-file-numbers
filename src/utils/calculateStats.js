export const calculateStats = (numbers) => {
  if (numbers.length === 0) return {};

  const batchSize = 10000;
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  const sortedNumbers = [];

  for (let i = 0; i < numbers.length; i += batchSize) {
    const batch = numbers.slice(i, i + batchSize);
    max = Math.max(max, ...batch);
    min = Math.min(min, ...batch);
    sum += batch.reduce((a, b) => a + b, 0);
    sortedNumbers.push(...batch);
  }

  sortedNumbers.sort((a, b) => a - b);
  const middle = Math.floor(sortedNumbers.length / 2);
  const median =
    sortedNumbers.length % 2 === 0
      ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
      : sortedNumbers[middle];

  const mean = sum / numbers.length;
  const longestIncreasing = findLongestSequence(numbers, true);
  const longestDecreasing = findLongestSequence(numbers, false);

  return { max, min, mean, median, longestIncreasing, longestDecreasing };
};

function findLongestSequence(numbers, increasing = true) {
  let maxLength = 0;
  let currentLength = 1;

  for (let i = 1; i < numbers.length; i++) {
    if (
      increasing ? numbers[i] > numbers[i - 1] : numbers[i] < numbers[i - 1]
    ) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
}
