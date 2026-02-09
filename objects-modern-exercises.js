// Exercise definitions for objects modern features training
const exercises = [
  {
    id: 1,
    title: "Exercise 1: Basic Destructuring",
    description:
      "Destructuring allows you to extract properties from objects into individual variables in a single statement. Use const { propertyName } = object to extract properties. This makes your code cleaner and more readable.",
    example: `const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};
const { brand, model } = car;
console.log(brand, model); // "Toyota" "Camry"`,
    instruction:
      "Given a person object with name, age, and city properties, use destructuring to extract name and age into separate variables.",
    starterCode: `// Your code here
const person = {
  name: "Alice",
  age: 30,
  city: "Boston"
};
`,
    solution: `const person = {
  name: "Alice",
  age: 30,
  city: "Boston"
};
const { name, age } = person;`,
    watchVariables: ["person", "name", "age"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_destructuring.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("{") || !code.includes("}")) {
          return {
            success: false,
            message:
              "Make sure you're using destructuring syntax with curly braces { }.",
          };
        }
        if (!code.includes("name") || !code.includes("age")) {
          return {
            success: false,
            message: "Make sure you're destructuring both name and age.",
          };
        }

        const nameMatch = output.match(/name:\s*(.+?)(\n|$)/);
        const ageMatch = output.match(/age:\s*(\d+)/);

        if (!nameMatch || !ageMatch) {
          return {
            success: false,
            message:
              "Could not find the name and age variables. Make sure you used destructuring.",
          };
        }

        const nameValue = nameMatch[1].trim();
        const ageValue = ageMatch[1];

        if (nameValue.includes("Alice") && ageValue === "30") {
          return {
            success: true,
            message: "Perfect! You've mastered basic destructuring!",
          };
        }
        return {
          success: false,
          message:
            "Make sure name is 'Alice' and age is 30. Check your destructuring syntax.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use destructuring: const { name, age } = person;",
    solutionHint: "const { name, age } = person;",
  },
  {
    id: 2,
    title: "Exercise 2: Destructuring with Defaults",
    description:
      "You can provide default values when destructuring in case a property doesn't exist. Use the syntax const { prop = defaultValue } = object. If the property is undefined, the default value will be used instead.",
    example: `const settings = {
  theme: "dark"
};
const { theme, fontSize = 16 } = settings;
console.log(theme, fontSize); // "dark" 16`,
    instruction:
      "Given a config object with only a theme property, destructure theme and fontSize (with a default value of 16).",
    starterCode: `// Your code here
const config = {
  theme: "light"
};
`,
    solution: `const config = {
  theme: "light"
};
const { theme, fontSize = 16 } = config;`,
    watchVariables: ["config", "theme", "fontSize"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_destructuring.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_values",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("=")) {
          return {
            success: false,
            message:
              "Make sure you're using default values with the = syntax.",
          };
        }

        const themeMatch = output.match(/theme:\s*(.+?)(\n|$)/);
        const fontSizeMatch = output.match(/fontSize:\s*(\d+)/);

        if (!themeMatch || !fontSizeMatch) {
          return {
            success: false,
            message: "Could not find theme and fontSize variables.",
          };
        }

        const themeValue = themeMatch[1].trim();
        const fontSizeValue = fontSizeMatch[1];

        if (themeValue.includes("light") && fontSizeValue === "16") {
          return {
            success: true,
            message: "Excellent! You've learned destructuring with defaults!",
          };
        }
        return {
          success: false,
          message:
            "Make sure theme is 'light' and fontSize defaults to 16. Use const { theme, fontSize = 16 } = config;",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use destructuring with defaults: const { theme, fontSize = 16 } = config;",
    solutionHint: "const { theme, fontSize = 16 } = config;",
  },
  {
    id: 3,
    title: "Exercise 3: Destructuring Renaming",
    description:
      "Sometimes you need to rename properties when destructuring to avoid conflicts or improve clarity. Use the syntax const { originalName: newName } = object to rename a property during destructuring.",
    example: `const item = {
  name: "Laptop",
  price: 1200
};
const { name: itemName, price: cost } = item;
console.log(itemName, cost); // "Laptop" 1200`,
    instruction:
      "Given a product object, destructure name as productName and price as cost.",
    starterCode: `// Your code here
const product = {
  name: "Headphones",
  price: 150
};
`,
    solution: `const product = {
  name: "Headphones",
  price: 150
};
const { name: productName, price: cost } = product;`,
    watchVariables: ["product", "productName", "cost"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_destructuring.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#assigning_to_new_variable_names",
    },
    validate: function (code, output) {
      try {
        if (!code.includes(":")) {
          return {
            success: false,
            message:
              "Make sure you're using the colon : syntax to rename properties.",
          };
        }
        if (!code.includes("productName") || !code.includes("cost")) {
          return {
            success: false,
            message:
              "Make sure you're renaming to productName and cost variables.",
          };
        }

        const productNameMatch = output.match(/productName:\s*(.+?)(\n|$)/);
        const costMatch = output.match(/cost:\s*(\d+)/);

        if (!productNameMatch || !costMatch) {
          return {
            success: false,
            message: "Could not find productName and cost variables.",
          };
        }

        const productNameValue = productNameMatch[1].trim();
        const costValue = costMatch[1];

        if (productNameValue.includes("Headphones") && costValue === "150") {
          return {
            success: true,
            message: "Great! You've mastered destructuring with renaming!",
          };
        }
        return {
          success: false,
          message:
            "Make sure productName is 'Headphones' and cost is 150. Use const { name: productName, price: cost } = product;",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use renaming syntax: const { name: productName, price: cost } = product;",
    solutionHint: "const { name: productName, price: cost } = product;",
  },
  {
    id: 4,
    title: "Exercise 4: Nested Destructuring",
    description:
      "You can destructure nested objects directly using nested curly braces. Use const { nested: { property } } = object to extract deeply nested properties into variables. This is useful for accessing deeply nested data structures.",
    example: `const user = {
  name: "Bob",
  address: {
    city: "NYC",
    country: "USA"
  }
};
const { address: { city, country } } = user;
console.log(city, country); // "NYC" "USA"`,
    instruction:
      "Given a company object with a nested address object containing city and country, destructure city and country into separate variables.",
    starterCode: `// Your code here
const company = {
  name: "TechCorp",
  address: {
    city: "San Francisco",
    country: "USA"
  }
};
`,
    solution: `const company = {
  name: "TechCorp",
  address: {
    city: "San Francisco",
    country: "USA"
  }
};
const { address: { city, country } } = company;`,
    watchVariables: ["company", "city", "country"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_destructuring.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#nested_object_and_array_destructuring",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("address")) {
          return {
            success: false,
            message:
              "Make sure you're accessing the nested address object in your destructuring.",
          };
        }

        const cityMatch = output.match(/city:\s*(.+?)(\n|$)/);
        const countryMatch = output.match(/country:\s*(.+?)(\n|$)/);

        if (!cityMatch || !countryMatch) {
          return {
            success: false,
            message: "Could not find city and country variables.",
          };
        }

        const cityValue = cityMatch[1].trim();
        const countryValue = countryMatch[1].trim();

        if (
          cityValue.includes("San Francisco") &&
          countryValue.includes("USA")
        ) {
          return {
            success: true,
            message: "Perfect! You've mastered nested destructuring!",
          };
        }
        return {
          success: false,
          message:
            "Make sure city is 'San Francisco' and country is 'USA'. Use const { address: { city, country } } = company;",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use nested destructuring: const { address: { city, country } } = company;",
    solutionHint: "const { address: { city, country } } = company;",
  },
  {
    id: 5,
    title: "Exercise 5: Rest in Destructuring",
    description:
      "The rest operator (...) in destructuring lets you collect remaining properties into a new object. Use const { prop1, ...rest } = object to extract specific properties and gather the rest. This is useful for separating specific properties from the remaining ones.",
    example: `const data = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25
};
const { id, ...userInfo } = data;
console.log(id); // 1
console.log(userInfo); // { name: "Alice", email: "alice@example.com", age: 25 }`,
    instruction:
      "Given a user object with name, email, age, and role properties, destructure name and collect the remaining properties into a details object.",
    starterCode: `// Your code here
const user = {
  name: "Charlie",
  email: "charlie@example.com",
  age: 28,
  role: "developer"
};
`,
    solution: `const user = {
  name: "Charlie",
  email: "charlie@example.com",
  age: 28,
  role: "developer"
};
const { name, ...details } = user;`,
    watchVariables: ["name", "details"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_spread.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("...")) {
          return {
            success: false,
            message: "Make sure you're using the rest operator (...).",
          };
        }
        if (!code.includes("details")) {
          return {
            success: false,
            message:
              "Make sure you're creating a variable called 'details' to hold the rest of the properties.",
          };
        }

        const nameMatch = output.match(/name:\s*(.+?)(\n|$)/);
        const detailsMatch = output.match(/details:\s*\{[\s\S]*?\}/);

        if (!nameMatch || !detailsMatch) {
          return {
            success: false,
            message: "Could not find name and details variables.",
          };
        }

        const nameValue = nameMatch[1].trim();
        const detailsValue = detailsMatch[0];

        const hasEmail = detailsValue.includes("email");
        const hasAge = detailsValue.includes("age");
        const hasRole = detailsValue.includes("role");

        if (
          nameValue.includes("Charlie") &&
          hasEmail &&
          hasAge &&
          hasRole
        ) {
          return {
            success: true,
            message: "Excellent! You've learned the rest operator in destructuring!",
          };
        }
        return {
          success: false,
          message:
            "Make sure name is 'Charlie' and details contains the remaining properties. Use const { name, ...details } = user;",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use the rest operator: const { name, ...details } = user;",
    solutionHint: "const { name, ...details } = user;",
  },
  {
    id: 6,
    title: "Exercise 6: Optional Chaining (?.)",
    description:
      "Optional chaining (?.) safely accesses nested properties that might be null or undefined. Instead of throwing an error, it returns undefined if any part of the chain is missing. Use object?.property?.nestedProperty to safely navigate object structures.",
    example: `const user = {
  name: "David"
};
const city = user?.address?.city;
console.log(city); // undefined (no error!)`,
    instruction:
      "Given a user object with possibly missing address.city property, use optional chaining to safely access the city property and store it in a city variable.",
    starterCode: `// Your code here
const user = {
  name: "Emma"
};
`,
    solution: `const user = {
  name: "Emma"
};
const city = user?.address?.city;`,
    watchVariables: ["user", "city"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_accessors.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("?.")) {
          return {
            success: false,
            message: "Make sure you're using optional chaining (?.) syntax.",
          };
        }

        const cityMatch = output.match(/city:\s*(.+?)(\n|$)/);

        if (!cityMatch) {
          return {
            success: false,
            message: "Could not find the city variable.",
          };
        }

        const cityValue = cityMatch[1].trim();

        if (cityValue === "undefined") {
          return {
            success: true,
            message:
              "Perfect! You've mastered optional chaining for safe property access!",
          };
        }
        return {
          success: false,
          message:
            "The city should be undefined since address doesn't exist. Use user?.address?.city",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use optional chaining to safely access nested properties: user?.address?.city",
    solutionHint: "const city = user?.address?.city;",
  },
  {
    id: 7,
    title: "Exercise 7: Optional Chaining with Methods",
    description:
      "Optional chaining also works with method calls. Use object?.method?.() to safely call methods that might not exist. If the method doesn't exist, it returns undefined instead of throwing an error.",
    example: `const obj = {
  name: "Test"
};
const result = obj.getFullName?.();
console.log(result); // undefined (no error!)`,
    instruction:
      "Given an object that may not have a getFullName method, use optional chaining to safely call it and store the result in a fullName variable.",
    starterCode: `// Your code here
const person = {
  firstName: "John",
  lastName: "Doe"
};
`,
    solution: `const person = {
  firstName: "John",
  lastName: "Doe"
};
const fullName = person.getFullName?.();`,
    watchVariables: ["fullName"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_accessors.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("?.")) {
          return {
            success: false,
            message:
              "Make sure you're using optional chaining (?.) with method calls.",
          };
        }
        if (!code.includes("()")) {
          return {
            success: false,
            message:
              "Make sure you're calling the method with parentheses ().",
          };
        }

        const fullNameMatch = output.match(/fullName:\s*(.+?)(\n|$)/);

        if (!fullNameMatch) {
          return {
            success: false,
            message: "Could not find the fullName variable.",
          };
        }

        const fullNameValue = fullNameMatch[1].trim();

        if (fullNameValue === "undefined") {
          return {
            success: true,
            message:
              "Great! You've mastered optional chaining with method calls!",
          };
        }
        return {
          success: false,
          message:
            "The fullName should be undefined since getFullName doesn't exist. Use person.getFullName?.()",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use optional chaining for method calls: object.method?.()",
    solutionHint: "const fullName = person.getFullName?.();",
  },
  {
    id: 8,
    title: "Exercise 8: Nullish Coalescing (??)",
    description:
      "The nullish coalescing operator (??) returns the right-hand value only if the left is null or undefined. Unlike ||, it doesn't treat 0, false, or empty strings as falsy. Use value ?? defaultValue to provide defaults specifically for null/undefined.",
    example: `const settings = {
  volume: 0,
  brightness: null
};
const vol = settings.volume ?? 50;
const bright = settings.brightness ?? 50;
console.log(vol, bright); // 0 50`,
    instruction:
      "Given a settings object where volume is 0 and brightness is null, use ?? to set defaults. vol should be 0 (not replaced!), and bright should be 50 (default).",
    starterCode: `// Your code here
const settings = {
  volume: 0,
  brightness: null
};
`,
    solution: `const settings = {
  volume: 0,
  brightness: null
};
const vol = settings.volume ?? 50;
const bright = settings.brightness ?? 50;`,
    watchVariables: ["settings", "vol", "bright"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_operators.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("??")) {
          return {
            success: false,
            message:
              "Make sure you're using the nullish coalescing operator (??).",
          };
        }

        const volMatch = output.match(/vol:\s*(\d+)/);
        const brightMatch = output.match(/bright:\s*(\d+)/);

        if (!volMatch || !brightMatch) {
          return {
            success: false,
            message: "Could not find vol and bright variables.",
          };
        }

        const volValue = volMatch[1];
        const brightValue = brightMatch[1];

        if (volValue === "0" && brightValue === "50") {
          return {
            success: true,
            message:
              "Perfect! You've learned the difference between ?? and ||!",
          };
        }
        return {
          success: false,
          message:
            "vol should be 0 (NOT replaced by default) and bright should be 50. Use settings.volume ?? 50 and settings.brightness ?? 50",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use ?? to provide defaults only for null/undefined: settings.volume ?? 50",
    solutionHint:
      "const vol = settings.volume ?? 50; const bright = settings.brightness ?? 50;",
  },
  {
    id: 9,
    title: "Exercise 9: Spread Operator",
    description:
      "The spread operator (...) spreads an object's properties into another object. Use {...obj} to clone or merge objects. When merging, properties from later objects override earlier ones. This is useful for creating new objects from existing ones.",
    example: `const defaults = { theme: "light", fontSize: 12 };
const custom = { fontSize: 16, bold: true };
const merged = { ...defaults, ...custom };
console.log(merged); // { theme: "light", fontSize: 16, bold: true }`,
    instruction:
      "Given defaults and custom objects, create a merged object using the spread operator. Custom values should override defaults.",
    starterCode: `// Your code here
const defaults = {
  theme: "light",
  fontSize: 12,
  showLineNumbers: true
};
const custom = {
  theme: "dark",
  fontSize: 16
};
`,
    solution: `const defaults = {
  theme: "light",
  fontSize: 12,
  showLineNumbers: true
};
const custom = {
  theme: "dark",
  fontSize: 16
};
const merged = { ...defaults, ...custom };`,
    watchVariables: ["defaults", "custom", "merged"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_spread.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("...")) {
          return {
            success: false,
            message: "Make sure you're using the spread operator (...).",
          };
        }
        if (!code.includes("merged")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'merged'.",
          };
        }

        const mergedMatch = output.match(/merged:\s*\{[\s\S]*?\}/);

        if (!mergedMatch) {
          return {
            success: false,
            message: "Could not find the merged object.",
          };
        }

        const mergedValue = mergedMatch[0];
        const hasTheme = mergedValue.includes("theme");
        const hasFontSize = mergedValue.includes("fontSize");
        const hasShowLineNumbers = mergedValue.includes("showLineNumbers");
        const themeDark = mergedValue.includes("dark");
        const fontSize16 = mergedValue.includes("16");

        if (
          hasTheme &&
          hasFontSize &&
          hasShowLineNumbers &&
          themeDark &&
          fontSize16
        ) {
          return {
            success: true,
            message:
              "Excellent! You've mastered object merging with the spread operator!",
          };
        }
        return {
          success: false,
          message:
            "Make sure merged contains all properties with custom values overriding defaults. Use const merged = { ...defaults, ...custom };",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use spread to merge objects: const merged = { ...defaults, ...custom };",
    solutionHint: "const merged = { ...defaults, ...custom };",
  },
  {
    id: 10,
    title: "Exercise 10: Combining Spread and Properties",
    description:
      "You can combine the spread operator with new or overriding properties in a single object literal. Use {...obj, newProp: value} to spread an object and add/override properties at the same time. Properties defined after the spread will override matching properties from the spread.",
    example: `const base = { name: "App", version: 1 };
const prod = { ...base, env: "production", debug: false };
console.log(prod); // { name: "App", version: 1, env: "production", debug: false }`,
    instruction:
      "Given a baseConfig object, create a devConfig that spreads baseConfig and adds/overrides debug: true and env: 'development'.",
    starterCode: `// Your code here
const baseConfig = {
  appName: "MyApp",
  version: "1.0.0",
  debug: false
};
`,
    solution: `const baseConfig = {
  appName: "MyApp",
  version: "1.0.0",
  debug: false
};
const devConfig = { ...baseConfig, debug: true, env: "development" };`,
    watchVariables: ["baseConfig", "devConfig"],
    links: {
      w3schools: "https://www.w3schools.com/react/react_es6_spread.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("...")) {
          return {
            success: false,
            message: "Make sure you're using the spread operator (...).",
          };
        }
        if (!code.includes("devConfig")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'devConfig'.",
          };
        }

        const devConfigMatch = output.match(/devConfig:\s*\{[\s\S]*?\}/);

        if (!devConfigMatch) {
          return {
            success: false,
            message: "Could not find the devConfig object.",
          };
        }

        const devConfigValue = devConfigMatch[0];
        const hasAppName = devConfigValue.includes("appName");
        const hasVersion = devConfigValue.includes("version");
        const hasDebugTrue =
          devConfigValue.includes("debug") && devConfigValue.includes("true");
        const hasEnv =
          devConfigValue.includes("env") &&
          devConfigValue.includes("development");

        if (hasAppName && hasVersion && hasDebugTrue && hasEnv) {
          return {
            success: true,
            message:
              "Perfect! You've learned to combine spread with property overrides!",
          };
        }
        return {
          success: false,
          message:
            "Make sure devConfig has all base properties plus debug: true and env: 'development'. Use const devConfig = { ...baseConfig, debug: true, env: 'development' };",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Combine spread and new properties: const devConfig = { ...baseConfig, debug: true, env: 'development' };",
    solutionHint:
      "const devConfig = { ...baseConfig, debug: true, env: 'development' };",
  },
  {
    id: 11,
    title: "Exercise 11: JSON.stringify()",
    description:
      "JSON.stringify() converts JavaScript objects into JSON strings. This is useful for storing data, sending it over networks, or debugging. You can pass a third parameter for indentation to make the output more readable. Use JSON.stringify(obj, null, 2) for 2-space indentation.",
    example: `const user = {
  name: "Grace",
  age: 35,
  active: true
};
const jsonString = JSON.stringify(user, null, 2);
console.log(jsonString);
// {
//   "name": "Grace",
//   "age": 35,
//   "active": true
// }`,
    instruction:
      "Given a data object, convert it to a JSON string with 2-space indentation and store it in a jsonString variable.",
    starterCode: `// Your code here
const data = {
  id: 123,
  title: "Sample",
  published: true
};
`,
    solution: `const data = {
  id: 123,
  title: "Sample",
  published: true
};
const jsonString = JSON.stringify(data, null, 2);`,
    watchVariables: ["data", "jsonString"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_json_stringify.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("JSON.stringify")) {
          return {
            success: false,
            message: "Make sure you're using JSON.stringify().",
          };
        }

        if (!output.includes("jsonString:")) {
          return {
            success: false,
            message: "Could not find the jsonString variable.",
          };
        }

        if (
          output.includes('"id"') &&
          output.includes('"title"') &&
          output.includes('"published"')
        ) {
          return {
            success: true,
            message:
              "Great! You've learned how to convert objects to JSON strings!",
          };
        }
        return {
          success: false,
          message:
            "Make sure jsonString contains the JSON representation of data. Use JSON.stringify(data, null, 2)",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use JSON.stringify with formatting: JSON.stringify(data, null, 2)",
    solutionHint: "const jsonString = JSON.stringify(data, null, 2);",
  },
  {
    id: 12,
    title: "Exercise 12: JSON.parse()",
    description:
      "JSON.parse() converts JSON strings back into JavaScript objects. This is the reverse of JSON.stringify() and is essential for reading data from APIs or storage. Use JSON.parse(jsonString) to convert a valid JSON string into an object.",
    example: `const jsonStr = '{"name":"Henry","age":40,"active":true}';
const parsedData = JSON.parse(jsonStr);
console.log(parsedData); // { name: "Henry", age: 40, active: true }
console.log(parsedData.name); // "Henry"`,
    instruction:
      "Given a jsonStr string containing JSON data, parse it into a parsedData object.",
    starterCode: `// Your code here
const jsonStr = '{"product":"Keyboard","price":75,"inStock":true}';
`,
    solution: `const jsonStr = '{"product":"Keyboard","price":75,"inStock":true}';
const parsedData = JSON.parse(jsonStr);`,
    watchVariables: ["jsonStr", "parsedData"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_json_parse.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("JSON.parse")) {
          return {
            success: false,
            message: "Make sure you're using JSON.parse().",
          };
        }

        const parsedDataMatch = output.match(/parsedData:\s*\{[\s\S]*?\}/);

        if (!parsedDataMatch) {
          return {
            success: false,
            message: "Could not find the parsedData object.",
          };
        }

        const parsedDataValue = parsedDataMatch[0];
        const hasProduct = parsedDataValue.includes("product");
        const hasPrice = parsedDataValue.includes("price");
        const hasInStock = parsedDataValue.includes("inStock");

        if (hasProduct && hasPrice && hasInStock) {
          return {
            success: true,
            message:
              "Excellent! You've completed all modern object features exercises!",
          };
        }
        return {
          success: false,
          message:
            "Make sure parsedData contains the parsed object with product, price, and inStock. Use JSON.parse(jsonStr)",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use JSON.parse to convert JSON strings to objects: JSON.parse(jsonStr)",
    solutionHint: "const parsedData = JSON.parse(jsonStr);",
  },
];
