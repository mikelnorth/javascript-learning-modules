// Utility array methods exercise definitions
const exercises = [
  // AT METHOD
  {
    id: 1,
    title: "Exercise 1: at() - Access with Negative Index",
    category: "at",
    description:
      "The at() method lets you access array elements using positive or negative indices. Negative indices count from the end (-1 is the last element).",
    example: `const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits.at(0));   // 'apple' (first)
console.log(fruits.at(-1));  // 'date' (last)
console.log(fruits.at(-2));  // 'cherry' (second to last)`,
    instruction:
      "Use at() to get the last element from 'numbers' and store it in 'lastItem'.",
    starterCode: `// Your code here
const numbers = [10, 20, 30, 40, 50];
const lastItem = ;`,
    solution: `const numbers = [10, 20, 30, 40, 50];
const lastItem = numbers.at(-1);`,
    watchVariables: ["lastItem"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_at.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at",
    },
    validate: function (code, output) {
      if (!code.includes("at")) {
        return {
          success: false,
          message: "Make sure you're using the at() method.",
        };
      }
      const lastItemMatch = output.match(/lastItem:\s*(\d+)/);
      if (!lastItemMatch) {
        return {
          success: false,
          message: "Could not find the lastItem variable.",
        };
      }
      const lastItemValue = lastItemMatch[1];
      if (lastItemValue === "50") {
        return {
          success: true,
          message: "Perfect! You've mastered at() with negative indices!",
        };
      }
      return {
        success: false,
        message: "The lastItem should be 50 (the last element).",
      };
    },
    hint: "Use negative index -1 to access the last element: numbers.at(-1)",
    solutionHint: "Use: const lastItem = numbers.at(-1);",
  },

  // INCLUDES METHOD
  {
    id: 2,
    title: "Exercise 2: includes() - Check for Value",
    category: "includes",
    description:
      "The includes() method checks if an array contains a specific value, returning true or false. It's case-sensitive for strings.",
    example: `const colors = ['red', 'blue', 'green'];
console.log(colors.includes('blue'));   // true
console.log(colors.includes('yellow')); // false
console.log(colors.includes('Blue'));   // false (case-sensitive!)`,
    instruction:
      "Use includes() to check if 'banana' exists in fruits and store the result in 'hasBanana'.",
    starterCode: `// Your code here
const fruits = ['apple', 'banana', 'cherry'];
const hasBanana = ;`,
    solution: `const fruits = ['apple', 'banana', 'cherry'];
const hasBanana = fruits.includes('banana');`,
    watchVariables: ["hasBanana"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_includes_array.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
    },
    validate: function (code, output) {
      if (!code.includes("includes")) {
        return {
          success: false,
          message: "Make sure you're using the includes() method.",
        };
      }
      const hasBananaMatch = output.match(/hasBanana:\s*(true|false)/);
      if (!hasBananaMatch) {
        return {
          success: false,
          message: "Could not find the hasBanana variable.",
        };
      }
      const hasBananaValue = hasBananaMatch[1];
      if (hasBananaValue === "true") {
        return {
          success: true,
          message: "Excellent! You've used includes() to check for a value!",
        };
      }
      return {
        success: false,
        message: "The hasBanana should be true (banana exists in the array).",
      };
    },
    hint: "includes() returns true or false. Check if the array includes 'banana'.",
    solutionHint: "Use: const hasBanana = fruits.includes('banana');",
  },

  // JOIN AND SPLIT
  {
    id: 3,
    title: "Exercise 3: join() - Array to String",
    category: "join/split",
    description:
      "The join() method combines all array elements into a string, separated by a specified separator. It's the opposite of split().",
    example: `const words = ['Hello', 'World', '!'];
const sentence = words.join(' ');
console.log(sentence); // 'Hello World !'

const csv = words.join(',');
console.log(csv); // 'Hello,World,!'`,
    instruction:
      "Use join() to create a sentence from 'words' separated by spaces. Store in 'sentence'.",
    starterCode: `// Your code here
const words = ['JavaScript', 'is', 'awesome'];
const sentence = ;`,
    solution: `const words = ['JavaScript', 'is', 'awesome'];
const sentence = words.join(' ');`,
    watchVariables: ["sentence"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_join.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    },
    validate: function (code, output) {
      if (!code.includes("join")) {
        return {
          success: false,
          message: "Make sure you're using the join() method.",
        };
      }
      const sentenceMatch = output.match(/sentence:\s*"?([^"\n]+)"?/);
      if (!sentenceMatch) {
        return {
          success: false,
          message: "Could not find the sentence variable.",
        };
      }
      const sentenceValue = sentenceMatch[1].trim();
      if (sentenceValue === "JavaScript is awesome") {
        return {
          success: true,
          message: "Perfect! You've joined an array into a string!",
        };
      }
      return {
        success: false,
        message:
          "The sentence should be 'JavaScript is awesome' with spaces between words.",
      };
    },
    hint: "join() takes a separator as an argument. Use a space ' ' to separate words.",
    solutionHint: "Use: const sentence = words.join(' ');",
  },
  {
    id: 4,
    title: "Exercise 4: split() - String to Array",
    category: "join/split",
    description:
      "The split() method (on strings) breaks a string into an array of substrings. It's the opposite of join().",
    example: `const sentence = 'Hello World !';
const words = sentence.split(' ');
console.log(words); // ['Hello', 'World', '!']

const csv = 'a,b,c';
const letters = csv.split(',');
console.log(letters); // ['a', 'b', 'c']`,
    instruction:
      "Use split() to break the email into an array split by '@'. Store in 'parts'.",
    starterCode: `// Your code here
const email = 'user@example.com';
const parts = ;`,
    solution: `const email = 'user@example.com';
const parts = email.split('@');`,
    watchVariables: ["parts"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_split.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
    },
    validate: function (code, output) {
      if (!code.includes("split")) {
        return {
          success: false,
          message: "Make sure you're using the split() method.",
        };
      }
      const partsMatch = output.match(/parts:\s*\[([\s\S]*?)\]/);
      if (!partsMatch) {
        return { success: false, message: "Could not find the parts array." };
      }
      const partsValue = partsMatch[0];
      const hasUser = partsValue.includes("user");
      const hasDomain = partsValue.includes("example.com");
      if (hasUser && hasDomain) {
        return {
          success: true,
          message: "Excellent! You've split a string into an array!",
        };
      }
      return {
        success: false,
        message: "The parts array should be ['user', 'example.com'].",
      };
    },
    hint: "split() is a string method. Call it on the email string with '@' as the separator.",
    solutionHint: "Use: const parts = email.split('@');",
  },

  // FIND METHOD
  {
    id: 5,
    title: "Exercise 5: find() - Find First Match",
    category: "find",
    description:
      "The find() method returns the FIRST element that satisfies a condition. If nothing matches, it returns undefined.",
    example: `const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found); // 12 (first number > 10)

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];
const user = users.find(u => u.age > 28);
console.log(user); // { name: 'Jane', age: 30 }`,
    instruction:
      "Use find() to get the first number greater than 50 and store in 'bigNumber'.",
    starterCode: `// Your code here
const numbers = [10, 45, 60, 30, 75];
const bigNumber = ;`,
    solution: `const numbers = [10, 45, 60, 30, 75];
const bigNumber = numbers.find(num => num > 50);`,
    watchVariables: ["bigNumber"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_find.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    },
    validate: function (code, output) {
      if (!code.includes("find")) {
        return {
          success: false,
          message: "Make sure you're using the find() method.",
        };
      }
      const bigNumberMatch = output.match(/bigNumber:\s*(\d+)/);
      if (!bigNumberMatch) {
        return {
          success: false,
          message: "Could not find the bigNumber variable.",
        };
      }
      const bigNumberValue = bigNumberMatch[1];
      if (bigNumberValue === "60") {
        return {
          success: true,
          message: "Perfect! You've used find() to get the first match!",
        };
      }
      return {
        success: false,
        message: "The bigNumber should be 60 (first number > 50).",
      };
    },
    hint: "find() takes a function that returns true/false. Return true when num > 50.",
    solutionHint: "Use: const bigNumber = numbers.find(num => num > 50);",
  },
  {
    id: 6,
    title: "Exercise 6: find() with Objects",
    category: "find",
    description:
      "find() is very useful for searching arrays of objects by property values.",
    example: `const products = [
  { id: 1, name: 'Book', price: 10 },
  { id: 2, name: 'Pen', price: 5 },
  { id: 3, name: 'Laptop', price: 500 }
];
const product = products.find(p => p.id === 2);
console.log(product); // { id: 2, name: 'Pen', price: 5 }`,
    instruction:
      "Use find() to get the person named 'Alice' and store in 'alice'.",
    starterCode: `// Your code here
const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];
const alice = ;`,
    solution: `const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];
const alice = people.find(person => person.name === 'Alice');`,
    watchVariables: ["alice"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_find.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    },
    validate: function (code, output) {
      if (!code.includes("find")) {
        return {
          success: false,
          message: "Make sure you're using the find() method.",
        };
      }
      const aliceMatch = output.match(/alice:\s*\{([\s\S]*?)\}/);
      if (!aliceMatch) {
        return {
          success: false,
          message: "Could not find the alice variable.",
        };
      }
      const aliceValue = aliceMatch[0];
      const hasAlice = aliceValue.includes("Alice");
      const hasAge25 = aliceValue.includes("25");
      if (hasAlice && hasAge25) {
        return {
          success: true,
          message: "Excellent! You've found an object by property!",
        };
      }
      return {
        success: false,
        message: "The alice variable should be the object with name 'Alice'.",
      };
    },
    hint: "Check if person.name equals 'Alice' in your find() condition.",
    solutionHint:
      "Use: const alice = people.find(person => person.name === 'Alice');",
  },

  // FINDINDEX METHOD
  {
    id: 7,
    title: "Exercise 7: findIndex() - Get Position",
    category: "findIndex",
    description:
      "The findIndex() method returns the INDEX of the first element that satisfies a condition. If nothing matches, it returns -1.",
    example: `const numbers = [5, 12, 8, 130, 44];
const index = numbers.findIndex(num => num > 10);
console.log(index); // 1 (12 is at index 1)

const notFound = numbers.findIndex(num => num > 200);
console.log(notFound); // -1 (nothing matches)`,
    instruction:
      "Use findIndex() to get the index of the first even number and store in 'evenIndex'.",
    starterCode: `// Your code here
const numbers = [1, 3, 5, 8, 9, 12];
const evenIndex = ;`,
    solution: `const numbers = [1, 3, 5, 8, 9, 12];
const evenIndex = numbers.findIndex(num => num % 2 === 0);`,
    watchVariables: ["evenIndex"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_findindex.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
    },
    validate: function (code, output) {
      if (!code.includes("findIndex")) {
        return {
          success: false,
          message: "Make sure you're using the findIndex() method.",
        };
      }
      const evenIndexMatch = output.match(/evenIndex:\s*(-?\d+)/);
      if (!evenIndexMatch) {
        return {
          success: false,
          message: "Could not find the evenIndex variable.",
        };
      }
      const evenIndexValue = evenIndexMatch[1];
      if (evenIndexValue === "3") {
        return {
          success: true,
          message: "Perfect! You've found the index of the first match!",
        };
      }
      return {
        success: false,
        message:
          "The evenIndex should be 3 (8 is the first even number at index 3).",
      };
    },
    hint: "Use findIndex() with a condition to check if num % 2 === 0 (even number).",
    solutionHint:
      "Use: const evenIndex = numbers.findIndex(num => num % 2 === 0);",
  },

  // SORT METHOD
  {
    id: 8,
    title: "Exercise 8: sort() - Sort Numbers",
    category: "sort",
    description:
      "The sort() method sorts an array IN PLACE (mutates the original). For numbers, you MUST provide a compare function, or it sorts as strings!",
    example: `const numbers = [10, 5, 40, 25, 1000, 1];
// WRONG - sorts as strings!
numbers.sort();
console.log(numbers); // [1, 10, 1000, 25, 40, 5] - wrong!

// CORRECT - use compare function
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 10, 25, 40, 1000] - correct!`,
    instruction:
      "Use sort() with a compare function to sort 'scores' from lowest to highest. The original array should be modified.",
    starterCode: `// Your code here
const scores = [85, 42, 95, 78, 63];`,
    solution: `const scores = [85, 42, 95, 78, 63];
scores.sort((a, b) => a - b);`,
    watchVariables: ["scores"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_sort.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    },
    validate: function (code, output) {
      if (!code.includes("sort")) {
        return {
          success: false,
          message: "Make sure you're using the sort() method.",
        };
      }
      const scoresMatch = output.match(/scores:\s*\[([\s\S]*?)\]/);
      if (!scoresMatch) {
        return { success: false, message: "Could not find the scores array." };
      }
      const scoresValue = scoresMatch[0];
      const isSorted =
        scoresValue.indexOf("42") < scoresValue.indexOf("63") &&
        scoresValue.indexOf("63") < scoresValue.indexOf("78") &&
        scoresValue.indexOf("78") < scoresValue.indexOf("85") &&
        scoresValue.indexOf("85") < scoresValue.indexOf("95");
      if (isSorted) {
        return {
          success: true,
          message: "Excellent! You've sorted numbers correctly!",
        };
      }
      return {
        success: false,
        message:
          "The scores should be sorted from lowest to highest: [42, 63, 78, 85, 95].",
      };
    },
    hint: "Don't forget the compare function! Use (a, b) => a - b for ascending order.",
    solutionHint: "Use: scores.sort((a, b) => a - b);",
  },
  {
    id: 9,
    title: "Exercise 9: toSorted() - Non-Mutating Sort",
    category: "sort",
    description:
      "The toSorted() method (new in ES2023) returns a NEW sorted array without modifying the original. Safer than sort()!",
    example: `const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.toSorted((a, b) => a - b);
console.log(sorted);  // [1, 1, 3, 4, 5]
console.log(numbers); // [3, 1, 4, 1, 5] - unchanged!`,
    instruction:
      "Use toSorted() to create a sorted copy called 'sorted' (descending order: high to low). The original should be unchanged.",
    starterCode: `// Your code here
const original = [5, 2, 8, 1, 9];
const sorted = ;`,
    solution: `const original = [5, 2, 8, 1, 9];
const sorted = original.toSorted((a, b) => b - a);`,
    watchVariables: ["original", "sorted"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_tosorted.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted",
    },
    validate: function (code, output) {
      if (!code.includes("toSorted")) {
        return {
          success: false,
          message: "Make sure you're using the toSorted() method (not sort).",
        };
      }
      const originalMatch = output.match(/original:\s*\[([\s\S]*?)\]/);
      const sortedMatch = output.match(/sorted:\s*\[([\s\S]*?)\]/);
      if (!originalMatch || !sortedMatch) {
        return { success: false, message: "Could not find both arrays." };
      }
      const originalValue = originalMatch[0];
      const sortedValue = sortedMatch[0];
      const originalUnchanged =
        originalValue.indexOf("5") < originalValue.indexOf("2");
      const sortedDescending =
        sortedValue.indexOf("9") < sortedValue.indexOf("8") &&
        sortedValue.indexOf("8") < sortedValue.indexOf("5") &&
        sortedValue.indexOf("5") < sortedValue.indexOf("2") &&
        sortedValue.indexOf("2") < sortedValue.indexOf("1");
      if (originalUnchanged && sortedDescending) {
        return {
          success: true,
          message:
            "Perfect! You've created a sorted copy without mutating the original!",
        };
      }
      return {
        success: false,
        message:
          "The sorted array should be [9, 8, 5, 2, 1] (descending) and original should be unchanged.",
      };
    },
    hint: "Use toSorted() with (a, b) => b - a for descending order. This creates a new array.",
    solutionHint: "Use: const sorted = original.toSorted((a, b) => b - a);",
  },

  // REVERSE METHOD
  {
    id: 10,
    title: "Exercise 10: reverse() - Reverse In Place",
    category: "reverse",
    description:
      "The reverse() method reverses an array IN PLACE (mutates the original). The first element becomes last, last becomes first.",
    example: `const letters = ['a', 'b', 'c', 'd'];
letters.reverse();
console.log(letters); // ['d', 'c', 'b', 'a']`,
    instruction:
      "Use reverse() to reverse the 'numbers' array. The original array should be modified.",
    starterCode: `// Your code here
const numbers = [1, 2, 3, 4, 5];`,
    solution: `const numbers = [1, 2, 3, 4, 5];
numbers.reverse();`,
    watchVariables: ["numbers"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_reverse.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
    },
    validate: function (code, output) {
      if (!code.includes("reverse")) {
        return {
          success: false,
          message: "Make sure you're using the reverse() method.",
        };
      }
      const numbersMatch = output.match(/numbers:\s*\[([\s\S]*?)\]/);
      if (!numbersMatch) {
        return { success: false, message: "Could not find the numbers array." };
      }
      const numbersValue = numbersMatch[0];
      const isReversed = numbersValue.indexOf("5") < numbersValue.indexOf("1");
      if (isReversed) {
        return {
          success: true,
          message: "Perfect! You've reversed the array!",
        };
      }
      return {
        success: false,
        message: "The numbers array should be reversed to [5, 4, 3, 2, 1].",
      };
    },
    hint: "Just call reverse() on the array. It modifies the array in place.",
    solutionHint: "Use: numbers.reverse();",
  },
  {
    id: 11,
    title: "Exercise 11: toReversed() - Non-Mutating Reverse",
    category: "reverse",
    description:
      "The toReversed() method (new in ES2023) returns a NEW reversed array without modifying the original. Safer than reverse()!",
    example: `const original = [1, 2, 3, 4, 5];
const reversed = original.toReversed();
console.log(reversed); // [5, 4, 3, 2, 1]
console.log(original); // [1, 2, 3, 4, 5] - unchanged!`,
    instruction:
      "Use toReversed() to create a reversed copy called 'reversed'. The original should be unchanged.",
    starterCode: `// Your code here
const original = ['a', 'b', 'c', 'd'];
const reversed = ;`,
    solution: `const original = ['a', 'b', 'c', 'd'];
const reversed = original.toReversed();`,
    watchVariables: ["original", "reversed"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_toreversed.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed",
    },
    validate: function (code, output) {
      if (!code.includes("toReversed")) {
        return {
          success: false,
          message:
            "Make sure you're using the toReversed() method (not reverse).",
        };
      }
      const originalMatch = output.match(/original:\s*\[([\s\S]*?)\]/);
      const reversedMatch = output.match(/reversed:\s*\[([\s\S]*?)\]/);
      if (!originalMatch || !reversedMatch) {
        return { success: false, message: "Could not find both arrays." };
      }
      const originalValue = originalMatch[0];
      const reversedValue = reversedMatch[0];
      const originalUnchanged =
        originalValue.indexOf("a") < originalValue.indexOf("b");
      const reversedCorrect =
        reversedValue.indexOf("d") < reversedValue.indexOf("a");
      if (originalUnchanged && reversedCorrect) {
        return {
          success: true,
          message:
            "Excellent! You've created a reversed copy without mutating!",
        };
      }
      return {
        success: false,
        message:
          "The reversed should be ['d', 'c', 'b', 'a'] and original should be unchanged.",
      };
    },
    hint: "toReversed() creates a new array. It doesn't take any arguments.",
    solutionHint: "Use: const reversed = original.toReversed();",
  },

  // ARRAY.ISARRAY
  {
    id: 12,
    title: "Exercise 12: Array.isArray() - Type Checking",
    category: "Array.isArray",
    description:
      "Array.isArray() checks if a value is actually an array. This is the safest way to check, better than typeof (which returns 'object' for arrays!).",
    example: `console.log(Array.isArray([1, 2, 3]));     // true
console.log(Array.isArray('hello'));       // false
console.log(Array.isArray({ a: 1 }));     // false
console.log(Array.isArray(123));          // false

// typeof is unreliable for arrays!
console.log(typeof [1, 2, 3]); // 'object' - not helpful!`,
    instruction:
      "Use Array.isArray() to check three values and store results in 'check1', 'check2', 'check3'.",
    starterCode: `// Your code here
const value1 = [1, 2, 3];
const value2 = 'hello';
const value3 = { name: 'test' };
const check1 = ;
const check2 = ;
const check3 = ;`,
    solution: `const value1 = [1, 2, 3];
const value2 = 'hello';
const value3 = { name: 'test' };
const check1 = Array.isArray(value1);
const check2 = Array.isArray(value2);
const check3 = Array.isArray(value3);`,
    watchVariables: ["check1", "check2", "check3"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_isarray.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",
    },
    validate: function (code, output) {
      if (!code.includes("Array.isArray")) {
        return {
          success: false,
          message: "Make sure you're using Array.isArray().",
        };
      }
      const check1Match = output.match(/check1:\s*(true|false)/);
      const check2Match = output.match(/check2:\s*(true|false)/);
      const check3Match = output.match(/check3:\s*(true|false)/);
      if (!check1Match || !check2Match || !check3Match) {
        return {
          success: false,
          message: "Could not find all three check variables.",
        };
      }
      if (
        check1Match[1] === "true" &&
        check2Match[1] === "false" &&
        check3Match[1] === "false"
      ) {
        return {
          success: true,
          message: "Perfect! You've mastered Array.isArray()!",
        };
      }
      return {
        success: false,
        message:
          "check1 should be true (array), check2 and check3 should be false (not arrays).",
      };
    },
    hint: "Call Array.isArray() on each value. It returns true for arrays, false for everything else.",
    solutionHint:
      "Use: Array.isArray(value1), Array.isArray(value2), Array.isArray(value3)",
  },

  // CHALLENGE EXERCISES
  {
    id: 13,
    title: "Challenge 1: join() and split() Together",
    category: "challenge",
    description:
      "Combine join() and split() to manipulate strings through arrays. This is a common pattern for text processing.",
    example: `// Convert CSV to array, transform, back to CSV
const csv = 'apple,banana,cherry';
const fruits = csv.split(',');
const upper = fruits.map(f => f.toUpperCase());
const newCsv = upper.join(',');
console.log(newCsv); // 'APPLE,BANANA,CHERRY'`,
    instruction:
      "Split 'sentence' by spaces, reverse the word order, then join back with spaces. Store in 'reversed'.",
    starterCode: `// Your code here
const sentence = 'Hello World JavaScript';
const reversed = ;`,
    solution: `const sentence = 'Hello World JavaScript';
const reversed = sentence.split(' ').reverse().join(' ');`,
    watchVariables: ["reversed"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_join.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    },
    validate: function (code, output) {
      if (!code.includes("split") || !code.includes("join")) {
        return {
          success: false,
          message: "Make sure you're using both split() and join().",
        };
      }
      const reversedMatch = output.match(/reversed:\s*"?([^"\n]+)"?/);
      if (!reversedMatch) {
        return {
          success: false,
          message: "Could not find the reversed variable.",
        };
      }
      const reversedValue = reversedMatch[1].trim();
      if (reversedValue === "JavaScript World Hello") {
        return {
          success: true,
          message: "Incredible! You've chained split, reverse, and join!",
        };
      }
      return {
        success: false,
        message:
          "The reversed should be 'JavaScript World Hello' (words in reverse order).",
      };
    },
    hint: "Chain them: sentence.split(' ').reverse().join(' ') - split into words, reverse the array, join back.",
    solutionHint:
      "Use: const reversed = sentence.split(' ').reverse().join(' ');",
  },
  {
    id: 14,
    title: "Challenge 2: find() vs filter() - Know the Difference",
    category: "challenge",
    description:
      "find() returns ONE element (the first match). filter() returns an ARRAY of all matches. Choose the right tool!",
    example: `const numbers = [10, 20, 30, 40, 50];

// find() - returns ONE element
const first = numbers.find(n => n > 25);
console.log(first); // 30 (first match)

// filter() - returns ARRAY of matches
const all = numbers.filter(n => n > 25);
console.log(all); // [30, 40, 50] (all matches)`,
    instruction:
      "Use find() to get 'firstEven' (first even number) and filter() to get 'allEvens' (all even numbers).",
    starterCode: `// Your code here
const numbers = [1, 3, 6, 7, 8, 9, 10];
const firstEven = ;
const allEvens = ;`,
    solution: `const numbers = [1, 3, 6, 7, 8, 9, 10];
const firstEven = numbers.find(n => n % 2 === 0);
const allEvens = numbers.filter(n => n % 2 === 0);`,
    watchVariables: ["firstEven", "allEvens"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_find.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    },
    validate: function (code, output) {
      if (!code.includes("find") || !code.includes("filter")) {
        return {
          success: false,
          message: "Make sure you're using both find() and filter().",
        };
      }
      const firstEvenMatch = output.match(/firstEven:\s*(\d+)/);
      const allEvensMatch = output.match(/allEvens:\s*\[([\s\S]*?)\]/);
      if (!firstEvenMatch || !allEvensMatch) {
        return { success: false, message: "Could not find both variables." };
      }
      const firstEvenValue = firstEvenMatch[1];
      const allEvensValue = allEvensMatch[0];
      const hasCorrectFirst = firstEvenValue === "6";
      const hasCorrectAll =
        allEvensValue.includes("6") &&
        allEvensValue.includes("8") &&
        allEvensValue.includes("10");
      if (hasCorrectFirst && hasCorrectAll) {
        return {
          success: true,
          message:
            "Excellent! You understand the difference between find() and filter()!",
        };
      }
      return {
        success: false,
        message: "firstEven should be 6, allEvens should be [6, 8, 10].",
      };
    },
    hint: "find() returns a single number, filter() returns an array. Both check for even numbers (n % 2 === 0).",
    solutionHint:
      "firstEven: numbers.find(n => n % 2 === 0) | allEvens: numbers.filter(n => n % 2 === 0)",
  },
  {
    id: 15,
    title: "Final Challenge: Sorting Leaderboard",
    category: "challenge",
    description:
      "Real-world scenario: Process and sort a leaderboard using multiple methods!",
    example: `const players = [
  { name: 'Alice', score: 95 },
  { name: 'Bob', score: 87 },
  { name: 'Charlie', score: 92 }
];

const sorted = players.toSorted((a, b) => b.score - a.score);
const winner = sorted.at(0);
console.log(winner.name); // 'Alice'`,
    instruction:
      "Sort players by score (high to low) using toSorted(), then use at() to get the top 3. Store in 'top3'.",
    starterCode: `// Your code here
const players = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'Diana', score: 95 },
  { name: 'Eve', score: 88 }
];
const sorted = ;
const top3 = ;`,
    solution: `const players = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'Diana', score: 95 },
  { name: 'Eve', score: 88 }
];
const sorted = players.toSorted((a, b) => b.score - a.score);
const top3 = [sorted.at(0), sorted.at(1), sorted.at(2)];`,
    watchVariables: ["top3"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_tosorted.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted",
    },
    validate: function (code, output) {
      if (!code.includes("toSorted")) {
        return {
          success: false,
          message: "Make sure you're using toSorted() to sort by score.",
        };
      }
      if (!code.includes("at")) {
        return {
          success: false,
          message: "Make sure you're using at() to get the top 3 players.",
        };
      }
      const top3Match = output.match(/top3:\s*\[([\s\S]*?)\]/);
      if (!top3Match) {
        return { success: false, message: "Could not find the top3 array." };
      }
      const top3Value = top3Match[0];
      const hasDiana = top3Value.includes("Diana") && top3Value.includes("95");
      const hasBob = top3Value.includes("Bob") && top3Value.includes("92");
      const hasEve = top3Value.includes("Eve") && top3Value.includes("88");
      const dianaBeforeBob =
        top3Value.indexOf("Diana") < top3Value.indexOf("Bob");
      const bobBeforeEve = top3Value.indexOf("Bob") < top3Value.indexOf("Eve");
      if (hasDiana && hasBob && hasEve && dianaBeforeBob && bobBeforeEve) {
        return {
          success: true,
          message:
            "🎉 AMAZING! You've created a leaderboard with toSorted() and at()!",
        };
      }
      return {
        success: false,
        message:
          "top3 should contain Diana (95), Bob (92), and Eve (88) in that order.",
      };
    },
    hint: "First toSorted() with (a, b) => b.score - a.score for descending. Then create array with sorted.at(0), sorted.at(1), sorted.at(2).",
    solutionHint:
      "const sorted = players.toSorted((a, b) => b.score - a.score); const top3 = [sorted.at(0), sorted.at(1), sorted.at(2)];",
  },
];
