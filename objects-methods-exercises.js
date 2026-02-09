// Exercise definitions for objects methods training
const exercises = [
  {
    id: 1,
    title: "Exercise 1: Object.keys() Basics",
    description:
      "Object.keys() is a static method that returns an array containing the names of all enumerable properties of an object. This is incredibly useful when you need to know what properties an object has, or when you want to iterate over them.",
    example: `const person = {
  name: "Alice",
  age: 30,
  city: "Boston"
};
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]`,
    instruction:
      "Given a 'movie' object with title, director, and year properties, use Object.keys() to get an array of the property names and store it in a variable called 'movieKeys'.",
    starterCode: `// Your code here
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010
};
`,
    solution: `const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010
};
const movieKeys = Object.keys(movie);`,
    watchVariables: ["movie", "movieKeys"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_keys.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.keys")) {
          return {
            success: false,
            message: "Make sure you're using Object.keys() to get the property names.",
          };
        }
        if (!code.includes("movieKeys")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'movieKeys'.",
          };
        }

        const movieKeysMatch = output.match(/movieKeys:\s*\[[\s\S]*?\]/);
        if (!movieKeysMatch) {
          return {
            success: false,
            message: "Could not find the movieKeys variable.",
          };
        }

        const movieKeysValue = movieKeysMatch[0];
        const hasTitle = movieKeysValue.includes("title");
        const hasDirector = movieKeysValue.includes("director");
        const hasYear = movieKeysValue.includes("year");

        if (hasTitle && hasDirector && hasYear) {
          return {
            success: true,
            message: "Perfect! You've learned how to use Object.keys() to get property names!",
          };
        }
        return {
          success: false,
          message: "The movieKeys array should contain 'title', 'director', and 'year'.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.keys(objectName) to get an array of property names.",
    solutionHint: "const movieKeys = Object.keys(movie);",
  },
  {
    id: 2,
    title: "Exercise 2: Object.values() Basics",
    description:
      "Object.values() returns an array containing all the values of an object's enumerable properties. This is perfect when you only care about the values, not the property names.",
    example: `const prices = {
  apple: 1.50,
  banana: 0.75,
  orange: 2.00
};
const values = Object.values(prices);
console.log(values); // [1.5, 0.75, 2]`,
    instruction:
      "Given a 'scores' object with math, science, and english properties, use Object.values() to get an array of the score values and store it in a variable called 'scoreValues'.",
    starterCode: `// Your code here
const scores = {
  math: 95,
  science: 88,
  english: 92
};
`,
    solution: `const scores = {
  math: 95,
  science: 88,
  english: 92
};
const scoreValues = Object.values(scores);`,
    watchVariables: ["scores", "scoreValues"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_values.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.values")) {
          return {
            success: false,
            message: "Make sure you're using Object.values() to get the property values.",
          };
        }
        if (!code.includes("scoreValues")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'scoreValues'.",
          };
        }

        const scoreValuesMatch = output.match(/scoreValues:\s*\[[\s\S]*?\]/);
        if (!scoreValuesMatch) {
          return {
            success: false,
            message: "Could not find the scoreValues variable.",
          };
        }

        const scoreValuesValue = scoreValuesMatch[0];
        const has95 = scoreValuesValue.includes("95");
        const has88 = scoreValuesValue.includes("88");
        const has92 = scoreValuesValue.includes("92");

        if (has95 && has88 && has92) {
          return {
            success: true,
            message: "Excellent! You've mastered Object.values() to extract property values!",
          };
        }
        return {
          success: false,
          message: "The scoreValues array should contain the score numbers: 95, 88, and 92.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.values(objectName) to get an array of all property values.",
    solutionHint: "const scoreValues = Object.values(scores);",
  },
  {
    id: 3,
    title: "Exercise 3: Object.entries() Basics",
    description:
      "Object.entries() returns an array of [key, value] pairs for each enumerable property. Each element in the returned array is itself an array with two elements: the property name and its value. This is extremely useful for simultaneous access to both keys and values.",
    example: `const settings = {
  theme: "dark",
  fontSize: 14,
  language: "en"
};
const entries = Object.entries(settings);
console.log(entries);
// [["theme", "dark"], ["fontSize", 14], ["language", "en"]]`,
    instruction:
      "Given a 'colors' object with primary, secondary, and tertiary properties, use Object.entries() to get an array of [key, value] pairs and store it in a variable called 'colorEntries'.",
    starterCode: `// Your code here
const colors = {
  primary: "blue",
  secondary: "green",
  tertiary: "orange"
};
`,
    solution: `const colors = {
  primary: "blue",
  secondary: "green",
  tertiary: "orange"
};
const colorEntries = Object.entries(colors);`,
    watchVariables: ["colors", "colorEntries"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_entries.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.entries")) {
          return {
            success: false,
            message: "Make sure you're using Object.entries() to get the key-value pairs.",
          };
        }
        if (!code.includes("colorEntries")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'colorEntries'.",
          };
        }

        if (!output.includes("colorEntries:")) {
          return {
            success: false,
            message: "Could not find the colorEntries variable.",
          };
        }

        const hasPrimary = output.includes("primary") && output.includes("blue");
        const hasSecondary = output.includes("secondary") && output.includes("green");
        const hasTertiary = output.includes("tertiary") && output.includes("orange");

        if (hasPrimary && hasSecondary && hasTertiary) {
          return {
            success: true,
            message: "Great job! You've learned how Object.entries() creates [key, value] pairs!",
          };
        }
        return {
          success: false,
          message: "The colorEntries should contain arrays with property names and their values.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.entries(objectName) to get an array of [key, value] pairs.",
    solutionHint: "const colorEntries = Object.entries(colors);",
  },
  {
    id: 4,
    title: "Exercise 4: Count Properties",
    description:
      "One practical use of Object.keys() is to count how many properties an object has. Since Object.keys() returns an array, you can use the .length property to get the count. This is much more reliable than trying to count manually.",
    example: `const user = {
  id: 101,
  username: "johndoe",
  email: "john@example.com",
  verified: true
};
const propertyCount = Object.keys(user).length;
console.log(propertyCount); // 4`,
    instruction:
      "Given a 'config' object with multiple properties, use Object.keys() and .length to count the number of properties and store the count in a variable called 'propertyCount'.",
    starterCode: `// Your code here
const config = {
  host: "localhost",
  port: 3000,
  secure: true,
  timeout: 5000
};
`,
    solution: `const config = {
  host: "localhost",
  port: 3000,
  secure: true,
  timeout: 5000
};
const propertyCount = Object.keys(config).length;`,
    watchVariables: ["config", "propertyCount"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_keys.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.keys")) {
          return {
            success: false,
            message: "Make sure you're using Object.keys() to get the property names.",
          };
        }
        if (!code.includes(".length")) {
          return {
            success: false,
            message: "Make sure you're using .length to count the properties.",
          };
        }
        if (!code.includes("propertyCount")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'propertyCount'.",
          };
        }

        const propertyCountMatch = output.match(/propertyCount:\s*(\d+)/);
        if (!propertyCountMatch) {
          return {
            success: false,
            message: "Could not find the propertyCount variable.",
          };
        }

        const count = parseInt(propertyCountMatch[1]);
        if (count === 4) {
          return {
            success: true,
            message: "Perfect! You've learned how to count object properties using Object.keys().length!",
          };
        }
        return {
          success: false,
          message: "The propertyCount should be 4. Make sure you're using Object.keys(config).length.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Combine Object.keys() with .length: Object.keys(obj).length",
    solutionHint: "const propertyCount = Object.keys(config).length;",
  },
  {
    id: 5,
    title: "Exercise 5: for...in Loop",
    description:
      "The for...in loop iterates over all enumerable properties of an object. On each iteration, the loop variable contains the property name (key). You can then use bracket notation to access the corresponding value. This is one of the classic ways to loop through object properties.",
    example: `const cart = {
  apples: 3,
  bananas: 2,
  oranges: 5
};
const items = [];
for (const item in cart) {
  items.push(item + ": " + cart[item]);
}
console.log(items);
// ["apples: 3", "bananas: 2", "oranges: 5"]`,
    instruction:
      "Given a 'prices' object, use a for...in loop to create an array called 'priceList' with strings in the format 'item: $price' (e.g., 'coffee: $3.50').",
    starterCode: `// Your code here
const prices = {
  coffee: 3.50,
  tea: 2.00,
  juice: 4.00
};
`,
    solution: `const prices = {
  coffee: 3.50,
  tea: 2.00,
  juice: 4.00
};
const priceList = [];
for (const item in prices) {
  priceList.push(item + ": $" + prices[item]);
}`,
    watchVariables: ["prices", "priceList"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_forin.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("for") || !code.includes("in")) {
          return {
            success: false,
            message: "Make sure you're using a for...in loop to iterate over the object.",
          };
        }
        if (!code.includes("priceList")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'priceList'.",
          };
        }

        const priceListMatch = output.match(/priceList:\s*\[[\s\S]*?\]/);
        if (!priceListMatch) {
          return {
            success: false,
            message: "Could not find the priceList variable.",
          };
        }

        const priceListValue = priceListMatch[0];
        const hasCoffee = priceListValue.includes("coffee") && priceListValue.includes("3.5");
        const hasTea = priceListValue.includes("tea") && priceListValue.includes("2");
        const hasJuice = priceListValue.includes("juice") && priceListValue.includes("4");

        if (hasCoffee && hasTea && hasJuice) {
          return {
            success: true,
            message: "Excellent! You've mastered the for...in loop for object iteration!",
          };
        }
        return {
          success: false,
          message: "Make sure priceList contains formatted strings like 'item: $price'.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use for (const key in object) { } and access values with object[key].",
    solutionHint: "for (const item in prices) { priceList.push(item + ': $' + prices[item]); }",
  },
  {
    id: 6,
    title: "Exercise 6: Looping with Object.keys()",
    description:
      "Another approach to iterating over object properties is to use Object.keys() combined with array methods like forEach(). This gives you more control and access to array methods, and many developers prefer this style over for...in loops.",
    example: `const student = {
  name: "Sarah",
  grade: 90,
  enrolled: true
};
const info = [];
Object.keys(student).forEach(key => {
  info.push(key + ": " + student[key]);
});
console.log(info);
// ["name: Sarah", "grade: 90", "enrolled: true"]`,
    instruction:
      "Given a 'student' object, use Object.keys() with forEach() to create an array called 'info' containing strings in the format 'key: value'.",
    starterCode: `// Your code here
const student = {
  name: "Alex",
  age: 20,
  major: "Computer Science"
};
`,
    solution: `const student = {
  name: "Alex",
  age: 20,
  major: "Computer Science"
};
const info = [];
Object.keys(student).forEach(key => {
  info.push(key + ": " + student[key]);
});`,
    watchVariables: ["student", "info"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_keys.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.keys")) {
          return {
            success: false,
            message: "Make sure you're using Object.keys() to get the property names.",
          };
        }
        if (!code.includes("forEach")) {
          return {
            success: false,
            message: "Make sure you're using forEach() to iterate over the keys.",
          };
        }
        if (!code.includes("info")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'info'.",
          };
        }

        const infoMatch = output.match(/info:\s*\[[\s\S]*?\]/);
        if (!infoMatch) {
          return {
            success: false,
            message: "Could not find the info variable.",
          };
        }

        const infoValue = infoMatch[0];
        const hasName = infoValue.includes("name") && infoValue.includes("Alex");
        const hasAge = infoValue.includes("age") && infoValue.includes("20");
        const hasMajor = infoValue.includes("major") && infoValue.includes("Computer Science");

        if (hasName && hasAge && hasMajor) {
          return {
            success: true,
            message: "Great work! You've learned to iterate with Object.keys() and forEach()!",
          };
        }
        return {
          success: false,
          message: "Make sure info contains formatted strings with all properties.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.keys(obj).forEach(key => { }) to iterate and access values with obj[key].",
    solutionHint: "Object.keys(student).forEach(key => { info.push(key + ': ' + student[key]); });",
  },
  {
    id: 7,
    title: "Exercise 7: Looping with Object.entries()",
    description:
      "Object.entries() combined with forEach() allows you to use destructuring to access both key and value in a clean, readable way. This is often considered the most elegant approach to iterating over objects when you need both the key and value.",
    example: `const scores = {
  math: 95,
  english: 88,
  science: 92
};
const results = [];
Object.entries(scores).forEach(([subject, score]) => {
  results.push(subject + ": " + score + "%");
});
console.log(results);
// ["math: 95%", "english: 88%", "science: 92%"]`,
    instruction:
      "Given an 'inventory' object, use Object.entries() with forEach() and destructuring to create a 'summary' array containing strings in the format 'item (quantity)' (e.g., 'apples (50)').",
    starterCode: `// Your code here
const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 45
};
`,
    solution: `const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 45
};
const summary = [];
Object.entries(inventory).forEach(([item, quantity]) => {
  summary.push(item + " (" + quantity + ")");
});`,
    watchVariables: ["inventory", "summary"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_entries.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.entries")) {
          return {
            success: false,
            message: "Make sure you're using Object.entries() to get key-value pairs.",
          };
        }
        if (!code.includes("forEach")) {
          return {
            success: false,
            message: "Make sure you're using forEach() to iterate over the entries.",
          };
        }
        if (!code.includes("summary")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'summary'.",
          };
        }

        const summaryMatch = output.match(/summary:\s*\[[\s\S]*?\]/);
        if (!summaryMatch) {
          return {
            success: false,
            message: "Could not find the summary variable.",
          };
        }

        const summaryValue = summaryMatch[0];
        const hasApples = summaryValue.includes("apples") && summaryValue.includes("50");
        const hasBananas = summaryValue.includes("bananas") && summaryValue.includes("30");
        const hasOranges = summaryValue.includes("oranges") && summaryValue.includes("45");

        if (hasApples && hasBananas && hasOranges) {
          return {
            success: true,
            message: "Perfect! You've mastered Object.entries() with destructuring!",
          };
        }
        return {
          success: false,
          message: "Make sure summary contains formatted strings like 'item (quantity)'.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.entries(obj).forEach(([key, value]) => { }) with array destructuring.",
    solutionHint: "Object.entries(inventory).forEach(([item, quantity]) => { summary.push(item + ' (' + quantity + ')'); });",
  },
  {
    id: 8,
    title: "Exercise 8: Object.hasOwnProperty()",
    description:
      "The hasOwnProperty() method checks whether a property exists directly on an object (not inherited from its prototype chain). It returns true if the object has the specified property as its own property, and false otherwise. This is important for distinguishing between own properties and inherited ones.",
    example: `const car = {
  brand: "Toyota",
  model: "Camry"
};
const hasBrand = car.hasOwnProperty("brand");
const hasColor = car.hasOwnProperty("color");
console.log(hasBrand); // true
console.log(hasColor); // false`,
    instruction:
      "Given a 'user' object, use hasOwnProperty() to check if it has an 'email' property and store the result (true or false) in a variable called 'hasEmail'.",
    starterCode: `// Your code here
const user = {
  username: "johndoe",
  email: "john@example.com",
  age: 28
};
`,
    solution: `const user = {
  username: "johndoe",
  email: "john@example.com",
  age: 28
};
const hasEmail = user.hasOwnProperty("email");`,
    watchVariables: ["user", "hasEmail"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_hasownproperty.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("hasOwnProperty")) {
          return {
            success: false,
            message: "Make sure you're using hasOwnProperty() to check for the property.",
          };
        }
        if (!code.includes("hasEmail")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'hasEmail'.",
          };
        }

        const hasEmailMatch = output.match(/hasEmail:\s*(true|false)/);
        if (!hasEmailMatch) {
          return {
            success: false,
            message: "Could not find the hasEmail variable.",
          };
        }

        const hasEmailValue = hasEmailMatch[1];
        if (hasEmailValue === "true") {
          return {
            success: true,
            message: "Excellent! You've learned how to check for own properties with hasOwnProperty()!",
          };
        }
        return {
          success: false,
          message: "The hasEmail should be true since the user object has an 'email' property.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use object.hasOwnProperty('propertyName') to check if a property exists.",
    solutionHint: "const hasEmail = user.hasOwnProperty('email');",
  },
  {
    id: 9,
    title: "Exercise 9: `in` Operator",
    description:
      "The 'in' operator checks whether a property exists in an object OR in its prototype chain. Unlike hasOwnProperty(), it returns true for both own properties and inherited properties. This includes methods inherited from Object.prototype like toString().",
    example: `const obj = {
  name: "Test"
};
console.log("name" in obj); // true (own property)
console.log("toString" in obj); // true (inherited from Object.prototype)`,
    instruction:
      "Given an object, use the 'in' operator to check if the 'toString' property exists (it's inherited from Object.prototype) and store the result in a variable called 'hasToString'.",
    starterCode: `// Your code here
const obj = {
  id: 1,
  value: "test"
};
`,
    solution: `const obj = {
  id: 1,
  value: "test"
};
const hasToString = "toString" in obj;`,
    watchVariables: ["obj", "hasToString"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_operators.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in",
    },
    validate: function (code, output) {
      try {
        if (!code.includes(" in ")) {
          return {
            success: false,
            message: "Make sure you're using the 'in' operator to check for the property.",
          };
        }
        if (!code.includes("hasToString")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'hasToString'.",
          };
        }

        const hasToStringMatch = output.match(/hasToString:\s*(true|false)/);
        if (!hasToStringMatch) {
          return {
            success: false,
            message: "Could not find the hasToString variable.",
          };
        }

        const hasToStringValue = hasToStringMatch[1];
        if (hasToStringValue === "true") {
          return {
            success: true,
            message: "Perfect! You've learned how the 'in' operator checks the entire prototype chain!",
          };
        }
        return {
          success: false,
          message: "The hasToString should be true because toString exists in the prototype chain.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use 'propertyName' in object to check if a property exists (including inherited properties).",
    solutionHint: "const hasToString = 'toString' in obj;",
  },
  {
    id: 10,
    title: "Exercise 10: hasOwnProperty vs in",
    description:
      "Understanding the difference between hasOwnProperty() and the 'in' operator is crucial. hasOwnProperty() only returns true for properties directly on the object, while 'in' returns true for both own properties and inherited ones. Let's see this difference in action with the toString property.",
    example: `const myObj = {
  custom: "value"
};
const ownCheck = myObj.hasOwnProperty("toString");
const inCheck = "toString" in myObj;
console.log(ownCheck); // false (not own property)
console.log(inCheck); // true (inherited property)`,
    instruction:
      "Given an object, check if 'toString' exists using BOTH hasOwnProperty() and the 'in' operator. Store the results in 'ownCheck' and 'inCheck' variables respectively.",
    starterCode: `// Your code here
const testObj = {
  data: "example"
};
`,
    solution: `const testObj = {
  data: "example"
};
const ownCheck = testObj.hasOwnProperty("toString");
const inCheck = "toString" in testObj;`,
    watchVariables: ["testObj", "ownCheck", "inCheck"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_hasownproperty.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("hasOwnProperty")) {
          return {
            success: false,
            message: "Make sure you're using hasOwnProperty() to check for own property.",
          };
        }
        if (!code.includes(" in ")) {
          return {
            success: false,
            message: "Make sure you're using the 'in' operator to check for property existence.",
          };
        }
        if (!code.includes("ownCheck") || !code.includes("inCheck")) {
          return {
            success: false,
            message: "Make sure you created both 'ownCheck' and 'inCheck' variables.",
          };
        }

        const ownCheckMatch = output.match(/ownCheck:\s*(true|false)/);
        const inCheckMatch = output.match(/inCheck:\s*(true|false)/);

        if (!ownCheckMatch || !inCheckMatch) {
          return {
            success: false,
            message: "Could not find both ownCheck and inCheck variables.",
          };
        }

        const ownCheckValue = ownCheckMatch[1];
        const inCheckValue = inCheckMatch[1];

        if (ownCheckValue === "false" && inCheckValue === "true") {
          return {
            success: true,
            message: "Excellent! You've understood the key difference between hasOwnProperty() and 'in'!",
          };
        }
        return {
          success: false,
          message: "ownCheck should be false (toString is not an own property) and inCheck should be true (it exists in prototype chain).",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use hasOwnProperty for own properties and 'in' for any property (including inherited).",
    solutionHint: "const ownCheck = testObj.hasOwnProperty('toString'); const inCheck = 'toString' in testObj;",
  },
  {
    id: 11,
    title: "Exercise 11: Object.assign() Merge",
    description:
      "Object.assign() copies all enumerable own properties from one or more source objects to a target object. It's commonly used to merge multiple objects together. The first argument is the target object (which gets modified and returned), and subsequent arguments are source objects to copy from.",
    example: `const defaults = {
  theme: "light",
  fontSize: 14
};
const userSettings = {
  fontSize: 16,
  language: "en"
};
const finalSettings = Object.assign({}, defaults, userSettings);
console.log(finalSettings);
// { theme: "light", fontSize: 16, language: "en" }`,
    instruction:
      "Given 'defaults' and 'userPrefs' objects, use Object.assign() to merge them into a new object called 'finalSettings'. The userPrefs should override defaults. Start with an empty object {}.",
    starterCode: `// Your code here
const defaults = {
  volume: 50,
  notifications: true,
  theme: "light"
};
const userPrefs = {
  volume: 80,
  theme: "dark"
};
`,
    solution: `const defaults = {
  volume: 50,
  notifications: true,
  theme: "light"
};
const userPrefs = {
  volume: 80,
  theme: "dark"
};
const finalSettings = Object.assign({}, defaults, userPrefs);`,
    watchVariables: ["defaults", "userPrefs", "finalSettings"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_object_assign.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.assign")) {
          return {
            success: false,
            message: "Make sure you're using Object.assign() to merge the objects.",
          };
        }
        if (!code.includes("finalSettings")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'finalSettings'.",
          };
        }

        const finalSettingsMatch = output.match(/finalSettings:\s*\{[\s\S]*?\}/);
        if (!finalSettingsMatch) {
          return {
            success: false,
            message: "Could not find the finalSettings variable.",
          };
        }

        const finalSettingsValue = finalSettingsMatch[0];
        const hasVolume80 = finalSettingsValue.includes("volume") && finalSettingsValue.includes("80");
        const hasNotifications = finalSettingsValue.includes("notifications") && finalSettingsValue.includes("true");
        const hasThemeDark = finalSettingsValue.includes("theme") && finalSettingsValue.includes("dark");

        if (hasVolume80 && hasNotifications && hasThemeDark) {
          return {
            success: true,
            message: "Perfect! You've learned how to merge objects with Object.assign()!",
          };
        }
        return {
          success: false,
          message: "Make sure finalSettings has merged properties with userPrefs overriding defaults.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.assign({}, obj1, obj2) to merge objects. Properties in obj2 override those in obj1.",
    solutionHint: "const finalSettings = Object.assign({}, defaults, userPrefs);",
  },
  {
    id: 12,
    title: "Exercise 12: Object.assign() Clone",
    description:
      "Object.assign() can be used to create a shallow copy (clone) of an object. By passing an empty object as the first argument and the object you want to clone as the second argument, you get a new object with the same properties. Note that this is a shallow copy - nested objects are still referenced, not copied.",
    example: `const original = {
  name: "John",
  age: 30,
  city: "NYC"
};
const clone = Object.assign({}, original);
console.log(clone);
// { name: "John", age: 30, city: "NYC" }
console.log(clone === original); // false (different objects)`,
    instruction:
      "Given an 'original' object, use Object.assign() to create a shallow clone of it and store the clone in a variable called 'clone'.",
    starterCode: `// Your code here
const original = {
  id: 123,
  name: "Product",
  price: 29.99,
  inStock: true
};
`,
    solution: `const original = {
  id: 123,
  name: "Product",
  price: 29.99,
  inStock: true
};
const clone = Object.assign({}, original);`,
    watchVariables: ["original", "clone"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_object_assign.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.assign")) {
          return {
            success: false,
            message: "Make sure you're using Object.assign() to clone the object.",
          };
        }
        if (!code.includes("clone")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'clone'.",
          };
        }

        const cloneMatch = output.match(/clone:\s*\{[\s\S]*?\}/);
        if (!cloneMatch) {
          return {
            success: false,
            message: "Could not find the clone variable.",
          };
        }

        const cloneValue = cloneMatch[0];
        const hasId = cloneValue.includes("id") && cloneValue.includes("123");
        const hasName = cloneValue.includes("name") && cloneValue.includes("Product");
        const hasPrice = cloneValue.includes("price") && cloneValue.includes("29.99");
        const hasInStock = cloneValue.includes("inStock") && cloneValue.includes("true");

        if (hasId && hasName && hasPrice && hasInStock) {
          return {
            success: true,
            message: "Great job! You've learned how to clone objects with Object.assign()!",
          };
        }
        return {
          success: false,
          message: "Make sure clone has all the same properties as original.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.assign({}, objectToClone) to create a shallow copy of an object.",
    solutionHint: "const clone = Object.assign({}, original);",
  },
  {
    id: 13,
    title: "Exercise 13: Filter Object Properties",
    description:
      "By combining Object.entries(), array filter(), and Object.fromEntries(), you can filter an object's properties based on conditions. Object.entries() converts the object to an array of [key, value] pairs, filter() selects which pairs to keep, and Object.fromEntries() converts the filtered array back to an object.",
    example: `const numbers = {
  a: 1,
  b: 5,
  c: 10,
  d: 3
};
const filtered = Object.fromEntries(
  Object.entries(numbers).filter(([key, value]) => value > 4)
);
console.log(filtered); // { b: 5, c: 10 }`,
    instruction:
      "Given a 'products' object with name:price pairs, filter to keep only items with price greater than $20, and store the result in a variable called 'expensive'.",
    starterCode: `// Your code here
const products = {
  laptop: 899,
  mouse: 15,
  keyboard: 45,
  monitor: 250,
  cable: 8
};
`,
    solution: `const products = {
  laptop: 899,
  mouse: 15,
  keyboard: 45,
  monitor: 250,
  cable: 8
};
const expensive = Object.fromEntries(
  Object.entries(products).filter(([name, price]) => price > 20)
);`,
    watchVariables: ["products", "expensive"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_entries.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("filter")) {
          return {
            success: false,
            message: "Make sure you're using the filter() method to filter the entries.",
          };
        }
        if (!code.includes("expensive")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'expensive'.",
          };
        }

        const expensiveMatch = output.match(/expensive:\s*\{[\s\S]*?\}/);
        if (!expensiveMatch) {
          return {
            success: false,
            message: "Could not find the expensive variable.",
          };
        }

        const expensiveValue = expensiveMatch[0];
        const hasLaptop = expensiveValue.includes("laptop");
        const hasKeyboard = expensiveValue.includes("keyboard");
        const hasMonitor = expensiveValue.includes("monitor");
        const hasMouse = expensiveValue.includes("mouse");
        const hasCable = expensiveValue.includes("cable");

        if (hasLaptop && hasKeyboard && hasMonitor && !hasMouse && !hasCable) {
          return {
            success: true,
            message: "Excellent! You've mastered filtering object properties!",
          };
        }
        return {
          success: false,
          message: "Make sure expensive only contains items with price > 20.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.fromEntries(Object.entries(obj).filter(([key, value]) => condition)).",
    solutionHint: "const expensive = Object.fromEntries(Object.entries(products).filter(([name, price]) => price > 20));",
  },
  {
    id: 14,
    title: "Exercise 14: Transform Object",
    description:
      "Similar to filtering, you can transform object values using Object.entries(), array map(), and Object.fromEntries(). The map() method allows you to modify the values while keeping the keys. This is a powerful pattern for converting or transforming data in objects.",
    example: `const prices = {
  item1: 10,
  item2: 20,
  item3: 15
};
const discounted = Object.fromEntries(
  Object.entries(prices).map(([name, price]) => [name, price * 0.9])
);
console.log(discounted);
// { item1: 9, item2: 18, item3: 13.5 }`,
    instruction:
      "Given a 'temps' object with city:celsius temperature pairs, create a new object 'tempsF' with temperatures converted to Fahrenheit using the formula: F = C * 9/5 + 32.",
    starterCode: `// Your code here
const temps = {
  NYC: 20,
  LA: 25,
  Chicago: 15
};
`,
    solution: `const temps = {
  NYC: 20,
  LA: 25,
  Chicago: 15
};
const tempsF = Object.fromEntries(
  Object.entries(temps).map(([city, celsius]) => [city, celsius * 9/5 + 32])
);`,
    watchVariables: ["temps", "tempsF"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_entries.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("map")) {
          return {
            success: false,
            message: "Make sure you're using the map() method to transform the values.",
          };
        }
        if (!code.includes("tempsF")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'tempsF'.",
          };
        }

        const tempsFMatch = output.match(/tempsF:\s*\{[\s\S]*?\}/);
        if (!tempsFMatch) {
          return {
            success: false,
            message: "Could not find the tempsF variable.",
          };
        }

        const tempsFValue = tempsFMatch[0];
        // NYC: 20°C = 68°F, LA: 25°C = 77°F, Chicago: 15°C = 59°F
        const hasNYC = tempsFValue.includes("NYC") && tempsFValue.includes("68");
        const hasLA = tempsFValue.includes("LA") && tempsFValue.includes("77");
        const hasChicago = tempsFValue.includes("Chicago") && tempsFValue.includes("59");

        if (hasNYC && hasLA && hasChicago) {
          return {
            success: true,
            message: "Perfect! You've mastered transforming object values with map()!",
          };
        }
        return {
          success: false,
          message: "Make sure tempsF has converted Fahrenheit temperatures. Use the formula: C * 9/5 + 32.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, newValue])).",
    solutionHint: "const tempsF = Object.fromEntries(Object.entries(temps).map(([city, celsius]) => [city, celsius * 9/5 + 32]));",
  },
];
