function sumGreaterThanTarget(array, target) {
    return array
      .filter(element => element > target) // Filter elements greater than the target
      .reduce((sum, element) => sum + element, 0); // Sum up the filtered elements
  }
  
  // Example usage:
  const numbers = [10, 20, 5, 15, 30];
  const target = 15;
  const result = sumGreaterThanTarget(numbers, target);
  console.log(result); // Output: 50 (20 + 30)
  