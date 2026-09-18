// Advanced array methods exercise definitions
const exercises = [
  // FOREACH EXERCISES
  {
    id: 1,
    title: "Exercise 1: forEach() - Basic Iteration",
    category: "forEach",
    description:
      "The forEach() method executes a provided function once for each array element. It doesn't return anything (returns undefined). Great for side effects like logging or modifying external variables.",
    example: `const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => {
  console.log(fruit);
});
// Output: apple, banana, cherry

// With index parameter
fruits.forEach((fruit, index) => {
  console.log(index + ': ' + fruit);
});`,
    instruction:
      "Use forEach() to add each number from 'numbers' to the variable 'total' (which starts at 0).",
    starterCode: `// Your code here
const numbers = [2, 4, 6, 8];
let total = 0;`,
    solution: `const numbers = [2, 4, 6, 8];
let total = 0;
numbers.forEach(num => {
  total += num;
});`,
    watchVariables: ["total"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_foreach.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    },
    validate: function (code, output, ctx) {
      if (!code.includes(".forEach(")) {
        return {
          success: false,
          message: "Make sure you're using the forEach() method.",
        };
      }
      const vars = (ctx && ctx.vars) || {};
      const total = vars.total;
      if (typeof total !== "number") {
        return { success: false, message: "Could not find the total variable." };
      }
      if (total === 20) {
        return {
          success: true,
          message: "Perfect! You've used forEach() for a side effect!",
        };
      }
      return {
        success: false,
        message: "The total should be 20 (2 + 4 + 6 + 8). Add each num to total inside the forEach callback.",
      };
    },
    hint: "forEach() calls a function for each element. Inside that function, add num to total using +=.",
    solutionHint: "Use: numbers.forEach(num => { total += num; });",
  },
  {
    id: 2,
    title: "Exercise 2: forEach() with Index",
    category: "forEach",
    description:
      "forEach() provides both the element and its index as parameters to the callback function.",
    example: `const letters = ['a', 'b', 'c'];
const indexed = [];
letters.forEach((letter, index) => {
  indexed.push(index + ': ' + letter);
});
console.log(indexed); // ['0: a', '1: b', '2: c']`,
    instruction:
      "Use forEach() with index to create 'indexed' array containing strings like '0: first', '1: second', etc.",
    starterCode: `// Your code here
const items = ['first', 'second', 'third'];
const indexed = [];`,
    solution: `const items = ['first', 'second', 'third'];
const indexed = [];
items.forEach((item, index) => {
  indexed.push(index + ': ' + item);
});`,
    watchVariables: ["indexed"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_foreach.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    },
    validate: function (code, output, ctx) {
      if (!code.includes(".forEach(")) {
        return {
          success: false,
          message: "Make sure you're using the forEach() method.",
        };
      }
      const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      const vars = (ctx && ctx.vars) || {};
      const indexed = vars.indexed;
      if (!Array.isArray(indexed)) {
        return { success: false, message: "Could not find the indexed array." };
      }
      if (same(indexed, ["0: first", "1: second", "2: third"])) {
        return {
          success: true,
          message: "Excellent! You've used forEach() with index parameter!",
        };
      }
      return {
        success: false,
        message:
          "The indexed array should be exactly ['0: first', '1: second', '2: third'] (index, colon, space, value).",
      };
    },
    hint: "The forEach callback can take two parameters: (element, index). Combine them into a string.",
    solutionHint:
      "Use: items.forEach((item, index) => { indexed.push(index + ': ' + item); });",
  },

  // MAP EXERCISES
  {
    id: 3,
    title: "Exercise 3: map() - Transform Array",
    category: "map",
    description:
      "The map() method creates a NEW array by calling a function on every element. It returns a new array, leaving the original unchanged. This is the functional programming way!",
    example: `const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]
console.log(numbers); // [1, 2, 3, 4] - unchanged!`,
    instruction:
      "Use map() to create a 'tripled' array where each number is multiplied by 3. Replace the commented line with your own.",
    starterCode: `// Your code here
const numbers = [2, 4, 6];
// const tripled = ... ;  <- fill this in`,
    solution: `const numbers = [2, 4, 6];
const tripled = numbers.map(num => num * 3);`,
    watchVariables: ["tripled"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_map.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    },
    validate: function (code, output) {
      if (!code.includes("map")) {
        return {
          success: false,
          message: "Make sure you're using the map() method.",
        };
      }
      const tripledMatch = output.match(/tripled:\s*\[([\s\S]*?)\]/);
      if (!tripledMatch) {
        return { success: false, message: "Could not find the tripled array." };
      }
      const tripledValue = tripledMatch[0];
      const hasCorrect =
        tripledValue.includes("6") &&
        tripledValue.includes("12") &&
        tripledValue.includes("18");
      if (hasCorrect) {
        return {
          success: true,
          message: "Perfect! You've used map() to transform an array!",
        };
      }
      return {
        success: false,
        message: "The tripled array should be [6, 12, 18].",
      };
    },
    hint: "map() returns a new array. Use it directly: const tripled = numbers.map(...)",
    solutionHint: "Use: const tripled = numbers.map(num => num * 3);",
  },
  {
    id: 4,
    title: "Exercise 4: map() - String Transformation",
    category: "map",
    description:
      "map() is perfect for transforming arrays of strings - converting case, extracting properties, or formatting.",
    example: `const words = ['hello', 'world'];
const upper = words.map(word => word.toUpperCase());
console.log(upper); // ['HELLO', 'WORLD']

const lengths = words.map(word => word.length);
console.log(lengths); // [5, 5]`,
    instruction:
      "Use map() to create 'lengths' array containing the length of each word. Replace the commented line with your own.",
    starterCode: `// Your code here
const words = ['cat', 'elephant', 'dog'];
// const lengths = ... ;  <- fill this in`,
    solution: `const words = ['cat', 'elephant', 'dog'];
const lengths = words.map(word => word.length);`,
    watchVariables: ["lengths"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_map.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    },
    validate: function (code, output, ctx) {
      if (!code.includes(".map(")) {
        return {
          success: false,
          message: "Make sure you're using the map() method.",
        };
      }
      const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      const vars = (ctx && ctx.vars) || {};
      const lengths = vars.lengths;
      if (!Array.isArray(lengths)) {
        return { success: false, message: "Could not find the lengths array." };
      }
      const hasCorrect = same(lengths, [3, 8, 3]);
      if (hasCorrect) {
        return {
          success: true,
          message: "Excellent! You've used map() to get string lengths!",
        };
      }
      return {
        success: false,
        message:
          "The lengths array should be [3, 8, 3] (lengths of cat, elephant, dog).",
      };
    },
    hint: "map() can call a method on each element. What property of a string gives its length?",
    solutionHint: "Use: const lengths = words.map(word => word.length);",
  },
  {
    id: 5,
    title: "Exercise 5: map() - Object Transformation",
    category: "map",
    description:
      "map() is powerful for transforming arrays of objects, extracting properties or creating new object structures.",
    example: `const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']`,
    instruction:
      "Use map() to extract just the 'name' property from each person and create a 'names' array. Replace the commented line with your own.",
    starterCode: `// Your code here
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Joe', age: 35 }
];
// const names = ... ;  <- fill this in`,
    solution: `const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Joe', age: 35 }
];
const names = people.map(person => person.name);`,
    watchVariables: ["names"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_map.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    },
    validate: function (code, output) {
      if (!code.includes("map")) {
        return {
          success: false,
          message: "Make sure you're using the map() method.",
        };
      }
      const namesMatch = output.match(/names:\s*\[([\s\S]*?)\]/);
      if (!namesMatch) {
        return { success: false, message: "Could not find the names array." };
      }
      const namesValue = namesMatch[0];
      const hasCorrect =
        namesValue.includes("John") &&
        namesValue.includes("Jane") &&
        namesValue.includes("Joe");
      const noAge =
        !namesValue.includes("25") &&
        !namesValue.includes("30") &&
        !namesValue.includes("35");
      if (hasCorrect && noAge) {
        return {
          success: true,
          message: "Amazing! You've extracted properties using map()!",
        };
      }
      return {
        success: false,
        message: "The names array should contain ['John', 'Jane', 'Joe'].",
      };
    },
    hint: "Use map() to access the .name property of each person object.",
    solutionHint: "Use: const names = people.map(person => person.name);",
  },

  // FILTER EXERCISES
  {
    id: 6,
    title: "Exercise 6: filter() - Keep Only Some Elements",
    category: "filter",
    description:
      "The filter() method creates a NEW array with elements that pass a test (return true). It's like a selective copy.",
    example: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

const bigNumbers = numbers.filter(num => num > 3);
console.log(bigNumbers); // [4, 5, 6]`,
    instruction:
      "Use filter() to create an array called 'adults' containing only people 18 or older. Replace the commented line with your own.",
    starterCode: `// Your code here
const ages = [15, 22, 17, 30, 12, 25];
// const adults = ... ;  <- fill this in`,
    solution: `const ages = [15, 22, 17, 30, 12, 25];
const adults = ages.filter(age => age >= 18);`,
    watchVariables: ["adults"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_filter.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    },
    validate: function (code, output) {
      if (!code.includes("filter")) {
        return {
          success: false,
          message: "Make sure you're using the filter() method.",
        };
      }
      const adultsMatch = output.match(/adults:\s*\[([\s\S]*?)\]/);
      if (!adultsMatch) {
        return { success: false, message: "Could not find the adults array." };
      }
      const adultsValue = adultsMatch[0];
      const hasCorrect =
        adultsValue.includes("22") &&
        adultsValue.includes("30") &&
        adultsValue.includes("25");
      const noKids =
        !adultsValue.includes("15") &&
        !adultsValue.includes("17") &&
        !adultsValue.includes("12");
      if (hasCorrect && noKids) {
        return {
          success: true,
          message: "Perfect! You've filtered the array correctly!",
        };
      }
      return {
        success: false,
        message:
          "The adults array should only contain ages >= 18: [22, 30, 25].",
      };
    },
    hint: "filter() takes a function that returns true or false. Return true when age >= 18.",
    solutionHint: "Use: const adults = ages.filter(age => age >= 18);",
  },
  {
    id: 7,
    title: "Exercise 7: filter() - String Filtering",
    category: "filter",
    description:
      "filter() is great for finding elements that match certain criteria, like string patterns or lengths.",
    example: `const words = ['cat', 'dog', 'elephant', 'ant'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords); // ['elephant']

const startsWithA = words.filter(word => word.startsWith('a'));
console.log(startsWithA); // ['ant']`,
    instruction:
      "Use filter() to create 'shortWords' containing only words with 5 or fewer letters. Replace the commented line with your own.",
    starterCode: `// Your code here
const words = ['hello', 'hi', 'goodbye', 'bye', 'world'];
// const shortWords = ... ;  <- fill this in`,
    solution: `const words = ['hello', 'hi', 'goodbye', 'bye', 'world'];
const shortWords = words.filter(word => word.length <= 5);`,
    watchVariables: ["shortWords"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_filter.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    },
    validate: function (code, output) {
      if (!code.includes("filter")) {
        return {
          success: false,
          message: "Make sure you're using the filter() method.",
        };
      }
      const shortWordsMatch = output.match(/shortWords:\s*\[([\s\S]*?)\]/);
      if (!shortWordsMatch) {
        return {
          success: false,
          message: "Could not find the shortWords array.",
        };
      }
      const shortWordsValue = shortWordsMatch[0];
      const hasShort =
        shortWordsValue.includes("hello") &&
        shortWordsValue.includes("hi") &&
        shortWordsValue.includes("bye") &&
        shortWordsValue.includes("world");
      const noLong = !shortWordsValue.includes("goodbye");
      if (hasShort && noLong) {
        return {
          success: true,
          message: "Great! You've filtered strings by length!",
        };
      }
      return {
        success: false,
        message:
          "The shortWords array should only contain words with 5 or fewer letters.",
      };
    },
    hint: "Return true when word.length is 5 or less.",
    solutionHint:
      "Use: const shortWords = words.filter(word => word.length <= 5);",
  },

  // MAP + FILTER COMBINATION
  {
    id: 8,
    title: "Exercise 8: Combining map() and filter()",
    category: "map + filter",
    description:
      "You can chain map() and filter() together! Filter first to select elements, then map to transform them.",
    example: `const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(num => num > 3)
  .map(num => num * 10);
console.log(result); // [40, 50, 60]`,
    instruction:
      "First filter for numbers > 5, then map to square them. Store in 'result'. Replace the commented line with your own.",
    starterCode: `// Your code here
const numbers = [2, 6, 3, 9, 4, 10];
// const result = ... ;  <- fill this in`,
    solution: `const numbers = [2, 6, 3, 9, 4, 10];
const result = numbers.filter(num => num > 5).map(num => num * num);`,
    watchVariables: ["result"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_map.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    },
    validate: function (code, output, ctx) {
      if (!code.includes(".filter(") || !code.includes(".map(")) {
        return {
          success: false,
          message: "Make sure you're using both filter() and map() methods.",
        };
      }
      const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      const vars = (ctx && ctx.vars) || {};
      const result = vars.result;
      if (!Array.isArray(result)) {
        return { success: false, message: "Could not find the result array." };
      }
      if (same(result, [36, 81, 100])) {
        return {
          success: true,
          message: "Incredible! You've chained filter() and map()!",
        };
      }
      return {
        success: false,
        message: "The result should be [36, 81, 100] (numbers > 5, squared).",
      };
    },
    hint: "Chain them: numbers.filter(...).map(...). Filter keeps num > 5, map squares them.",
    solutionHint:
      "Use: const result = numbers.filter(num => num > 5).map(num => num * num);",
  },

  // REDUCE EXERCISES
  {
    id: 9,
    title: "Exercise 9: reduce() - Sum All Numbers",
    category: "reduce",
    description:
      "The reduce() method reduces an array to a single value by calling a function on each element. It takes an accumulator and current value.",
    example: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// Breaking it down:
// acc starts at 0
// First: acc=0, num=1 -> return 1
// Second: acc=1, num=2 -> return 3
// Third: acc=3, num=3 -> return 6
// Fourth: acc=6, num=4 -> return 10`,
    instruction:
      "Use reduce() to calculate the sum of all numbers and store in 'total'. Replace the commented line with your own.",
    starterCode: `// Your code here
const prices = [10, 25, 5, 30];
// const total = ... ;  <- fill this in`,
    solution: `const prices = [10, 25, 5, 30];
const total = prices.reduce((acc, price) => acc + price, 0);`,
    watchVariables: ["total"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_reduce.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    },
    validate: function (code, output) {
      if (!code.includes("reduce")) {
        return {
          success: false,
          message: "Make sure you're using the reduce() method.",
        };
      }
      const totalMatch = output.match(/total:\s*(\d+)/);
      if (!totalMatch) {
        return {
          success: false,
          message: "Could not find the total variable.",
        };
      }
      const totalValue = totalMatch[1];
      if (totalValue === "70") {
        return {
          success: true,
          message: "Perfect! You've used reduce() to sum numbers!",
        };
      }
      return {
        success: false,
        message: "The total should be 70 (10 + 25 + 5 + 30).",
      };
    },
    hint: "reduce() takes two parameters: a function with (accumulator, currentValue), and an initial value (0).",
    solutionHint:
      "Use: const total = prices.reduce((acc, price) => acc + price, 0);",
  },
  {
    id: 10,
    title: "Exercise 10: reduce() - Find Maximum",
    category: "reduce",
    description:
      "reduce() can be used to find maximum/minimum values, build objects, or perform any accumulation operation. When finding a maximum, start the accumulator at the first element (numbers[0]) rather than 0, otherwise an array of all-negative numbers would wrongly return 0.",
    example: `const numbers = [5, 12, 8, 3, 20, 7];
const max = numbers.reduce((acc, num) => {
  return num > acc ? num : acc;
}, numbers[0]);
console.log(max); // 20`,
    instruction:
      "Use reduce() to find the highest number and store in 'highest'. Replace the commented line with your own.",
    starterCode: `// Your code here
const scores = [85, 92, 78, 95, 88];
// const highest = ... ;  <- fill this in`,
    solution: `const scores = [85, 92, 78, 95, 88];
const highest = scores.reduce((acc, score) => score > acc ? score : acc, scores[0]);`,
    watchVariables: ["highest"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_reduce.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    },
    validate: function (code, output) {
      if (!code.includes("reduce")) {
        return {
          success: false,
          message: "Make sure you're using the reduce() method.",
        };
      }
      const highestMatch = output.match(/highest:\s*(\d+)/);
      if (!highestMatch) {
        return {
          success: false,
          message: "Could not find the highest variable.",
        };
      }
      const highestValue = highestMatch[1];
      if (highestValue === "95") {
        return {
          success: true,
          message: "Excellent! You've used reduce() to find the maximum!",
        };
      }
      return { success: false, message: "The highest value should be 95." };
    },
    hint: "Compare each score to the accumulator. Return the larger one using a ternary operator (condition ? ifTrue : ifFalse). Start the accumulator at scores[0].",
    solutionHint:
      "Use: const highest = scores.reduce((acc, score) => score > acc ? score : acc, scores[0]);",
  },
  {
    id: 11,
    title: "Exercise 11: reduce() - Build an Object",
    category: "reduce",
    description:
      "reduce() can build objects, like counting occurrences or grouping data.",
    example: `const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 2, banana: 2, cherry: 1 }`,
    instruction:
      "Use reduce() to count how many times each letter appears. Store in 'count' object. Replace the commented line with your own.",
    starterCode: `// Your code here
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
// const count = ... ;  <- fill this in`,
    solution: `const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});`,
    watchVariables: ["count"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_reduce.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    },
    validate: function (code, output) {
      if (!code.includes("reduce")) {
        return {
          success: false,
          message: "Make sure you're using the reduce() method.",
        };
      }
      const countMatch = output.match(/count:\s*\{([\s\S]*?)\}/);
      if (!countMatch) {
        return { success: false, message: "Could not find the count object." };
      }
      const countValue = countMatch[0];
      const hasA = countValue.match(/a.*3/) || countValue.match(/"a":\s*3/);
      const hasB = countValue.match(/b.*2/) || countValue.match(/"b":\s*2/);
      const hasC = countValue.match(/c.*1/) || countValue.match(/"c":\s*1/);
      if (hasA && hasB && hasC) {
        return {
          success: true,
          message: "Amazing! You've used reduce() to build an object!",
        };
      }
      return {
        success: false,
        message: "The count object should be { a: 3, b: 2, c: 1 }.",
      };
    },
    hint: "Start with an empty object {}. For each letter, increment its count: acc[letter] = (acc[letter] || 0) + 1",
    solutionHint:
      "Use: letters.reduce((acc, letter) => { acc[letter] = (acc[letter] || 0) + 1; return acc; }, {});",
  },

  // SPREAD OPERATOR EXERCISES
  {
    id: 12,
    title: "Exercise 12: Spread - Combine Arrays",
    category: "spread",
    description:
      "The spread operator (...) expands an array's elements. It's perfect for combining arrays, copying arrays, or passing array elements as function arguments.",
    example: `const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Add elements too
const withExtra = [...arr1, 99, ...arr2];
console.log(withExtra); // [1, 2, 3, 99, 4, 5, 6]`,
    instruction:
      "Use the spread operator to combine fruits and vegetables into one 'allFood' array. Replace the commented line with your own.",
    starterCode: `// Your code here
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
// const allFood = ... ;  <- fill this in`,
    solution: `const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
const allFood = [...fruits, ...vegetables];`,
    watchVariables: ["allFood"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_es6.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    },
    validate: function (code, output) {
      if (!code.includes("...")) {
        return {
          success: false,
          message: "Make sure you're using the spread operator (...).",
        };
      }
      const allFoodMatch = output.match(/allFood:\s*\[([\s\S]*?)\]/);
      if (!allFoodMatch) {
        return { success: false, message: "Could not find the allFood array." };
      }
      const allFoodValue = allFoodMatch[0];
      const hasAll =
        allFoodValue.includes("apple") &&
        allFoodValue.includes("banana") &&
        allFoodValue.includes("carrot") &&
        allFoodValue.includes("broccoli");
      const correctOrder =
        allFoodValue.indexOf("banana") < allFoodValue.indexOf("carrot");
      if (hasAll && correctOrder) {
        return {
          success: true,
          message: "Perfect! You've combined arrays with the spread operator!",
        };
      }
      return {
        success: false,
        message: "The allFood array should contain all 4 items in order.",
      };
    },
    hint: "Use square brackets with ...arrayName to spread each array: [...fruits, ...vegetables]",
    solutionHint: "Use: const allFood = [...fruits, ...vegetables];",
  },
  {
    id: 13,
    title: "Exercise 13: Spread - Copy and Modify",
    category: "spread",
    description:
      "The spread operator creates a shallow copy of an array. This is safer than modifying the original array.",
    example: `const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] - unchanged!
console.log(copy);     // [1, 2, 3, 4]

// Add to the copy while creating it
const extended = [...original, 4, 5];
console.log(extended); // [1, 2, 3, 4, 5]`,
    instruction:
      "Use spread to create a copy of 'original' called 'extended' that also includes the number 100 at the end. Replace the commented line with your own.",
    starterCode: `// Your code here
const original = [10, 20, 30];
// const extended = ... ;  <- fill this in`,
    solution: `const original = [10, 20, 30];
const extended = [...original, 100];`,
    watchVariables: ["original", "extended"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_es6.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    },
    validate: function (code, output) {
      if (!code.includes("...")) {
        return {
          success: false,
          message: "Make sure you're using the spread operator (...).",
        };
      }
      const originalMatch = output.match(/original:\s*\[([\s\S]*?)\]/);
      const extendedMatch = output.match(/extended:\s*\[([\s\S]*?)\]/);
      if (!originalMatch || !extendedMatch) {
        return { success: false, message: "Could not find both arrays." };
      }
      const originalValue = originalMatch[0];
      const extendedValue = extendedMatch[0];
      const originalUnchanged = !originalValue.includes("100");
      const extendedCorrect =
        extendedValue.includes("10") &&
        extendedValue.includes("20") &&
        extendedValue.includes("30") &&
        extendedValue.includes("100");
      if (originalUnchanged && extendedCorrect) {
        return {
          success: true,
          message:
            "Excellent! You've created a copy with spread and added to it!",
        };
      }
      return {
        success: false,
        message:
          "Extended should be [10, 20, 30, 100] and original should be unchanged.",
      };
    },
    hint: "Spread the original array first, then add 100: [...original, 100]",
    solutionHint: "Use: const extended = [...original, 100];",
  },
  {
    id: 14,
    title: "Exercise 14: Spread - Function Arguments",
    category: "spread",
    description:
      "The spread operator can pass array elements as individual function arguments.",
    example: `const numbers = [5, 2, 8, 1];
const max = Math.max(...numbers);
console.log(max); // 8

const min = Math.min(...numbers);
console.log(min); // 1`,
    instruction:
      "Use spread with Math.max() to find the maximum number and store in 'maximum'. Replace the commented line with your own.",
    starterCode: `// Your code here
const numbers = [45, 23, 67, 12, 89, 34];
// const maximum = ... ;  <- fill this in`,
    solution: `const numbers = [45, 23, 67, 12, 89, 34];
const maximum = Math.max(...numbers);`,
    watchVariables: ["maximum"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_es6.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    },
    validate: function (code, output) {
      if (!code.includes("...")) {
        return {
          success: false,
          message: "Make sure you're using the spread operator (...).",
        };
      }
      if (!code.includes("Math.max")) {
        return {
          success: false,
          message: "Make sure you're using Math.max().",
        };
      }
      const maximumMatch = output.match(/maximum:\s*(\d+)/);
      if (!maximumMatch) {
        return {
          success: false,
          message: "Could not find the maximum variable.",
        };
      }
      const maximumValue = maximumMatch[1];
      if (maximumValue === "89") {
        return {
          success: true,
          message: "Perfect! You've used spread with Math.max()!",
        };
      }
      return { success: false, message: "The maximum should be 89." };
    },
    hint: "Spread the array inside Math.max(): Math.max(...arrayName)",
    solutionHint: "Use: const maximum = Math.max(...numbers);",
  },

  // CHALLENGE EXERCISES
  {
    id: 15,
    title: "Challenge 1: map() vs forEach()",
    category: "challenge",
    description:
      "Understanding the difference: map() returns a new array, forEach() doesn't return anything. Use map() for transformations, forEach() for side effects.",
    example: `const numbers = [1, 2, 3];

// map() - returns new array
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

// forEach() - returns undefined, used for side effects
numbers.forEach(n => console.log(n * 2)); // prints 2, 4, 6
const result = numbers.forEach(n => n * 2);
console.log(result); // undefined`,
    instruction:
      "Create 'squared' using map() and log each element using forEach() (two separate operations). Replace the commented line with your own.",
    starterCode: `// Your code here
const numbers = [2, 3, 4];
// const squared = ... ;  <- fill this in`,
    solution: `const numbers = [2, 3, 4];
const squared = numbers.map(n => n * n);
squared.forEach(n => console.log(n));`,
    watchVariables: ["squared"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_map.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    },
    validate: function (code, output, ctx) {
      if (!code.includes(".map(")) {
        return {
          success: false,
          message: "Make sure you're using map() to create squared array.",
        };
      }
      if (!code.includes(".forEach(")) {
        return {
          success: false,
          message: "Make sure you're also using forEach() to log values.",
        };
      }
      const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      const vars = (ctx && ctx.vars) || {};
      const squared = vars.squared;
      if (!Array.isArray(squared)) {
        return { success: false, message: "Could not find the squared array." };
      }
      const hasCorrect = same(squared, [4, 9, 16]);
      // Check that forEach actually logged: look only at console.log output, not the variable dump
      const logs = (ctx && typeof ctx.logs === "string") ? ctx.logs : "";
      const hasLogged =
        /\b4\b/.test(logs) && /\b9\b/.test(logs) && /\b16\b/.test(logs);
      if (hasCorrect && hasLogged) {
        return {
          success: true,
          message: "Excellent! You understand map() vs forEach()!",
        };
      }
      if (hasCorrect && !hasLogged) {
        return {
          success: false,
          message:
            "squared is correct, but nothing was logged. Use forEach() with console.log to print each value.",
        };
      }
      return {
        success: false,
        message:
          "Use map() to create [4, 9, 16] and forEach() to log each value.",
      };
    },
    hint: "First use map() to square the numbers, then call forEach() on the squared array to log each element.",
    solutionHint:
      "const squared = numbers.map(n => n * n); squared.forEach(n => console.log(n));",
  },
  {
    id: 16,
    title: "Challenge 2: Filter + Map + Reduce Chain",
    category: "challenge",
    description:
      "Combine multiple methods! This is the power of functional programming - each method does one thing well.",
    example: `const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(n => n % 2 === 0)  // Get evens: [2, 4, 6]
  .map(n => n * 10)          // Multiply: [20, 40, 60]
  .reduce((acc, n) => acc + n, 0); // Sum: 120
console.log(result); // 120`,
    instruction:
      "Filter ages >= 21, map to add 5 years to each, then use reduce to sum the results and divide that sum by the count to get the average. Store the average in 'avgAge'. Replace the commented line with your own.",
    starterCode: `// Your code here
const ages = [18, 25, 30, 16, 35, 20];
// const avgAge = ... ;  <- fill this in`,
    solution: `const ages = [18, 25, 30, 16, 35, 20];
const filtered = ages.filter(age => age >= 21);
const older = filtered.map(age => age + 5);
const sum = older.reduce((acc, age) => acc + age, 0);
const avgAge = sum / older.length;`,
    watchVariables: ["avgAge"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_filter.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections",
    },
    validate: function (code, output) {
      if (!code.includes("filter")) {
        return {
          success: false,
          message: "Make sure you're using filter() to get ages >= 21.",
        };
      }
      if (!code.includes("map")) {
        return {
          success: false,
          message: "Make sure you're using map() to add 5 years.",
        };
      }
      if (!code.includes("reduce")) {
        return {
          success: false,
          message: "Make sure you're using reduce() to sum the values.",
        };
      }
      const avgAgeMatch = output.match(/avgAge:\s*([\d.]+)/);
      if (!avgAgeMatch) {
        return {
          success: false,
          message: "Could not find the avgAge variable.",
        };
      }
      const avgAgeValue = parseFloat(avgAgeMatch[1]);
      if (avgAgeValue === 35) {
        return {
          success: true,
          message: "🎉 INCREDIBLE! You've chained filter, map, and reduce!",
        };
      }
      return {
        success: false,
        message:
          "The average should be 35 (ages >= 21 are [25,30,35], +5 = [30,35,40], sum = 105, avg = 35).",
      };
    },
    hint: "Break it into steps: (1) filter for >= 21, (2) map to add 5, (3) reduce to sum, (4) divide by count to get average.",
    solutionHint:
      "Filter: ages.filter(age => age >= 21) | Map: .map(age => age + 5) | Reduce: .reduce((acc, age) => acc + age, 0) | Then divide by length for average",
  },
  {
    id: 17,
    title: "Final Challenge: E-commerce Cart Processor",
    category: "challenge",
    description:
      "Real-world scenario: Process shopping cart data using all the methods you've learned!",
    example: `const products = [
  { name: 'Book', price: 10, inStock: true },
  { name: 'Pen', price: 2, inStock: false },
  { name: 'Laptop', price: 500, inStock: true }
];

const total = products
  .filter(p => p.inStock)
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);
console.log(total); // 510`,
    instruction:
      "Process the cart: (1) Filter for items with quantity > 0, (2) Map to calculate total per item (price * quantity), (3) Reduce to get grand total. Store in 'grandTotal'. Replace the commented line with your own.",
    starterCode: `// Your code here
const cart = [
  { item: 'apple', price: 2, quantity: 3 },
  { item: 'banana', price: 1, quantity: 0 },
  { item: 'orange', price: 3, quantity: 2 }
];
// const grandTotal = ... ;  <- fill this in`,
    solution: `const cart = [
  { item: 'apple', price: 2, quantity: 3 },
  { item: 'banana', price: 1, quantity: 0 },
  { item: 'orange', price: 3, quantity: 2 }
];
const grandTotal = cart
  .filter(item => item.quantity > 0)
  .map(item => item.price * item.quantity)
  .reduce((sum, subtotal) => sum + subtotal, 0);`,
    watchVariables: ["grandTotal"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_map.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections",
    },
    validate: function (code, output) {
      if (!code.includes("filter")) {
        return {
          success: false,
          message:
            "Make sure you're using filter() to remove items with quantity 0.",
        };
      }
      if (!code.includes("map")) {
        return {
          success: false,
          message:
            "Make sure you're using map() to calculate price * quantity.",
        };
      }
      if (!code.includes("reduce")) {
        return {
          success: false,
          message: "Make sure you're using reduce() to sum the totals.",
        };
      }
      const grandTotalMatch = output.match(/grandTotal:\s*(\d+)/);
      if (!grandTotalMatch) {
        return {
          success: false,
          message: "Could not find the grandTotal variable.",
        };
      }
      const grandTotalValue = grandTotalMatch[1];
      if (grandTotalValue === "12") {
        return {
          success: true,
          message: "🎉 AMAZING! You've mastered functional array programming!",
        };
      }
      return {
        success: false,
        message:
          "The grand total should be 12 (apples: 2×3=6, oranges: 3×2=6).",
      };
    },
    hint: "Chain them: cart.filter(...).map(...).reduce(...). Filter quantity > 0, map to price * quantity, reduce to sum.",
    solutionHint:
      "cart.filter(item => item.quantity > 0).map(item => item.price * item.quantity).reduce((sum, subtotal) => sum + subtotal, 0)",
  },
];
