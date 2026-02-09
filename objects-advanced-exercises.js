// Exercise definitions for objects advanced training
const exercises = [
  {
    id: 1,
    title: "Exercise 1: Object References",
    description:
      "In JavaScript, objects are stored by reference, not by value. When you assign an object to another variable, both variables point to the same object in memory. Modifying one affects the other.",
    example: `const original = { name: "Alice" };
const reference = original;
reference.name = "Bob";
console.log(original.name); // "Bob" - both point to same object!`,
    instruction:
      "Create an object called 'original' with name: 'Alice'. Create a variable 'reference' and assign 'original' to it. Change reference.name to 'Bob'. Store original.name in a variable called 'result'.",
    starterCode: `// Your code here
`,
    solution: `const original = { name: "Alice" };
const reference = original;
reference.name = "Bob";
const result = original.name;`,
    watchVariables: ["original", "reference", "result"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("original")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'original'.",
          };
        }

        if (!code.includes("reference")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'reference'.",
          };
        }

        if (!code.includes("result")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'result'.",
          };
        }

        const resultMatch = output.match(/result:\s*(.+?)(\n|$)/);
        if (!resultMatch) {
          return {
            success: false,
            message: "Could not find the result variable.",
          };
        }

        const resultValue = resultMatch[1].trim();
        if (resultValue.includes("Bob")) {
          return {
            success: true,
            message:
              "Perfect! You've demonstrated that objects are stored by reference!",
          };
        }
        return {
          success: false,
          message:
            "The result should be 'Bob', showing that both variables reference the same object.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Assign original to reference, then modify reference.name. Check original.name to see they share the same reference.",
    solutionHint:
      "const original = { name: 'Alice' }; const reference = original; reference.name = 'Bob'; const result = original.name;",
  },
  {
    id: 2,
    title: "Exercise 2: Mutation via Reference",
    description:
      "When you pass an object to a function, the function receives a reference to the original object. Any modifications made inside the function will affect the original object.",
    example: `function addAge(obj) {
  obj.age = 25;
}
const person = { name: "Eve" };
addAge(person);
console.log(person.age); // 25`,
    instruction:
      "Create a function called 'addAge' that takes an object parameter and adds a property 'age' set to 25. Create an object 'person' with name: 'Eve'. Call addAge(person). Store person.age in a variable called 'personAge'.",
    starterCode: `// Your code here
`,
    solution: `function addAge(obj) {
  obj.age = 25;
}
const person = { name: "Eve" };
addAge(person);
const personAge = person.age;`,
    watchVariables: ["person", "personAge"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_function_parameters.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("function addAge")) {
          return {
            success: false,
            message: "Make sure you created a function called 'addAge'.",
          };
        }

        if (!code.includes("person")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'person'.",
          };
        }

        if (!code.includes("addAge(person)")) {
          return {
            success: false,
            message: "Make sure you called addAge with person as the argument.",
          };
        }

        const personAgeMatch = output.match(/personAge:\s*(\d+)/);
        if (!personAgeMatch) {
          return {
            success: false,
            message: "Could not find the personAge variable.",
          };
        }

        const personAgeValue = personAgeMatch[1];
        if (personAgeValue === "25") {
          return {
            success: true,
            message:
              "Excellent! You've shown how functions can mutate objects through references!",
          };
        }
        return {
          success: false,
          message: "The personAge should be 25 after calling addAge.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Create a function that modifies the object parameter. Pass your object to the function and observe the mutation.",
    solutionHint:
      "function addAge(obj) { obj.age = 25; } const person = { name: 'Eve' }; addAge(person); const personAge = person.age;",
  },
  {
    id: 3,
    title: "Exercise 3: Reference Comparison",
    description:
      "The === operator compares object references, not their contents. Two objects with identical properties are not equal unless they reference the same object in memory.",
    example: `const obj1 = { x: 1 };
const obj2 = { x: 1 };
console.log(obj1 === obj2); // false - different references
console.log(obj1 === obj1); // true - same reference`,
    instruction:
      "Create two objects 'obj1' and 'obj2' with the same property (value: 100). Store obj1 === obj2 in 'areEqual'. Store obj1 === obj1 in 'isSame'.",
    starterCode: `// Your code here
`,
    solution: `const obj1 = { value: 100 };
const obj2 = { value: 100 };
const areEqual = obj1 === obj2;
const isSame = obj1 === obj1;`,
    watchVariables: ["areEqual", "isSame"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("obj1") || !code.includes("obj2")) {
          return {
            success: false,
            message: "Make sure you created both obj1 and obj2.",
          };
        }

        if (!code.includes("areEqual")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'areEqual'.",
          };
        }

        if (!code.includes("isSame")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'isSame'.",
          };
        }

        const areEqualMatch = output.match(/areEqual:\s*(true|false)/);
        const isSameMatch = output.match(/isSame:\s*(true|false)/);

        if (!areEqualMatch || !isSameMatch) {
          return {
            success: false,
            message: "Could not find areEqual and isSame variables.",
          };
        }

        const areEqualValue = areEqualMatch[1];
        const isSameValue = isSameMatch[1];

        if (areEqualValue === "false" && isSameValue === "true") {
          return {
            success: true,
            message:
              "Perfect! You've learned how === compares references, not content!",
          };
        }
        return {
          success: false,
          message:
            "areEqual should be false (different objects) and isSame should be true (same reference).",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Two separate objects with identical content are not === because they have different references in memory.",
    solutionHint:
      "const obj1 = { value: 100 }; const obj2 = { value: 100 }; const areEqual = obj1 === obj2; const isSame = obj1 === obj1;",
  },
  {
    id: 4,
    title: "Exercise 4: Shallow Copy (Spread)",
    description:
      "The spread operator {...obj} creates a shallow copy of an object. Top-level properties are copied, so modifying the copy doesn't affect the original's top-level properties.",
    example: `const original = { name: "Alice", age: 30 };
const copy = { ...original };
copy.name = "Bob";
console.log(original.name); // "Alice" - unchanged!`,
    instruction:
      "Create an object 'original' with name: 'Alice' and age: 25. Create a 'copy' using spread operator. Change copy.name to 'Charlie'. Store whether original.name is still 'Alice' in 'originalUnchanged'.",
    starterCode: `// Your code here
`,
    solution: `const original = { name: "Alice", age: 25 };
const copy = { ...original };
copy.name = "Charlie";
const originalUnchanged = original.name === "Alice";`,
    watchVariables: ["original", "copy", "originalUnchanged"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_spread.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("...")) {
          return {
            success: false,
            message:
              "Make sure you're using the spread operator (...) to copy the object.",
          };
        }

        if (!code.includes("original")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'original'.",
          };
        }

        if (!code.includes("copy")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'copy'.",
          };
        }

        if (!code.includes("originalUnchanged")) {
          return {
            success: false,
            message:
              "Make sure you created a variable called 'originalUnchanged'.",
          };
        }

        const originalUnchangedMatch = output.match(
          /originalUnchanged:\s*(true|false)/,
        );
        if (!originalUnchangedMatch) {
          return {
            success: false,
            message: "Could not find the originalUnchanged variable.",
          };
        }

        const originalUnchangedValue = originalUnchangedMatch[1];
        if (originalUnchangedValue === "true") {
          return {
            success: true,
            message:
              "Great! You've learned how spread creates a shallow copy of top-level properties!",
          };
        }
        return {
          success: false,
          message:
            "originalUnchanged should be true, showing the spread operator created a copy.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use {...original} to create a copy. Modifying the copy won't affect the original's top-level properties.",
    solutionHint:
      "const original = { name: 'Alice', age: 25 }; const copy = { ...original }; copy.name = 'Charlie'; const originalUnchanged = original.name === 'Alice';",
  },
  {
    id: 5,
    title: "Exercise 5: Shallow Copy Limitation",
    description:
      "Spread operator creates a shallow copy. Nested objects are NOT copied - they remain shared references. Modifying a nested object in the copy will also modify the original.",
    example: `const original = { user: "Alice", address: { city: "NYC" } };
const copy = { ...original };
copy.address.city = "LA";
console.log(original.address.city); // "LA" - nested object is shared!`,
    instruction:
      "Create an object with a nested 'address' object containing city: 'NYC'. Create a spread copy. Change copy.address.city to 'Boston'. Store original.address.city in 'originalCity'.",
    starterCode: `// Your code here
`,
    solution: `const original = { name: "John", address: { city: "NYC" } };
const copy = { ...original };
copy.address.city = "Boston";
const originalCity = original.address.city;`,
    watchVariables: ["originalCity"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_spread.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("...")) {
          return {
            success: false,
            message:
              "Make sure you're using the spread operator (...) to copy the object.",
          };
        }

        if (!code.includes("address")) {
          return {
            success: false,
            message:
              "Make sure you created an object with a nested 'address' property.",
          };
        }

        if (!code.includes("originalCity")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'originalCity'.",
          };
        }

        const originalCityMatch = output.match(/originalCity:\s*(.+?)(\n|$)/);
        if (!originalCityMatch) {
          return {
            success: false,
            message: "Could not find the originalCity variable.",
          };
        }

        const originalCityValue = originalCityMatch[1].trim();
        if (originalCityValue.includes("Boston")) {
          return {
            success: true,
            message:
              "Excellent! You've discovered the limitation of shallow copies with nested objects!",
          };
        }
        return {
          success: false,
          message:
            "originalCity should be 'Boston', showing that nested objects remain shared even after spread.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Spread only copies the top level. Nested objects are still references, so modifying copy.address affects original.address.",
    solutionHint:
      "const original = { name: 'John', address: { city: 'NYC' } }; const copy = { ...original }; copy.address.city = 'Boston'; const originalCity = original.address.city;",
  },
  {
    id: 6,
    title: "Exercise 6: Deep Clone (structuredClone)",
    description:
      "structuredClone() creates a true deep copy of an object, including all nested objects. Changes to the clone never affect the original, making it perfect for complex objects.",
    example: `const original = { user: "Alice", data: { score: 100 } };
const clone = structuredClone(original);
clone.data.score = 200;
console.log(original.data.score); // 100 - fully independent!`,
    instruction:
      "Create an object with nested data (e.g., scores: [90, 85]). Use structuredClone() to clone it. Modify the clone's nested data. Store the original's nested value in 'originalValue' to prove it's unchanged.",
    starterCode: `// Your code here
`,
    solution: `const original = { name: "Alice", scores: [90, 85] };
const clone = structuredClone(original);
clone.scores.push(100);
const originalValue = original.scores.length;`,
    watchVariables: ["originalValue"],
    links: {
      w3schools:
        "https://www.w3schools.com/js/js_object_properties.asp#:~:text=deep%20copy",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/API/structuredClone",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("structuredClone")) {
          return {
            success: false,
            message:
              "Make sure you're using structuredClone() to create a deep copy.",
          };
        }

        if (!code.includes("originalValue")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'originalValue'.",
          };
        }

        const originalValueMatch = output.match(/originalValue:\s*(\d+)/);
        if (!originalValueMatch) {
          return {
            success: false,
            message: "Could not find the originalValue variable.",
          };
        }

        const originalValueNum = originalValueMatch[1];
        if (originalValueNum === "2") {
          return {
            success: true,
            message:
              "Perfect! structuredClone created a true deep copy that's completely independent!",
          };
        }
        return {
          success: false,
          message:
            "originalValue should be 2, proving that the original array wasn't modified by the clone.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use structuredClone(obj) to create a deep copy. Even nested objects/arrays will be fully independent.",
    solutionHint:
      "const original = { name: 'Alice', scores: [90, 85] }; const clone = structuredClone(original); clone.scores.push(100); const originalValue = original.scores.length;",
  },
  {
    id: 7,
    title: "Exercise 7: JSON Clone Method",
    description:
      "JSON.parse(JSON.stringify(obj)) is an alternative deep cloning technique. It works for most objects but has limitations (can't clone functions, Date objects, undefined values, etc.).",
    example: `const original = { name: "Alice", data: { count: 5 } };
const clone = JSON.parse(JSON.stringify(original));
clone.data.count = 10;
console.log(original.data.count); // 5 - deep cloned!`,
    instruction:
      "Create an object with nested properties. Clone it using JSON.parse(JSON.stringify(obj)). Modify the clone's nested data. Verify the original is unchanged.",
    starterCode: `// Your code here
`,
    solution: `const original = { name: "Bob", settings: { theme: "dark" } };
const clone = JSON.parse(JSON.stringify(original));
clone.settings.theme = "light";`,
    watchVariables: ["original", "clone"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_json_parse.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("JSON.parse")) {
          return {
            success: false,
            message: "Make sure you're using JSON.parse() in your code.",
          };
        }

        if (!code.includes("JSON.stringify")) {
          return {
            success: false,
            message: "Make sure you're using JSON.stringify() in your code.",
          };
        }

        if (!code.includes("original")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'original'.",
          };
        }

        if (!code.includes("clone")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'clone'.",
          };
        }

        const originalMatch = output.match(/original:\s*\{[\s\S]*?\}/);
        const cloneMatch = output.match(/clone:\s*\{[\s\S]*?\}/);

        if (!originalMatch || !cloneMatch) {
          return {
            success: false,
            message: "Could not find original and clone objects.",
          };
        }

        return {
          success: true,
          message:
            "Great! You've learned the JSON method for deep cloning objects!",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Combine JSON.stringify() to convert to string, then JSON.parse() to create a new object from that string.",
    solutionHint:
      "const original = { name: 'Bob', settings: { theme: 'dark' } }; const clone = JSON.parse(JSON.stringify(original)); clone.settings.theme = 'light';",
  },
  {
    id: 8,
    title: "Exercise 8: Object.freeze()",
    description:
      "Object.freeze() makes an object immutable. You cannot add, delete, or modify any properties. Attempts to change the object will silently fail (or throw errors in strict mode).",
    example: `const config = { apiKey: "abc123" };
Object.freeze(config);
config.apiKey = "changed"; // Fails silently
console.log(config.apiKey); // "abc123" - unchanged!`,
    instruction:
      "Create an object 'settings' with a property. Freeze it using Object.freeze(). Try to modify a property (it won't work). Store Object.isFrozen(settings) in 'isFrozen'.",
    starterCode: `// Your code here
`,
    solution: `const settings = { theme: "dark" };
Object.freeze(settings);
settings.theme = "light";
const isFrozen = Object.isFrozen(settings);`,
    watchVariables: ["isFrozen"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_object_freeze.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.freeze")) {
          return {
            success: false,
            message:
              "Make sure you're using Object.freeze() to freeze the object.",
          };
        }

        if (!code.includes("isFrozen")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'isFrozen'.",
          };
        }

        const isFrozenMatch = output.match(/isFrozen:\s*(true|false)/);
        if (!isFrozenMatch) {
          return {
            success: false,
            message: "Could not find the isFrozen variable.",
          };
        }

        const isFrozenValue = isFrozenMatch[1];
        if (isFrozenValue === "true") {
          return {
            success: true,
            message:
              "Perfect! You've learned how to make objects completely immutable with Object.freeze()!",
          };
        }
        return {
          success: false,
          message:
            "isFrozen should be true. Make sure you called Object.freeze() on your object.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.freeze(obj) to prevent any modifications. Check with Object.isFrozen(obj).",
    solutionHint:
      "const settings = { theme: 'dark' }; Object.freeze(settings); settings.theme = 'light'; const isFrozen = Object.isFrozen(settings);",
  },
  {
    id: 9,
    title: "Exercise 9: Object.seal()",
    description:
      "Object.seal() prevents adding or removing properties, but allows modifying existing properties. It's less restrictive than freeze() but still provides important protection.",
    example: `const user = { name: "Alice", age: 30 };
Object.seal(user);
user.age = 31; // Works!
user.email = "alice@example.com"; // Fails silently
console.log(user); // { name: "Alice", age: 31 }`,
    instruction:
      "Create an object with properties. Seal it with Object.seal(). Update an existing property (works). Try to add a new property (fails). Store Object.isSealed() in 'isSealed'.",
    starterCode: `// Your code here
`,
    solution: `const product = { name: "Laptop", price: 1000 };
Object.seal(product);
product.price = 1200;
product.color = "silver";
const isSealed = Object.isSealed(product);`,
    watchVariables: ["isSealed"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_object_seal.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.seal")) {
          return {
            success: false,
            message:
              "Make sure you're using Object.seal() to seal the object.",
          };
        }

        if (!code.includes("isSealed")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'isSealed'.",
          };
        }

        const isSealedMatch = output.match(/isSealed:\s*(true|false)/);
        if (!isSealedMatch) {
          return {
            success: false,
            message: "Could not find the isSealed variable.",
          };
        }

        const isSealedValue = isSealedMatch[1];
        if (isSealedValue === "true") {
          return {
            success: true,
            message:
              "Excellent! You've learned how Object.seal() prevents adding/deleting properties while allowing updates!",
          };
        }
        return {
          success: false,
          message:
            "isSealed should be true. Make sure you called Object.seal() on your object.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.seal(obj) to lock the property structure. You can still modify existing values.",
    solutionHint:
      "const product = { name: 'Laptop', price: 1000 }; Object.seal(product); product.price = 1200; product.color = 'silver'; const isSealed = Object.isSealed(product);",
  },
  {
    id: 10,
    title: "Exercise 10: Prototype Chain",
    description:
      "JavaScript uses prototypal inheritance. Object.create() creates an object with a specified prototype. The new object inherits properties and methods from its prototype.",
    example: `const animal = { speak() { return "sound"; } };
const dog = Object.create(animal);
dog.bark = function() { return "woof"; };
console.log(dog.speak()); // "sound" - from prototype!`,
    instruction:
      "Create an 'animal' object with a speak() method returning 'Some sound'. Use Object.create(animal) to create a 'dog'. Add a bark() method to dog. Store dog.speak() result in 'speakResult'.",
    starterCode: `// Your code here
`,
    solution: `const animal = {
  speak() {
    return "Some sound";
  }
};
const dog = Object.create(animal);
dog.bark = function() {
  return "Woof";
};
const speakResult = dog.speak();`,
    watchVariables: ["dog", "speakResult"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_prototypes.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("Object.create")) {
          return {
            success: false,
            message:
              "Make sure you're using Object.create() to create the dog from the animal prototype.",
          };
        }

        if (!code.includes("animal")) {
          return {
            success: false,
            message:
              "Make sure you created a prototype object called 'animal'.",
          };
        }

        if (!code.includes("dog")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'dog'.",
          };
        }

        if (!code.includes("speakResult")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'speakResult'.",
          };
        }

        const speakResultMatch = output.match(/speakResult:\s*(.+?)(\n|$)/);
        if (!speakResultMatch) {
          return {
            success: false,
            message: "Could not find the speakResult variable.",
          };
        }

        const speakResultValue = speakResultMatch[1].trim();
        if (speakResultValue.includes("Some sound")) {
          return {
            success: true,
            message:
              "Perfect! You've mastered prototypal inheritance with Object.create()!",
          };
        }
        return {
          success: false,
          message:
            "speakResult should contain 'Some sound', proving the prototype chain works.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Create a prototype object with methods, then use Object.create(prototype) to inherit those methods.",
    solutionHint:
      "const animal = { speak() { return 'Some sound'; } }; const dog = Object.create(animal); dog.bark = function() { return 'Woof'; }; const speakResult = dog.speak();",
  },
  {
    id: 11,
    title: "Exercise 11: Adding to Prototype",
    description:
      "Constructor functions have a .prototype property. Methods added to the prototype are shared by all instances, which is memory-efficient and follows JavaScript's prototypal pattern.",
    example: `function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.describe = function() {
  return this.type + " vehicle";
};
const car = new Vehicle("Car");
console.log(car.describe()); // "Car vehicle"`,
    instruction:
      "Create a 'Vehicle' constructor function taking a 'type' parameter. Add a 'describe()' method to Vehicle.prototype that returns the type + ' vehicle'. Create an instance, call describe(), and store the result in 'result'.",
    starterCode: `// Your code here
`,
    solution: `function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.describe = function() {
  return this.type + " vehicle";
};
const car = new Vehicle("Car");
const result = car.describe();`,
    watchVariables: ["result"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_prototypes.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("function Vehicle")) {
          return {
            success: false,
            message: "Make sure you created a constructor function 'Vehicle'.",
          };
        }

        if (!code.includes(".prototype.")) {
          return {
            success: false,
            message:
              "Make sure you're adding the method to Vehicle.prototype.",
          };
        }

        if (!code.includes("result")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'result'.",
          };
        }

        const resultMatch = output.match(/result:\s*(.+?)(\n|$)/);
        if (!resultMatch) {
          return {
            success: false,
            message: "Could not find the result variable.",
          };
        }

        const resultValue = resultMatch[1].trim();
        if (resultValue.includes("vehicle")) {
          return {
            success: true,
            message:
              "Excellent! You've learned how to add methods to constructor prototypes!",
          };
        }
        return {
          success: false,
          message:
            "result should contain a description like 'Car vehicle' from the prototype method.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Add methods to Constructor.prototype. All instances will share the same method definition.",
    solutionHint:
      "function Vehicle(type) { this.type = type; } Vehicle.prototype.describe = function() { return this.type + ' vehicle'; }; const car = new Vehicle('Car'); const result = car.describe();",
  },
  {
    id: 12,
    title: "Exercise 12: Factory Functions",
    description:
      "Factory functions are regular functions that return new objects. They're an alternative to constructors and classes, offering flexibility without using the 'new' keyword.",
    example: `function createUser(name, role) {
  return {
    name: name,
    role: role,
    greet() {
      return "Hello, I'm " + this.name;
    }
  };
}
const user = createUser("Alice", "admin");
console.log(user.greet()); // "Hello, I'm Alice"`,
    instruction:
      "Create a factory function 'createUser(name, role)' that returns an object with name, role, and a greet() method. The greet method should return 'Hello, I am [name]'. Create two users and store their greet results in variables.",
    starterCode: `// Your code here
`,
    solution: `function createUser(name, role) {
  return {
    name: name,
    role: role,
    greet() {
      return "Hello, I am " + this.name;
    }
  };
}
const user1 = createUser("Alice", "admin");
const user2 = createUser("Bob", "user");`,
    watchVariables: ["user1", "user2"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_constructors.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_object_initializers",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("function createUser")) {
          return {
            success: false,
            message:
              "Make sure you created a factory function called 'createUser'.",
          };
        }

        if (!code.includes("user1") || !code.includes("user2")) {
          return {
            success: false,
            message: "Make sure you created both user1 and user2.",
          };
        }

        if (!code.includes("greet")) {
          return {
            success: false,
            message: "Make sure your factory function creates a greet method.",
          };
        }

        const user1Match = output.match(/user1:\s*\{[\s\S]*?\}/);
        const user2Match = output.match(/user2:\s*\{[\s\S]*?\}/);

        if (!user1Match || !user2Match) {
          return {
            success: false,
            message: "Could not find user1 and user2 objects.",
          };
        }

        return {
          success: true,
          message:
            "Perfect! You've mastered factory functions as an alternative to constructors!",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "A factory function is just a regular function that returns a new object with properties and methods.",
    solutionHint:
      "function createUser(name, role) { return { name: name, role: role, greet() { return 'Hello, I am ' + this.name; } }; } const user1 = createUser('Alice', 'admin'); const user2 = createUser('Bob', 'user');",
  },
];
