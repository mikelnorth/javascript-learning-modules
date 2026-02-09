// Exercise definitions for objects basics training
const exercises = [
  {
    id: 1,
    title: "Exercise 1: Object Literal Notation",
    description:
      "The simplest way to create an object in JavaScript is using literal notation with curly braces {}. You define properties as key-value pairs separated by commas.",
    example: `const person = {
  name: "Alice",
  age: 25
};
console.log(person); // { name: "Alice", age: 25 }`,
    instruction:
      "Create an object called 'car' with two properties: 'brand' (set to 'Toyota') and 'year' (set to 2020).",
    starterCode: `// Your code here
`,
    solution: `const car = {
  brand: "Toyota",
  year: 2020
};`,
    watchVariables: ["car"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_objects.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("{") || !code.includes("}")) {
          return {
            success: false,
            message:
              "Make sure you're using curly braces {} to create an object.",
          };
        }
        if (!code.includes("car")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'car'.",
          };
        }

        const carMatch = output.match(/car:\s*\{[\s\S]*?\}/);
        if (!carMatch) {
          return {
            success: false,
            message:
              "Could not find the car object. Make sure you created it correctly.",
          };
        }

        const carValue = carMatch[0];
        const hasBrand =
          carValue.includes("brand") && carValue.includes("Toyota");
        const hasYear = carValue.includes("year") && carValue.includes("2020");

        if (hasBrand && hasYear) {
          return {
            success: true,
            message:
              "Perfect! You've created your first object using literal notation!",
          };
        }
        return {
          success: false,
          message:
            "Make sure your car object has 'brand' set to 'Toyota' and 'year' set to 2020.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use curly braces and define properties like: const obj = { key: value };",
    solutionHint: "const car = { brand: 'Toyota', year: 2020 };",
  },
  {
    id: 2,
    title: "Exercise 2: Multiple Property Types",
    description:
      "Objects can hold different types of values: strings, numbers, booleans, arrays, and even other objects. This makes them very flexible for storing related data.",
    example: `const student = {
  name: "Bob",
  age: 20,
  enrolled: true,
  grades: [85, 90, 92]
};
console.log(student);`,
    instruction:
      "Create an object called 'book' with: 'title' (string: 'JavaScript Guide'), 'pages' (number: 350), 'available' (boolean: true), and 'chapters' (array: [1, 2, 3]).",
    starterCode: `// Your code here
`,
    solution: `const book = {
  title: "JavaScript Guide",
  pages: 350,
  available: true,
  chapters: [1, 2, 3]
};`,
    watchVariables: ["book"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_objects.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("book")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'book'.",
          };
        }

        const bookMatch = output.match(/book:\s*\{[\s\S]*?\}/);
        if (!bookMatch) {
          return {
            success: false,
            message: "Could not find the book object.",
          };
        }

        const bookValue = bookMatch[0];
        const hasTitle =
          bookValue.includes("title") && bookValue.includes("JavaScript Guide");
        const hasPages =
          bookValue.includes("pages") && bookValue.includes("350");
        const hasAvailable =
          bookValue.includes("available") && bookValue.includes("true");
        const hasChapters =
          bookValue.includes("chapters") &&
          bookValue.includes("[") &&
          bookValue.includes("1") &&
          bookValue.includes("2") &&
          bookValue.includes("3");

        if (hasTitle && hasPages && hasAvailable && hasChapters) {
          return {
            success: true,
            message:
              "Excellent! You've created an object with multiple data types!",
          };
        }
        return {
          success: false,
          message:
            "Make sure all properties are correct: title (string), pages (number), available (boolean), chapters (array).",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Objects can contain strings in quotes, numbers without quotes, booleans (true/false), and arrays with [].",
    solutionHint:
      "const book = { title: 'JavaScript Guide', pages: 350, available: true, chapters: [1, 2, 3] };",
  },
  {
    id: 3,
    title: "Exercise 3: Nested Objects",
    description:
      "Objects can contain other objects as property values. This is useful for organizing complex, related data in a hierarchical structure.",
    example: `const user = {
  name: "Charlie",
  address: {
    street: "123 Main St",
    city: "Boston"
  }
};
console.log(user);`,
    instruction:
      "Create an object called 'employee' with properties: 'name' (string: 'Sarah'), 'position' (string: 'Developer'), and 'contact' (object with 'email': 'sarah@example.com' and 'phone': '555-0100').",
    starterCode: `// Your code here
`,
    solution: `const employee = {
  name: "Sarah",
  position: "Developer",
  contact: {
    email: "sarah@example.com",
    phone: "555-0100"
  }
};`,
    watchVariables: ["employee"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_objects.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("employee")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'employee'.",
          };
        }

        const employeeMatch = output.match(/employee:\s*\{[\s\S]*?\n\}/);
        if (!employeeMatch) {
          return {
            success: false,
            message: "Could not find the employee object.",
          };
        }

        const employeeValue = employeeMatch[0];
        const hasName =
          employeeValue.includes("name") && employeeValue.includes("Sarah");
        const hasPosition =
          employeeValue.includes("position") &&
          employeeValue.includes("Developer");
        const hasContact = employeeValue.includes("contact");
        const hasEmail =
          employeeValue.includes("email") &&
          employeeValue.includes("sarah@example.com");
        const hasPhone =
          employeeValue.includes("phone") && employeeValue.includes("555-0100");

        if (hasName && hasPosition && hasContact && hasEmail && hasPhone) {
          return {
            success: true,
            message: "Great work! You've mastered nested objects!",
          };
        }
        return {
          success: false,
          message:
            "Make sure employee has name, position, and a nested contact object with email and phone.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "A nested object looks like: { prop1: value, prop2: { nestedProp: value } }",
    solutionHint:
      "const employee = { name: 'Sarah', position: 'Developer', contact: { email: 'sarah@example.com', phone: '555-0100' } };",
  },
  {
    id: 4,
    title: "Exercise 4: Dot Notation Access",
    description:
      "The dot notation (.) is the most common way to access object properties. Simply use objectName.propertyName to retrieve a value.",
    example: `const pet = {
  name: "Buddy",
  type: "dog",
  age: 3
};
const petName = pet.name;
console.log(petName); // "Buddy"`,
    instruction:
      "Given the object below, use dot notation to access the 'model' property and store it in a variable called 'phoneModel'.",
    starterCode: `// Your code here
const phone = {
  brand: "Apple",
  model: "iPhone 14",
  price: 999
};
`,
    solution: `const phone = {
  brand: "Apple",
  model: "iPhone 14",
  price: 999
};
const phoneModel = phone.model;`,
    watchVariables: ["phone", "phoneModel"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("phoneModel")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'phoneModel'.",
          };
        }

        if (!code.includes("phone.model") && !code.includes("phone['model']")) {
          return {
            success: false,
            message:
              "Make sure you're accessing the 'model' property from the phone object.",
          };
        }

        const phoneModelMatch = output.match(/phoneModel:\s*(.+?)(\n|$)/);
        if (!phoneModelMatch) {
          return {
            success: false,
            message: "Could not find the phoneModel variable.",
          };
        }

        const phoneModelValue = phoneModelMatch[1].trim();
        if (phoneModelValue.includes("iPhone 14")) {
          return {
            success: true,
            message: "Perfect! You've mastered dot notation access!",
          };
        }
        return {
          success: false,
          message:
            "The phoneModel should be 'iPhone 14'. Did you access phone.model?",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use the dot notation: objectName.propertyName to access a property.",
    solutionHint: "const phoneModel = phone.model;",
  },
  {
    id: 5,
    title: "Exercise 5: Bracket Notation Access",
    description:
      "Bracket notation uses square brackets [] to access properties. This is useful when property names have spaces, special characters, or when using variables.",
    example: `const config = {
  "api-key": "abc123",
  port: 3000
};
const apiKey = config["api-key"];
console.log(apiKey); // "abc123"`,
    instruction:
      "Given the object below, use bracket notation to access the 'user-name' property and store it in a variable called 'username'.",
    starterCode: `// Your code here
const settings = {
  "user-name": "admin",
  "max-users": 100,
  timeout: 30
};
`,
    solution: `const settings = {
  "user-name": "admin",
  "max-users": 100,
  timeout: 30
};
const username = settings["user-name"];`,
    watchVariables: ["settings", "username"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("username")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'username'.",
          };
        }

        if (
          !code.includes('["user-name"]') &&
          !code.includes("['user-name']")
        ) {
          return {
            success: false,
            message:
              "Make sure you're using bracket notation with 'user-name' in quotes.",
          };
        }

        const usernameMatch = output.match(/username:\s*(.+?)(\n|$)/);
        if (!usernameMatch) {
          return {
            success: false,
            message: "Could not find the username variable.",
          };
        }

        const usernameValue = usernameMatch[1].trim();
        if (usernameValue.includes("admin")) {
          return {
            success: true,
            message:
              "Excellent! You've learned bracket notation for accessing properties!",
          };
        }
        return {
          success: false,
          message:
            "The username should be 'admin'. Did you access settings['user-name']?",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use bracket notation with quotes: objectName['property-name']",
    solutionHint: "const username = settings['user-name'];",
  },
  {
    id: 6,
    title: "Exercise 6: Dynamic Property Access",
    description:
      "Bracket notation becomes powerful when used with variables. You can dynamically access different properties based on variable values.",
    example: `const data = {
  name: "Eve",
  age: 28,
  city: "NYC"
};
const key = "age";
const value = data[key];
console.log(value); // 28`,
    instruction:
      "Given the object and variable below, use bracket notation with the 'propName' variable to access that property from the 'product' object. Store the result in 'propValue'.",
    starterCode: `// Your code here
const product = {
  name: "Laptop",
  price: 1200,
  stock: 50
};
const propName = "price";
`,
    solution: `const product = {
  name: "Laptop",
  price: 1200,
  stock: 50
};
const propName = "price";
const propValue = product[propName];`,
    watchVariables: ["product", "propName", "propValue"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_properties.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("propValue")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'propValue'.",
          };
        }

        if (!code.includes("[propName]")) {
          return {
            success: false,
            message:
              "Make sure you're using bracket notation with the propName variable (no quotes!).",
          };
        }

        const propValueMatch = output.match(/propValue:\s*(\d+)/);
        if (!propValueMatch) {
          return {
            success: false,
            message: "Could not find the propValue variable.",
          };
        }

        const propValueNum = propValueMatch[1];
        if (propValueNum === "1200") {
          return {
            success: true,
            message: "Perfect! You've mastered dynamic property access!",
          };
        }
        return {
          success: false,
          message:
            "The propValue should be 1200. Use product[propName] without quotes around propName.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "When using a variable in bracket notation, don't use quotes: object[variableName]",
    solutionHint: "const propValue = product[propName];",
  },
  {
    id: 7,
    title: "Exercise 7: Adding Methods to Objects",
    description:
      "Objects can contain functions as properties, called methods. Methods can perform actions and access other properties of the same object using 'this'.",
    example: `const calculator = {
  value: 0,
  add: function(num) {
    return this.value + num;
  }
};
console.log(calculator.add(5)); // 5`,
    instruction:
      "Create an object called 'counter' with a property 'count' set to 0, and a method 'increment' that returns the count increased by 1.",
    starterCode: `// Your code here
`,
    solution: `const counter = {
  count: 0,
  increment: function() {
    return this.count + 1;
  }
};`,
    watchVariables: ["counter"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_methods.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_methods",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("counter")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'counter'.",
          };
        }

        if (!code.includes("function") && !code.includes("=>")) {
          return {
            success: false,
            message:
              "Make sure you're adding a function as a method to the object.",
          };
        }

        const counterMatch = output.match(/counter:\s*\{[\s\S]*?\}/);
        if (!counterMatch) {
          return {
            success: false,
            message: "Could not find the counter object.",
          };
        }

        const counterValue = counterMatch[0];
        const hasCount =
          counterValue.includes("count") && counterValue.includes("0");
        const hasIncrement = code.includes("increment");

        if (hasCount && hasIncrement) {
          return {
            success: true,
            message: "Great job! You've added a method to an object!",
          };
        }
        return {
          success: false,
          message:
            "Make sure counter has a 'count' property and an 'increment' method.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "A method is just a function as a property: { methodName: function() { } }",
    solutionHint:
      "const counter = { count: 0, increment: function() { return this.count + 1; } };",
  },
  {
    id: 8,
    title: "Exercise 8: Method Shorthand (ES6)",
    description:
      "ES6 introduced a shorter syntax for defining methods in objects. You can omit the 'function' keyword and colon, making your code cleaner.",
    example: `const person = {
  name: "Frank",
  greet() {
    return "Hello, " + this.name;
  }
};
console.log(person.greet()); // "Hello, Frank"`,
    instruction:
      "Create an object called 'rectangle' with properties 'width' (10) and 'height' (5), and a method 'getArea' (using shorthand syntax) that returns width * height.",
    starterCode: `// Your code here
`,
    solution: `const rectangle = {
  width: 10,
  height: 5,
  getArea() {
    return this.width * this.height;
  }
};`,
    watchVariables: ["rectangle"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_methods.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("rectangle")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'rectangle'.",
          };
        }

        if (code.includes("function")) {
          return {
            success: false,
            message:
              "Use the ES6 shorthand syntax (without the 'function' keyword): methodName() { }",
          };
        }

        if (!code.includes("getArea")) {
          return {
            success: false,
            message: "Make sure you added a method called 'getArea'.",
          };
        }

        const rectangleMatch = output.match(/rectangle:\s*\{[\s\S]*?\}/);
        if (!rectangleMatch) {
          return {
            success: false,
            message: "Could not find the rectangle object.",
          };
        }

        const rectangleValue = rectangleMatch[0];
        const hasWidth =
          rectangleValue.includes("width") && rectangleValue.includes("10");
        const hasHeight =
          rectangleValue.includes("height") && rectangleValue.includes("5");
        const hasGetArea = code.includes("getArea");

        if (hasWidth && hasHeight && hasGetArea) {
          return {
            success: true,
            message:
              "Excellent! You've mastered the ES6 method shorthand syntax!",
          };
        }
        return {
          success: false,
          message:
            "Make sure rectangle has width (10), height (5), and a getArea method using shorthand.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "ES6 method shorthand: { methodName() { // code } } without 'function' keyword or colon.",
    solutionHint:
      "const rectangle = { width: 10, height: 5, getArea() { return this.width * this.height; } };",
  },
  {
    id: 9,
    title: "Exercise 9: Constructor Function",
    description:
      "Before ES6 classes, constructor functions were the main way to create multiple similar objects. Use the 'new' keyword with a function to create object instances.",
    example: `function Animal(name, type) {
  this.name = name;
  this.type = type;
}
const dog = new Animal("Buddy", "dog");
console.log(dog); // { name: "Buddy", type: "dog" }`,
    instruction:
      "Create a constructor function called 'Person' that takes 'firstName' and 'age' as parameters. Then create an instance called 'person1' with firstName: 'John' and age: 30.",
    starterCode: `// Your code here
`,
    solution: `function Person(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
const person1 = new Person("John", 30);`,
    watchVariables: ["person1"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_constructors.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("function Person")) {
          return {
            success: false,
            message:
              "Make sure you created a constructor function called 'Person'.",
          };
        }

        if (!code.includes("new Person")) {
          return {
            success: false,
            message:
              "Make sure you're using the 'new' keyword to create an instance.",
          };
        }

        if (!code.includes("person1")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'person1'.",
          };
        }

        const person1Match = output.match(/person1:\s*\{[\s\S]*?\}/);
        if (!person1Match) {
          return {
            success: false,
            message: "Could not find the person1 object.",
          };
        }

        const person1Value = person1Match[0];
        const hasFirstName =
          person1Value.includes("firstName") && person1Value.includes("John");
        const hasAge =
          person1Value.includes("age") && person1Value.includes("30");

        if (hasFirstName && hasAge) {
          return {
            success: true,
            message: "Perfect! You've mastered constructor functions!",
          };
        }
        return {
          success: false,
          message: "Make sure person1 has firstName: 'John' and age: 30.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Constructor functions use 'this' to set properties and are called with 'new': const obj = new Constructor(args);",
    solutionHint:
      "function Person(firstName, age) { this.firstName = firstName; this.age = age; } const person1 = new Person('John', 30);",
  },
  {
    id: 10,
    title: "Exercise 10: Object.create()",
    description:
      "Object.create() creates a new object with a specified prototype object. This is useful for prototypal inheritance without using constructor functions or classes.",
    example: `const animalPrototype = {
  speak() {
    return "Some sound";
  }
};
const cat = Object.create(animalPrototype);
cat.name = "Whiskers";
console.log(cat.speak()); // "Some sound"`,
    instruction:
      "Create a prototype object called 'vehiclePrototype' with a method 'start' that returns 'Engine started'. Then use Object.create() to create a new object 'bike' from this prototype, and add a 'type' property set to 'motorcycle'.",
    starterCode: `// Your code here
`,
    solution: `const vehiclePrototype = {
  start() {
    return "Engine started";
  }
};
const bike = Object.create(vehiclePrototype);
bike.type = "motorcycle";`,
    watchVariables: ["vehiclePrototype", "bike"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_create_object.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("vehiclePrototype")) {
          return {
            success: false,
            message:
              "Make sure you created a variable called 'vehiclePrototype'.",
          };
        }

        if (!code.includes("Object.create")) {
          return {
            success: false,
            message:
              "Make sure you're using Object.create() to create the bike object.",
          };
        }

        if (!code.includes("bike")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'bike'.",
          };
        }

        const bikeMatch = output.match(/bike:\s*\{[\s\S]*?\}/);
        if (!bikeMatch) {
          return {
            success: false,
            message: "Could not find the bike object.",
          };
        }

        const bikeValue = bikeMatch[0];
        const hasType =
          bikeValue.includes("type") && bikeValue.includes("motorcycle");

        if (hasType) {
          return {
            success: true,
            message:
              "Excellent! You've learned how to use Object.create() for prototypal inheritance!",
          };
        }
        return {
          success: false,
          message: "Make sure bike has a 'type' property set to 'motorcycle'.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use Object.create(prototypeObj) to create a new object, then add properties to it with dot notation.",
    solutionHint:
      "const vehiclePrototype = { start() { return 'Engine started'; } }; const bike = Object.create(vehiclePrototype); bike.type = 'motorcycle';",
  },
];
