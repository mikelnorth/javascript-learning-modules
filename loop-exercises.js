// Loop exercise definitions
const exercises = [
  // FOR LOOP EXERCISES
  {
    id: 1,
    title: "Exercise 1: Basic for Loop - Count to 10",
    category: "for loop",
    description:
      "The for loop is the most common loop in JavaScript. It has three parts: initialization, condition, and increment. Syntax: for (initialization; condition; increment) { ... }",
    example: `for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4`,
    instruction:
      "Create a for loop that counts from 1 to 10 and stores each number in an array called 'numbers'.",
    starterCode: `// Your code here
const numbers = [];`,
    solution: `const numbers = [];
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}`,
    watchVariables: ["numbers"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_for.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
    },
    validate: function (code, output) {
      if (!code.includes("for")) {
        return {
          success: false,
          message: "Make sure you're using a for loop.",
        };
      }
      const numbersMatch = output.match(/numbers:\s*\[([\s\S]*?)\]/);
      if (!numbersMatch) {
        return { success: false, message: "Could not find the numbers array." };
      }
      const numbersValue = numbersMatch[0];
      // Check for the number 0 as a separate element (not the digit in 10)
      const hasZero = numbersValue.match(/[\[\s,]0[\s,\]]/);
      const has11 = numbersValue.includes("11");
      const hasCorrectNumbers =
        numbersValue.includes("1") &&
        numbersValue.includes("10") &&
        !has11 &&
        !hasZero &&
        numbersValue.indexOf("1") < numbersValue.indexOf("10");
      if (hasCorrectNumbers) {
        return {
          success: true,
          message:
            "Perfect! You've created a for loop that counts from 1 to 10!",
        };
      }
      if (has11) {
        return {
          success: false,
          message:
            "The array goes too far! It should stop at 10, not include 11.",
        };
      }
      if (hasZero) {
        return {
          success: false,
          message: "Start at 1, not 0! The array should be [1, 2, 3, ..., 10].",
        };
      }
      return {
        success: false,
        message: "The numbers array should contain exactly [1, 2, 3, ..., 10].",
      };
    },
    hint: "You need a for loop that starts at 1 and goes up to (and including) 10. Think about the condition: should it be i < 10 or i <= 10?",
    solutionHint: "Use: for (let i = 1; i <= 10; i++) { numbers.push(i); }",
  },
  {
    id: 2,
    title: "Exercise 2: for Loop - Array Iteration",
    category: "for loop",
    description:
      "You can use a for loop to iterate through an array by using the array's length property and accessing elements by index.",
    example: `const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: apple, banana, cherry`,
    instruction:
      "Given an array of numbers, use a for loop to create a new array called 'doubled' that contains each number multiplied by 2.",
    starterCode: `// Your code here
const numbers = [2, 4, 6, 8, 10];
const doubled = [];`,
    solution: `const numbers = [2, 4, 6, 8, 10];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}`,
    watchVariables: ["doubled"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_for.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
    },
    validate: function (code, output) {
      if (!code.includes("for")) {
        return {
          success: false,
          message: "Make sure you're using a for loop.",
        };
      }
      const doubledMatch = output.match(/doubled:\s*\[([\s\S]*?)\]/);
      if (!doubledMatch) {
        return { success: false, message: "Could not find the doubled array." };
      }
      const doubledValue = doubledMatch[0];
      // Check for all doubled values (these are unique to the doubled array)
      const hasAll =
        doubledValue.includes("4") &&
        doubledValue.includes("8") &&
        doubledValue.includes("12") &&
        doubledValue.includes("16") &&
        doubledValue.includes("20");

      if (hasAll) {
        return {
          success: true,
          message:
            "Excellent! You've successfully doubled all numbers using a for loop!",
        };
      }
      return {
        success: false,
        message:
          "The doubled array should contain exactly [4, 8, 12, 16, 20] (each number doubled).",
      };
    },
    hint: "Loop through the numbers array using an index (i), then push each number multiplied by 2 into the doubled array.",
    solutionHint:
      "Use: for (let i = 0; i < numbers.length; i++) { doubled.push(numbers[i] * 2); }",
  },
  {
    id: 3,
    title: "Exercise 3: for Loop - Reverse Iteration",
    category: "for loop",
    description:
      "You can iterate through an array backwards by starting from the end and decrementing the counter.",
    example: `const letters = ['A', 'B', 'C'];
for (let i = letters.length - 1; i >= 0; i--) {
  console.log(letters[i]);
}
// Output: C, B, A`,
    instruction:
      "Create an array called 'reversed' that contains the numbers [1, 2, 3, 4, 5] in reverse order using a for loop.",
    starterCode: `// Your code here
const original = [1, 2, 3, 4, 5];
const reversed = [];`,
    solution: `const original = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = original.length - 1; i >= 0; i--) {
  reversed.push(original[i]);
}`,
    watchVariables: ["reversed"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_for.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
    },
    validate: function (code, output) {
      if (!code.includes("for")) {
        return {
          success: false,
          message: "Make sure you're using a for loop.",
        };
      }
      const reversedMatch = output.match(/reversed:\s*\[([\s\S]*?)\]/);
      if (!reversedMatch) {
        return {
          success: false,
          message: "Could not find the reversed array.",
        };
      }
      const reversedValue = reversedMatch[0];
      // Check for null or undefined in the array
      const hasNull =
        reversedValue.includes("null") || reversedValue.includes("undefined");
      const isReversed =
        reversedValue.indexOf("5") < reversedValue.indexOf("1") &&
        reversedValue.includes("5") &&
        reversedValue.includes("4") &&
        reversedValue.includes("3") &&
        reversedValue.includes("2") &&
        reversedValue.includes("1") &&
        !hasNull;
      if (isReversed) {
        return {
          success: true,
          message: "Perfect! You've mastered reverse iteration!",
        };
      }
      if (hasNull) {
        return {
          success: false,
          message:
            "Your array contains null/undefined! Start at original.length - 1, not original.length.",
        };
      }
      return {
        success: false,
        message: "The reversed array should be exactly [5, 4, 3, 2, 1].",
      };
    },
    hint: "Start your loop at the last index (original.length - 1), decrement (i--), and stop when you reach 0. Don't forget the -1!",
    solutionHint:
      "Use: for (let i = original.length - 1; i >= 0; i--) { reversed.push(original[i]); }",
  },

  // FOR...IN EXERCISES
  {
    id: 4,
    title: "Exercise 4: for...in Loop - Object Properties",
    category: "for...in",
    description:
      "The for...in loop iterates over the enumerable properties (keys) of an object. Great for objects, but be careful with arrays!",
    example: `const person = { name: 'John', age: 30, city: 'NYC' };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}
// Output: name: John, age: 30, city: NYC`,
    instruction:
      "Use a for...in loop to create an array called 'keys' containing all the property names from the given object.",
    starterCode: `// Your code here
const student = { name: 'Alice', grade: 'A', age: 20 };
const keys = [];`,
    solution: `const student = { name: 'Alice', grade: 'A', age: 20 };
const keys = [];
for (let key in student) {
  keys.push(key);
}`,
    watchVariables: ["keys"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_forin.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in",
    },
    validate: function (code, output) {
      if (!code.includes("for") || !code.includes("in")) {
        return {
          success: false,
          message: "Make sure you're using a for...in loop.",
        };
      }
      if (code.includes("of")) {
        return {
          success: false,
          message: "Use for...in (not for...of) for this exercise.",
        };
      }
      const keysMatch = output.match(/keys:\s*\[([\s\S]*?)\]/);
      if (!keysMatch) {
        return { success: false, message: "Could not find the keys array." };
      }
      const keysValue = keysMatch[0];
      const hasAllKeys =
        keysValue.includes("name") &&
        keysValue.includes("grade") &&
        keysValue.includes("age");
      const keyCount = (keysValue.match(/name|grade|age/g) || []).length;
      if (hasAllKeys && keyCount === 3) {
        return {
          success: true,
          message: "Excellent! You've mastered for...in loops for objects!",
        };
      }
      return {
        success: false,
        message:
          "The keys array should contain exactly ['name', 'grade', 'age'].",
      };
    },
    hint: "for...in loops give you the property names (keys) of an object. Loop through the object and push each key into the array.",
    solutionHint: "Use: for (let key in student) { keys.push(key); }",
  },
  {
    id: 5,
    title: "Exercise 5: for...in Loop - Array Indices",
    category: "for...in",
    description:
      "While for...in can iterate over arrays, it gives you the indices (as strings), not the values. This is why for...of is usually better for arrays.",
    example: `const colors = ['red', 'green', 'blue'];
for (let index in colors) {
  console.log(index + ': ' + colors[index]);
}
// Output: 0: red, 1: green, 2: blue`,
    instruction:
      "Use a for...in loop to collect all VALUES from the array into a new array called 'values' (you'll need to use the index to access values).",
    starterCode: `// Your code here
const items = ['book', 'pen', 'laptop'];
const values = [];`,
    solution: `const items = ['book', 'pen', 'laptop'];
const values = [];
for (let index in items) {
  values.push(items[index]);
}`,
    watchVariables: ["values"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_forin.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in",
    },
    validate: function (code, output) {
      if (!code.includes("for") || !code.includes("in")) {
        return {
          success: false,
          message: "Make sure you're using a for...in loop.",
        };
      }
      if (code.includes("of")) {
        return {
          success: false,
          message: "Use for...in (not for...of) for this exercise.",
        };
      }
      const valuesMatch = output.match(/values:\s*\[([\s\S]*?)\]/);
      if (!valuesMatch) {
        return { success: false, message: "Could not find the values array." };
      }
      const valuesValue = valuesMatch[0];
      const hasAllValues =
        valuesValue.includes("book") &&
        valuesValue.includes("pen") &&
        valuesValue.includes("laptop");
      const valueCount = (valuesValue.match(/book|pen|laptop/g) || []).length;
      if (hasAllValues && valueCount === 3) {
        return {
          success: true,
          message:
            "Great! You've used for...in to access array values through indices!",
        };
      }
      return {
        success: false,
        message:
          "The values array should contain exactly ['book', 'pen', 'laptop'].",
      };
    },
    hint: "for...in gives you indices when used on arrays. Use the index variable to access the actual value: items[index]",
    solutionHint:
      "Use: for (let index in items) { values.push(items[index]); }",
  },

  // FOR...OF EXERCISES
  {
    id: 6,
    title: "Exercise 6: for...of Loop - Array Values",
    category: "for...of",
    description:
      "The for...of loop is the modern way to iterate over array VALUES directly. It's cleaner and more intuitive than for or for...in for arrays.",
    example: `const fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry`,
    instruction:
      "Use a for...of loop to create an array called 'uppercase' containing all fruits in uppercase.",
    starterCode: `// Your code here
const fruits = ['apple', 'banana', 'cherry'];
const uppercase = [];`,
    solution: `const fruits = ['apple', 'banana', 'cherry'];
const uppercase = [];
for (let fruit of fruits) {
  uppercase.push(fruit.toUpperCase());
}`,
    watchVariables: ["uppercase"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_forof.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",
    },
    validate: function (code, output) {
      if (!code.includes("for") || !code.includes("of")) {
        return {
          success: false,
          message: "Make sure you're using a for...of loop.",
        };
      }
      const uppercaseMatch = output.match(/uppercase:\s*\[([\s\S]*?)\]/);
      if (!uppercaseMatch) {
        return {
          success: false,
          message: "Could not find the uppercase array.",
        };
      }
      const uppercaseValue = uppercaseMatch[0];
      const hasUppercase =
        uppercaseValue.includes("APPLE") &&
        uppercaseValue.includes("BANANA") &&
        uppercaseValue.includes("CHERRY");
      const uppercaseCount = (
        uppercaseValue.match(/APPLE|BANANA|CHERRY/g) || []
      ).length;
      // Check for lowercase WITHIN the array brackets only (not in the variable name)
      const arrayContentMatch = uppercaseValue.match(/\[([\s\S]*)\]/);
      const hasLowercase =
        arrayContentMatch && arrayContentMatch[1].match(/[a-z]/);

      if (hasUppercase && uppercaseCount === 3 && !hasLowercase) {
        return {
          success: true,
          message: "Excellent! You've mastered for...of loops!",
        };
      }
      return {
        success: false,
        message:
          "The uppercase array should contain exactly ['APPLE', 'BANANA', 'CHERRY'] in uppercase.",
      };
    },
    hint: "for...of gives you the values directly. Use the .toUpperCase() method on each fruit string before pushing it.",
    solutionHint:
      "Use: for (let fruit of fruits) { uppercase.push(fruit.toUpperCase()); }",
  },
  {
    id: 7,
    title: "Exercise 7: for...of Loop - Summing Numbers",
    category: "for...of",
    description:
      "for...of loops make it easy to process array values without worrying about indices.",
    example: `const prices = [10, 20, 30];
let total = 0;
for (let price of prices) {
  total += price;
}
console.log(total); // 60`,
    instruction:
      "Use a for...of loop to calculate the sum of all numbers and store it in a variable called 'sum'.",
    starterCode: `// Your code here
const numbers = [5, 10, 15, 20, 25];
let sum = 0;`,
    solution: `const numbers = [5, 10, 15, 20, 25];
let sum = 0;
for (let num of numbers) {
  sum += num;
}`,
    watchVariables: ["sum"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_forof.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",
    },
    validate: function (code, output) {
      if (!code.includes("for") || !code.includes("of")) {
        return {
          success: false,
          message: "Make sure you're using a for...of loop.",
        };
      }
      const sumMatch = output.match(/sum:\s*(\d+)/);
      if (!sumMatch) {
        return { success: false, message: "Could not find the sum variable." };
      }
      const sumValue = sumMatch[1];
      if (sumValue === "75") {
        return {
          success: true,
          message: "Perfect! You've calculated the correct sum of 75!",
        };
      }
      return {
        success: false,
        message: "The sum should be exactly 75 (5+10+15+20+25).",
      };
    },
    hint: "Loop through each number and add it to sum using the += operator. for...of makes this simple!",
    solutionHint: "Use: for (let num of numbers) { sum += num; }",
  },
  {
    id: 8,
    title: "Exercise 8: for...of Loop - Filtering Values",
    category: "for...of",
    description:
      "You can use conditionals inside for...of loops to filter and process only certain values.",
    example: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}
console.log(evens); // [2, 4, 6]`,
    instruction:
      "Use a for...of loop to create an array called 'longWords' containing only words with more than 4 letters.",
    starterCode: `// Your code here
const words = ['cat', 'elephant', 'dog', 'butterfly', 'ox'];
const longWords = [];`,
    solution: `const words = ['cat', 'elephant', 'dog', 'butterfly', 'ox'];
const longWords = [];
for (let word of words) {
  if (word.length > 4) {
    longWords.push(word);
  }
}`,
    watchVariables: ["longWords"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_forof.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",
    },
    validate: function (code, output) {
      if (!code.includes("for") || !code.includes("of")) {
        return {
          success: false,
          message: "Make sure you're using a for...of loop.",
        };
      }
      const longWordsMatch = output.match(/longWords:\s*\[([\s\S]*?)\]/);
      if (!longWordsMatch) {
        return {
          success: false,
          message: "Could not find the longWords array.",
        };
      }
      const longWordsValue = longWordsMatch[0];
      const hasCorrectWords =
        longWordsValue.includes("elephant") &&
        longWordsValue.includes("butterfly");
      const noShortWords =
        !longWordsValue.includes("cat") &&
        !longWordsValue.includes("dog") &&
        !longWordsValue.includes("ox");
      const wordCount = (longWordsValue.match(/elephant|butterfly/g) || [])
        .length;

      if (hasCorrectWords && noShortWords && wordCount === 2) {
        return {
          success: true,
          message: "Amazing! You've filtered the array correctly!",
        };
      }
      if (!noShortWords) {
        return {
          success: false,
          message:
            "The longWords array should ONLY contain words with more than 4 letters. Remove cat, dog, and ox.",
        };
      }
      return {
        success: false,
        message:
          "The longWords array should contain exactly ['elephant', 'butterfly'].",
      };
    },
    hint: "Use an if statement inside your for...of loop to check if word.length is greater than 4 before pushing.",
    solutionHint:
      "Use: for (let word of words) { if (word.length > 4) { longWords.push(word); } }",
  },

  // WHILE LOOP EXERCISES
  {
    id: 9,
    title: "Exercise 9: while Loop - Countdown",
    category: "while",
    description:
      "The while loop continues to execute as long as the condition is true. Be careful to avoid infinite loops by ensuring the condition eventually becomes false!",
    example: `let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
// Output: 5, 4, 3, 2, 1`,
    instruction:
      "Use a while loop to create a countdown from 10 to 1 and store all numbers in an array called 'countdown'.",
    starterCode: `// Your code here
let counter = 10;
const countdown = [];`,
    solution: `let counter = 10;
const countdown = [];
while (counter > 0) {
  countdown.push(counter);
  counter--;
}`,
    watchVariables: ["countdown"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_while.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while",
    },
    validate: function (code, output) {
      if (!code.includes("while")) {
        return {
          success: false,
          message: "Make sure you're using a while loop.",
        };
      }
      const countdownMatch = output.match(/countdown:\s*\[([\s\S]*?)\]/);
      if (!countdownMatch) {
        return {
          success: false,
          message: "Could not find the countdown array.",
        };
      }
      const countdownValue = countdownMatch[0];
      // Check for 0 within the array brackets only (as standalone element, not in 10)
      const arrayContentMatch = countdownValue.match(/\[([\s\S]*)\]/);
      const hasZero =
        arrayContentMatch && arrayContentMatch[1].match(/[\s,]0[\s,\]]/);
      const has11 = countdownValue.includes("11");
      // Check that 10 comes before standalone 1 (not the 1 in 10)
      const has10 = countdownValue.includes("10");
      const hasStandalone1 = countdownValue.match(/[\s,]1[\s,\]]/);
      const isCountdown = has10 && hasStandalone1 && !has11 && !hasZero;
      if (isCountdown) {
        return {
          success: true,
          message: "Perfect! Your while loop counts down from 10 to 1!",
        };
      }
      if (has11) {
        return {
          success: false,
          message: "Don't include 11! Start at 10 and go down to 1.",
        };
      }
      if (hasZero) {
        return {
          success: false,
          message: "Don't include 0! The countdown should stop at 1.",
        };
      }
      return {
        success: false,
        message: "The countdown array should be exactly [10, 9, 8, ..., 2, 1].",
      };
    },
    hint: "The while loop should run as long as counter is greater than 0. Inside, push the counter value, then decrement it.",
    solutionHint:
      "Use: while (counter > 0) { countdown.push(counter); counter--; }",
  },
  {
    id: 10,
    title: "Exercise 10: while Loop - Processing Array",
    category: "while",
    description:
      "You can use a while loop to process an array by using an index variable and checking against the array's length.",
    example: `const numbers = [2, 4, 6];
let i = 0;
let sum = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(sum); // 12`,
    instruction:
      "Use a while loop to multiply all numbers in the array and store the result in 'product'.",
    starterCode: `// Your code here
const numbers = [2, 3, 4];
let product = 1;
let i = 0;`,
    solution: `const numbers = [2, 3, 4];
let product = 1;
let i = 0;
while (i < numbers.length) {
  product *= numbers[i];
  i++;
}`,
    watchVariables: ["product"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_while.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while",
    },
    validate: function (code, output) {
      if (!code.includes("while")) {
        return {
          success: false,
          message: "Make sure you're using a while loop.",
        };
      }
      const productMatch = output.match(/product:\s*(\d+)/);
      if (!productMatch) {
        return {
          success: false,
          message: "Could not find the product variable.",
        };
      }
      const productValue = productMatch[1];
      if (productValue === "24") {
        return {
          success: true,
          message: "Excellent! The product is correct (2 × 3 × 4 = 24)!",
        };
      }
      return {
        success: false,
        message: "The product should be exactly 24 (2 × 3 × 4).",
      };
    },
    hint: "Loop while i is less than the array length. Inside, multiply product by numbers[i], then increment i.",
    solutionHint:
      "Use: while (i < numbers.length) { product *= numbers[i]; i++; }",
  },

  // DO...WHILE EXERCISES
  {
    id: 11,
    title: "Exercise 11: do...while Loop - Execute At Least Once",
    category: "do...while",
    description:
      "The do...while loop executes the code block FIRST, then checks the condition. This guarantees at least one execution, even if the condition is initially false.",
    example: `let count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);
// Output: 0, 1, 2

// Even if condition is false initially, it runs once:
let x = 10;
do {
  console.log(x); // This runs once!
} while (x < 5);`,
    instruction:
      "Use a do...while loop to create an array called 'attempts' that counts from 1 to 5.",
    starterCode: `// Your code here
let attempt = 1;
const attempts = [];`,
    solution: `let attempt = 1;
const attempts = [];
do {
  attempts.push(attempt);
  attempt++;
} while (attempt <= 5);`,
    watchVariables: ["attempts"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_while.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while",
    },
    validate: function (code, output) {
      if (!code.includes("do") || !code.includes("while")) {
        return {
          success: false,
          message: "Make sure you're using a do...while loop.",
        };
      }
      const attemptsMatch = output.match(/attempts:\s*\[([\s\S]*?)\]/);
      if (!attemptsMatch) {
        return {
          success: false,
          message: "Could not find the attempts array.",
        };
      }
      const attemptsValue = attemptsMatch[0];
      const hasZero = attemptsValue.match(/[\[\s,]0[\s,\]]/);
      const has6 = attemptsValue.includes("6");
      const hasCorrectAttempts =
        attemptsValue.includes("1") &&
        attemptsValue.includes("5") &&
        attemptsValue.indexOf("1") < attemptsValue.indexOf("5") &&
        !hasZero &&
        !has6;
      if (hasCorrectAttempts) {
        return {
          success: true,
          message: "Perfect! You've mastered the do...while loop!",
        };
      }
      if (hasZero) {
        return {
          success: false,
          message: "Start at 1, not 0! The array should be [1, 2, 3, 4, 5].",
        };
      }
      if (has6) {
        return {
          success: false,
          message: "Stop at 5! The array should be [1, 2, 3, 4, 5].",
        };
      }
      return {
        success: false,
        message: "The attempts array should be exactly [1, 2, 3, 4, 5].",
      };
    },
    hint: "The do block executes first: push the attempt value and increment it. Then check if attempt is <= 5 in the while condition.",
    solutionHint:
      "Use: do { attempts.push(attempt); attempt++; } while (attempt <= 5);",
  },
  {
    id: 12,
    title: "Exercise 12: do...while Loop - Guaranteed Execution",
    category: "do...while",
    description:
      "The key difference of do...while is that it ALWAYS executes at least once, even if the condition is false from the start.",
    example: `// This will push 'start' even though condition is false
const results = [];
let value = 100;
do {
  results.push('start');
  value++;
} while (value < 50); // Condition is false, but do block ran once!
console.log(results); // ['start']`,
    instruction:
      "Use a do...while loop where the condition is false from the start (counter > 10), but still pushes 'executed' to the array once.",
    starterCode: `// Your code here
let counter = 0;
const messages = [];`,
    solution: `let counter = 0;
const messages = [];
do {
  messages.push('executed');
  counter++;
} while (counter > 10);`,
    watchVariables: ["messages"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_while.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while",
    },
    validate: function (code, output) {
      if (!code.includes("do") || !code.includes("while")) {
        return {
          success: false,
          message: "Make sure you're using a do...while loop.",
        };
      }
      if (!code.includes("> 10")) {
        return {
          success: false,
          message:
            "The condition should be 'counter > 10' (which is false from the start).",
        };
      }
      const messagesMatch = output.match(/messages:\s*\[([\s\S]*?)\]/);
      if (!messagesMatch) {
        return {
          success: false,
          message: "Could not find the messages array.",
        };
      }
      const messagesValue = messagesMatch[0];
      const executedCount = (messagesValue.match(/executed/g) || []).length;
      if (executedCount === 1) {
        return {
          success: true,
          message:
            "Excellent! You've proven do...while always executes at least once!",
        };
      }
      if (executedCount > 1) {
        return {
          success: false,
          message:
            "The loop should only execute ONCE since the condition is false.",
        };
      }
      return {
        success: false,
        message:
          "The messages array should contain exactly one 'executed' entry.",
      };
    },
    hint: "Set the condition to be false from the start (counter > 10 when counter is 0). The do block will still run once!",
    solutionHint:
      "Use: do { messages.push('executed'); counter++; } while (counter > 10);",
  },

  // CHALLENGE EXERCISES
  {
    id: 13,
    title: "Challenge 1: Comparing for and for...of",
    category: "challenge",
    description:
      "Practice both traditional for loops and modern for...of loops to see their differences.",
    example: `// Traditional for - need indices
const nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log('Index ' + i + ': ' + nums[i]);
}

// Modern for...of - just values
for (let num of nums) {
  console.log('Value: ' + num);
}`,
    instruction:
      "Create two arrays: 'positions' using a FOR loop (should contain indices: [0, 1, 2, 3, 4]) and 'values' using a FOR...OF loop (should contain the actual values from items).",
    starterCode: `// Your code here
const items = ['a', 'b', 'c', 'd', 'e'];
const positions = [];
const values = [];`,
    solution: `const items = ['a', 'b', 'c', 'd', 'e'];
const positions = [];
const values = [];
for (let i = 0; i < items.length; i++) {
  positions.push(i);
}
for (let item of items) {
  values.push(item);
}`,
    watchVariables: ["positions", "values"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_for.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
    },
    validate: function (code, output) {
      if (!code.includes("for") || !code.includes("of")) {
        return {
          success: false,
          message:
            "Make sure you're using both a for loop AND a for...of loop.",
        };
      }
      const positionsMatch = output.match(/positions:\s*\[([\s\S]*?)\]/);
      const valuesMatch = output.match(/values:\s*\[([\s\S]*?)\]/);
      if (!positionsMatch || !valuesMatch) {
        return { success: false, message: "Could not find both arrays." };
      }
      const positionsValue = positionsMatch[0];
      const valuesValue = valuesMatch[0];

      // Extract just the array content
      const positionsContent = positionsValue.match(/\[([\s\S]*)\]/)[1];
      const valuesContent = valuesValue.match(/\[([\s\S]*)\]/)[1];

      const hasCorrectPositions =
        positionsContent.includes("0") &&
        positionsContent.includes("4") &&
        !positionsContent.includes("5") &&
        !positionsContent.includes("-1");
      const hasCorrectValues =
        valuesContent.includes("a") &&
        valuesContent.includes("e") &&
        valuesContent.indexOf("a") < valuesContent.indexOf("e");

      if (hasCorrectPositions && hasCorrectValues) {
        return {
          success: true,
          message: "Incredible! You've mastered both loop types!",
        };
      }
      return {
        success: false,
        message:
          "Check both arrays: positions should be exactly [0,1,2,3,4] and values should be exactly ['a','b','c','d','e'].",
      };
    },
    hint: "Use TWO separate loops: a traditional for loop with index i to collect indices, and a for...of loop to collect the actual values.",
    solutionHint:
      "First loop: for (let i = 0; i < items.length; i++) { positions.push(i); } Second loop: for (let item of items) { values.push(item); }",
  },
  {
    id: 14,
    title: "Challenge 2: Using while with Arrays",
    category: "challenge",
    description:
      "while loops are great when you don't know exactly how many iterations you need, or when you want to remove items from an array dynamically.",
    example: `const tasks = ['task1', 'task2', 'task3'];
const completed = [];
while (tasks.length > 0) {
  completed.push(tasks.shift());
}
console.log(completed); // ['task1', 'task2', 'task3']
console.log(tasks);     // []`,
    instruction:
      "Use a while loop to move all items from 'queue' to 'processed' (hint: remove from queue and add to processed until queue is empty).",
    starterCode: `// Your code here
const queue = ['first', 'second', 'third'];
const processed = [];`,
    solution: `const queue = ['first', 'second', 'third'];
const processed = [];
while (queue.length > 0) {
  processed.push(queue.shift());
}`,
    watchVariables: ["queue", "processed"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_while.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while",
    },
    validate: function (code, output) {
      if (!code.includes("while")) {
        return {
          success: false,
          message: "Make sure you're using a while loop.",
        };
      }
      const queueMatch = output.match(/queue:\s*\[([\s\S]*?)\]/);
      const processedMatch = output.match(/processed:\s*\[([\s\S]*?)\]/);
      if (!queueMatch || !processedMatch) {
        return { success: false, message: "Could not find both arrays." };
      }
      const queueValue = queueMatch[0];
      const processedValue = processedMatch[0];
      const queueEmpty =
        queueValue === "queue: []" || !queueValue.includes("first");
      const processedFull =
        processedValue.includes("first") &&
        processedValue.includes("second") &&
        processedValue.includes("third");
      const correctOrder =
        processedValue.indexOf("first") < processedValue.indexOf("second") &&
        processedValue.indexOf("second") < processedValue.indexOf("third");
      const itemCount = (processedValue.match(/first|second|third/g) || [])
        .length;

      if (queueEmpty && processedFull && correctOrder && itemCount === 3) {
        return {
          success: true,
          message:
            "Excellent! You've successfully moved all items using a while loop!",
        };
      }
      if (!queueEmpty) {
        return {
          success: false,
          message: "The queue should be empty after moving all items.",
        };
      }
      return {
        success: false,
        message:
          "The processed array should have exactly ['first', 'second', 'third'] in order.",
      };
    },
    hint: "Keep looping while the queue has items (queue.length > 0). Remove from queue using shift() and add to processed using push().",
    solutionHint:
      "Use: while (queue.length > 0) { processed.push(queue.shift()); }",
  },
  {
    id: 15,
    title: "Final Challenge: Build a Complete Array Processor",
    category: "challenge",
    description:
      "Combine everything you've learned! Use different loop types to process data in multiple ways.",
    example: `const data = [1, 2, 3, 4, 5];
const results = { sum: 0, doubled: [], count: 0 };

// Use for loop to sum
for (let i = 0; i < data.length; i++) {
  results.sum += data[i];
}

// Use for...of to double
for (let num of data) {
  results.doubled.push(num * 2);
}

// Use while to count
let j = 0;
while (j < data.length) {
  results.count++;
  j++;
}`,
    instruction:
      "Process the scores array: 1) Use FOR loop to find 'highest', 2) Use FOR...OF to create 'passing' array (scores >= 60), 3) Use WHILE to count how many scores and store in 'total'.",
    starterCode: `// Your code here
const scores = [45, 72, 88, 55, 91, 63];
let highest = 0;
const passing = [];
let total = 0;
let index = 0;`,
    solution: `const scores = [45, 72, 88, 55, 91, 63];
let highest = 0;
const passing = [];
let total = 0;
let index = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
  }
}

for (let score of scores) {
  if (score >= 60) {
    passing.push(score);
  }
}

while (index < scores.length) {
  total++;
  index++;
}`,
    watchVariables: ["highest", "passing", "total"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_loop_for.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
    },
    validate: function (code, output) {
      if (!code.includes("for")) {
        return {
          success: false,
          message:
            "Make sure you're using a FOR loop for finding the highest score.",
        };
      }
      if (!code.includes("of")) {
        return {
          success: false,
          message:
            "Make sure you're using a FOR...OF loop for filtering passing scores.",
        };
      }
      if (!code.includes("while")) {
        return {
          success: false,
          message:
            "Make sure you're using a WHILE loop for counting total scores.",
        };
      }

      const highestMatch = output.match(/highest:\s*(\d+)/);
      const passingMatch = output.match(/passing:\s*\[([\s\S]*?)\]/);
      const totalMatch = output.match(/total:\s*(\d+)/);

      if (!highestMatch || !passingMatch || !totalMatch) {
        return {
          success: false,
          message: "Could not find all required variables.",
        };
      }

      const highestValue = highestMatch[1];
      const passingValue = passingMatch[0];
      const totalValue = totalMatch[1];

      const isCorrectHighest = highestValue === "91";
      const hasCorrectPassing =
        passingValue.includes("72") &&
        passingValue.includes("88") &&
        passingValue.includes("91") &&
        passingValue.includes("63") &&
        !passingValue.includes("45") &&
        !passingValue.includes("55");
      const passingCount = (passingValue.match(/\d{2}/g) || []).length;
      const isCorrectTotal = totalValue === "6";

      if (
        isCorrectHighest &&
        hasCorrectPassing &&
        passingCount === 4 &&
        isCorrectTotal
      ) {
        return {
          success: true,
          message:
            "🎉 AMAZING! You've mastered all loop types and completed the challenge!",
        };
      }
      if (!isCorrectHighest) {
        return { success: false, message: "The highest value should be 91." };
      }
      if (!hasCorrectPassing || passingCount !== 4) {
        return {
          success: false,
          message:
            "The passing array should have exactly 4 scores that are >= 60: [72, 88, 91, 63].",
        };
      }
      if (!isCorrectTotal) {
        return {
          success: false,
          message: "The total should be 6 (count of all scores).",
        };
      }
      return {
        success: false,
        message:
          "Check your results: highest=91, passing=[72,88,91,63], total=6.",
      };
    },
    hint: "You need THREE separate loops: (1) for loop checking if each score > highest, (2) for...of loop with if (score >= 60) to filter, (3) while loop that increments total and index.",
    solutionHint:
      "for (let i = 0; i < scores.length; i++) { if (scores[i] > highest) highest = scores[i]; } | for (let score of scores) { if (score >= 60) passing.push(score); } | while (index < scores.length) { total++; index++; }",
  },
];
