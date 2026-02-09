// Exercise definitions for object manipulation training
const exercises = [
  {
    id: 1,
    title: "Exercise 1: Add Property (Dot Notation)",
    description:
      "You can add new properties to an existing object using dot notation. Simply assign a value to a property name that doesn't exist yet.",
    example: `const person = { name: "John" };
person.age = 30;
console.log(person); // { name: "John", age: 30 }`,
    instruction:
      "Given the object below, add a new property 'color' with the value 'blue' using dot notation.",
    starterCode: `// Your code here
const shirt = {
  size: "M",
  price: 29.99
};
`,
    solution: `const shirt = {
  size: "M",
  price: 29.99
};
shirt.color = "blue";`,
    watchVariables: ["shirt"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("shirt.color")) {
          return {
            success: false,
            message:
              "Make sure you're using dot notation to add the 'color' property.",
          };
        }

        const shirtMatch = output.match(/shirt:\s*\{[\s\S]*?\}/);
        if (!shirtMatch) {
          return {
            success: false,
            message: "Could not find the shirt object.",
          };
        }

        const shirtValue = shirtMatch[0];
        const hasColor =
          shirtValue.includes("color") && shirtValue.includes("blue");
        const hasSize = shirtValue.includes("size");
        const hasPrice = shirtValue.includes("price");

        if (hasColor && hasSize && hasPrice) {
          return {
            success: true,
            message: "Perfect! You've added a property using dot notation!",
          };
        }
        return {
          success: false,
          message: "Make sure the shirt object has 'color' set to 'blue'.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use object.newProperty = value to add a new property.",
    solutionHint: "shirt.color = 'blue';",
  },
  {
    id: 2,
    title: "Exercise 2: Add Property (Bracket Notation)",
    description:
      "Bracket notation is useful for adding properties with special characters, spaces, or when using variables as property names.",
    example: `const config = {};
config["api-key"] = "abc123";
console.log(config); // { "api-key": "abc123" }`,
    instruction:
      "Given the object below, add a property 'user-id' with the value 12345 using bracket notation.",
    starterCode: `// Your code here
const session = {
  token: "xyz789",
  active: true
};
`,
    solution: `const session = {
  token: "xyz789",
  active: true
};
session["user-id"] = 12345;`,
    watchVariables: ["session"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors",
    },
    validate: function (code, output) {
      try {
        if (!code.includes('["user-id"]') && !code.includes("['user-id']")) {
          return {
            success: false,
            message:
              "Make sure you're using bracket notation with 'user-id' in quotes.",
          };
        }

        const sessionMatch = output.match(/session:\s*\{[\s\S]*?\}/);
        if (!sessionMatch) {
          return {
            success: false,
            message: "Could not find the session object.",
          };
        }

        const sessionValue = sessionMatch[0];
        const hasUserId =
          (sessionValue.includes("user-id") ||
            sessionValue.includes("user\\-id")) &&
          sessionValue.includes("12345");

        if (hasUserId) {
          return {
            success: true,
            message:
              "Excellent! You've added a property with a hyphenated name using bracket notation!",
          };
        }
        return {
          success: false,
          message: "Make sure the session object has 'user-id' set to 12345.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use object['property-name'] = value for properties with special characters.",
    solutionHint: "session['user-id'] = 12345;",
  },
  {
    id: 3,
    title: "Exercise 3: Update Existing Property",
    description:
      "To update an existing property, simply assign a new value to it using either dot or bracket notation. The old value will be replaced.",
    example: `const car = { brand: "Toyota", year: 2020 };
car.year = 2023;
console.log(car); // { brand: "Toyota", year: 2023 }`,
    instruction:
      "Given the object below, update the 'status' property from 'pending' to 'completed'.",
    starterCode: `// Your code here
const order = {
  id: 101,
  status: "pending",
  total: 99.99
};
`,
    solution: `const order = {
  id: 101,
  status: "pending",
  total: 99.99
};
order.status = "completed";`,
    watchVariables: ["order"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("completed")) {
          return {
            success: false,
            message: "Make sure you're updating the status to 'completed'.",
          };
        }

        const orderMatch = output.match(/order:\s*\{[\s\S]*?\}/);
        if (!orderMatch) {
          return {
            success: false,
            message: "Could not find the order object.",
          };
        }

        const orderValue = orderMatch[0];
        const hasCompleted =
          orderValue.includes("status") && orderValue.includes("completed");
        const noPending = !orderValue.includes("pending");

        if (hasCompleted && noPending) {
          return {
            success: true,
            message: "Great! You've successfully updated a property value!",
          };
        }
        return {
          success: false,
          message: "Make sure the status is 'completed', not 'pending'.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use object.property = newValue to update an existing property.",
    solutionHint: "order.status = 'completed';",
  },
  {
    id: 4,
    title: "Exercise 4: Dynamic Property Names",
    description:
      "You can use variables to dynamically add properties to objects. The variable's value becomes the property name.",
    example: `const obj = {};
const prop = "score";
obj[prop] = 100;
console.log(obj); // { score: 100 }`,
    instruction:
      "Given the object and variable below, use the 'fieldName' variable to add a property to 'data' with the value 'Alice'.",
    starterCode: `// Your code here
const data = { id: 1 };
const fieldName = "username";
`,
    solution: `const data = { id: 1 };
const fieldName = "username";
data[fieldName] = "Alice";`,
    watchVariables: ["data", "fieldName"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("[fieldName]")) {
          return {
            success: false,
            message:
              "Make sure you're using bracket notation with the fieldName variable (no quotes!).",
          };
        }

        const dataMatch = output.match(/data:\s*\{[\s\S]*?\}/);
        if (!dataMatch) {
          return {
            success: false,
            message: "Could not find the data object.",
          };
        }

        const dataValue = dataMatch[0];
        const hasUsername =
          dataValue.includes("username") && dataValue.includes("Alice");

        if (hasUsername) {
          return {
            success: true,
            message: "Perfect! You've mastered dynamic property names!",
          };
        }
        return {
          success: false,
          message:
            "Make sure the data object has a 'username' property set to 'Alice'.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use object[variableName] = value (without quotes around the variable name).",
    solutionHint: "data[fieldName] = 'Alice';",
  },
  {
    id: 5,
    title: "Exercise 5: Delete Operator",
    description:
      "The delete operator removes a property from an object entirely. The property and its value will no longer exist on the object.",
    example: `const user = { name: "Bob", temp: true, age: 25 };
delete user.temp;
console.log(user); // { name: "Bob", age: 25 }`,
    instruction:
      "Given the object below, delete the 'password' property using the delete operator.",
    starterCode: `// Your code here
const account = {
  username: "john_doe",
  email: "john@example.com",
  password: "secret123"
};
`,
    solution: `const account = {
  username: "john_doe",
  email: "john@example.com",
  password: "secret123"
};
delete account.password;`,
    watchVariables: ["account"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_delete.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("delete")) {
          return {
            success: false,
            message: "Make sure you're using the 'delete' operator.",
          };
        }

        const accountMatch = output.match(/account:\s*\{[\s\S]*?\}/);
        if (!accountMatch) {
          return {
            success: false,
            message: "Could not find the account object.",
          };
        }

        const accountValue = accountMatch[0];
        const noPassword = !accountValue.includes("password");
        const hasUsername = accountValue.includes("username");
        const hasEmail = accountValue.includes("email");

        if (noPassword && hasUsername && hasEmail) {
          return {
            success: true,
            message: "Excellent! You've successfully deleted a property!",
          };
        }
        return {
          success: false,
          message:
            "Make sure the password property is deleted but username and email remain.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use: delete object.propertyName",
    solutionHint: "delete account.password;",
  },
  {
    id: 6,
    title: "Exercise 6: Property Existence Check",
    description:
      "Before updating a property, you might want to check if it exists. You can use 'in' operator or check if the value is undefined.",
    example: `const obj = { name: "Alice" };
if ("age" in obj) {
  obj.age = obj.age + 1;
} else {
  obj.age = 1;
}
console.log(obj); // { name: "Alice", age: 1 }`,
    instruction:
      "Given the object below, check if 'count' property exists. If it does, increase it by 1. If not, set it to 1.",
    starterCode: `// Your code here
const stats = {
  views: 100
};
`,
    solution: `const stats = {
  views: 100
};
if ("count" in stats) {
  stats.count = stats.count + 1;
} else {
  stats.count = 1;
}`,
    watchVariables: ["stats"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_operators.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in",
    },
    validate: function (code, output) {
      try {
        if (
          !code.includes("if") ||
          (!code.includes("in stats") && !code.includes("stats.count"))
        ) {
          return {
            success: false,
            message:
              "Make sure you're checking if the 'count' property exists before adding/updating it.",
          };
        }

        const statsMatch = output.match(/stats:\s*\{[\s\S]*?\}/);
        if (!statsMatch) {
          return {
            success: false,
            message: "Could not find the stats object.",
          };
        }

        const statsValue = statsMatch[0];
        const hasCount =
          statsValue.includes("count") &&
          (statsValue.includes("1") || statsValue.includes(": 1"));

        if (hasCount) {
          return {
            success: true,
            message:
              "Great! You've learned to check property existence before updating!",
          };
        }
        return {
          success: false,
          message:
            "Make sure stats has a 'count' property set to 1 (since it didn't exist before).",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use: if ('property' in object) { ... } else { ... }",
    solutionHint:
      "if ('count' in stats) { stats.count++; } else { stats.count = 1; }",
  },
  {
    id: 7,
    title: "Exercise 7: Multiple Operations",
    description:
      "Real-world scenarios often require adding, updating, and deleting properties in sequence. Practice combining these operations.",
    example: `const product = { name: "Widget", temp: 0 };
product.price = 19.99;  // Add
product.name = "Super Widget";  // Update
delete product.temp;  // Delete
console.log(product);`,
    instruction:
      "Given the object below: (1) Add 'inStock' property with value true, (2) Update 'price' to 24.99, (3) Delete the 'draft' property.",
    starterCode: `// Your code here
const item = {
  name: "Gadget",
  price: 19.99,
  draft: true
};
`,
    solution: `const item = {
  name: "Gadget",
  price: 19.99,
  draft: true
};
item.inStock = true;
item.price = 24.99;
delete item.draft;`,
    watchVariables: ["item"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    },
    validate: function (code, output) {
      try {
        const itemMatch = output.match(/item:\s*\{[\s\S]*?\}/);
        if (!itemMatch) {
          return {
            success: false,
            message: "Could not find the item object.",
          };
        }

        const itemValue = itemMatch[0];
        const hasInStock =
          itemValue.includes("inStock") && itemValue.includes("true");
        const hasNewPrice =
          itemValue.includes("price") && itemValue.includes("24.99");
        const noDraft = !itemValue.includes("draft");

        if (hasInStock && hasNewPrice && noDraft) {
          return {
            success: true,
            message:
              "Perfect! You've mastered combining add, update, and delete operations!",
          };
        }

        if (!hasInStock) {
          return {
            success: false,
            message: "Make sure you added 'inStock' property with value true.",
          };
        }
        if (!hasNewPrice) {
          return {
            success: false,
            message: "Make sure you updated 'price' to 24.99.",
          };
        }
        if (!noDraft) {
          return {
            success: false,
            message: "Make sure you deleted the 'draft' property.",
          };
        }

        return {
          success: false,
          message: "Make sure you completed all three operations correctly.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Do all three operations in sequence: add inStock, update price, delete draft.",
    solutionHint: "item.inStock = true; item.price = 24.99; delete item.draft;",
  },
  {
    id: 8,
    title: "Exercise 8: Property Shorthand",
    description:
      "ES6 introduced property shorthand: when creating an object from variables, if the property name matches the variable name, you can omit the value.",
    example: `const name = "Alice";
const age = 25;
// Old way: { name: name, age: age }
const person = { name, age };
console.log(person); // { name: "Alice", age: 25 }`,
    instruction:
      "Given the variables below, create an object called 'user' using property shorthand syntax for all three variables.",
    starterCode: `// Your code here
const username = "bob123";
const email = "bob@example.com";
const active = true;
`,
    solution: `const username = "bob123";
const email = "bob@example.com";
const active = true;
const user = { username, email, active };`,
    watchVariables: ["username", "email", "active", "user"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_es5.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("user")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'user'.",
          };
        }

        // Check for shorthand usage (should not have colon after property names)
        if (
          code.includes("username:") ||
          code.includes("email:") ||
          code.includes("active:")
        ) {
          return {
            success: false,
            message:
              "Use ES6 shorthand syntax: { username, email, active } instead of { username: username, ... }",
          };
        }

        const userMatch = output.match(/user:\s*\{[\s\S]*?\}/);
        if (!userMatch) {
          return {
            success: false,
            message: "Could not find the user object.",
          };
        }

        const userValue = userMatch[0];
        const hasUsername =
          userValue.includes("username") && userValue.includes("bob123");
        const hasEmail =
          userValue.includes("email") && userValue.includes("bob@example.com");
        const hasActive =
          userValue.includes("active") && userValue.includes("true");

        if (hasUsername && hasEmail && hasActive) {
          return {
            success: true,
            message:
              "Excellent! You've mastered ES6 property shorthand syntax!",
          };
        }
        return {
          success: false,
          message:
            "Make sure the user object has all three properties from the variables.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "When variable name matches property name, use: { variableName } instead of { variableName: variableName }",
    solutionHint: "const user = { username, email, active };",
  },
  {
    id: 9,
    title: "Exercise 9: Computed Property Names",
    description:
      "ES6 allows you to use expressions (in square brackets) as property names when creating objects. This is useful for dynamic property creation.",
    example: `const prefix = "user";
const obj = {
  [prefix + "Name"]: "Alice",
  [prefix + "Age"]: 25
};
console.log(obj); // { userName: "Alice", userAge: 25 }`,
    instruction:
      "Given the variables below, create an object called 'settings' with computed property names: use 'key + '1'' as one property (value: 'value1') and 'key + '2'' as another (value: 'value2').",
    starterCode: `// Your code here
const key = "setting";
`,
    solution: `const key = "setting";
const settings = {
  [key + "1"]: "value1",
  [key + "2"]: "value2"
};`,
    watchVariables: ["key", "settings"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_es5.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("settings")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'settings'.",
          };
        }

        if (!code.includes("[key") || !code.includes("]")) {
          return {
            success: false,
            message:
              "Make sure you're using computed property names with square brackets: [key + ...]",
          };
        }

        const settingsMatch = output.match(/settings:\s*\{[\s\S]*?\}/);
        if (!settingsMatch) {
          return {
            success: false,
            message: "Could not find the settings object.",
          };
        }

        const settingsValue = settingsMatch[0];
        const hasSetting1 =
          settingsValue.includes("setting1") &&
          settingsValue.includes("value1");
        const hasSetting2 =
          settingsValue.includes("setting2") &&
          settingsValue.includes("value2");

        if (hasSetting1 && hasSetting2) {
          return {
            success: true,
            message: "Perfect! You've mastered computed property names!",
          };
        }
        return {
          success: false,
          message:
            "Make sure settings has 'setting1' and 'setting2' as property names.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use square brackets with expressions: { [expression]: value }",
    solutionHint:
      "const settings = { [key + '1']: 'value1', [key + '2']: 'value2' };",
  },
  {
    id: 10,
    title: "Exercise 10: Conditional Updates",
    description:
      "Often you need to update properties based on conditions. This combines conditional logic with object manipulation.",
    example: `const product = { price: 100, onSale: true };
if (product.onSale) {
  product.price = product.price * 0.8;
  product.discount = 20;
}
console.log(product);`,
    instruction:
      "Given the object below: If 'premium' is true, add a 'maxStorage' property with value 100. If false, add 'maxStorage' with value 10.",
    starterCode: `// Your code here
const subscription = {
  username: "alice",
  premium: true
};
`,
    solution: `const subscription = {
  username: "alice",
  premium: true
};
if (subscription.premium) {
  subscription.maxStorage = 100;
} else {
  subscription.maxStorage = 10;
}`,
    watchVariables: ["subscription"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_if_else.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("if") && !code.includes("?")) {
          return {
            success: false,
            message:
              "Make sure you're using a conditional (if statement or ternary) to check the premium property.",
          };
        }

        const subscriptionMatch = output.match(/subscription:\s*\{[\s\S]*?\}/);
        if (!subscriptionMatch) {
          return {
            success: false,
            message: "Could not find the subscription object.",
          };
        }

        const subscriptionValue = subscriptionMatch[0];
        const hasMaxStorage = subscriptionValue.includes("maxStorage");
        const hasCorrectValue = subscriptionValue.includes("100"); // premium is true, so should be 100

        if (hasMaxStorage && hasCorrectValue) {
          return {
            success: true,
            message: "Excellent! You've mastered conditional property updates!",
          };
        }

        if (!hasMaxStorage) {
          return {
            success: false,
            message: "Make sure you added the 'maxStorage' property.",
          };
        }

        return {
          success: false,
          message:
            "Make sure maxStorage is 100 when premium is true, or 10 when premium is false.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use an if-else statement to check subscription.premium and set maxStorage accordingly.",
    solutionHint:
      "if (subscription.premium) { subscription.maxStorage = 100; } else { subscription.maxStorage = 10; }",
  },
];
