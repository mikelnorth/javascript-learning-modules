// Exercise definitions for classes and OOP training
const exercises = [
  {
    id: 1,
    title: "Exercise 1: Basic Class",
    description:
      "ES6 classes provide a cleaner, more intuitive syntax for creating object blueprints. A class is defined using the 'class' keyword, and you create instances using 'new'. The constructor method initializes new objects with properties.",
    example: `class Person {
  constructor(name) {
    this.name = name;
  }
}
const person1 = new Person("Alice");
console.log(person1); // Person { name: "Alice" }`,
    instruction:
      "Create a class called 'Person' with a constructor that takes 'name' as a parameter and sets this.name. Then create an instance called 'person1' with name 'Alice'.",
    starterCode: `// Your code here
`,
    solution: `class Person {
  constructor(name) {
    this.name = name;
  }
}
const person1 = new Person("Alice");`,
    watchVariables: ["person1"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_classes.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Person")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Person'.",
          };
        }
        if (!code.includes("constructor")) {
          return {
            success: false,
            message:
              "Make sure your class has a constructor method to initialize properties.",
          };
        }
        if (!code.includes("new Person")) {
          return {
            success: false,
            message:
              "Make sure you're using 'new Person()' to create an instance.",
          };
        }

        const person1Match = output.match(/person1:\s*\{[\s\S]*?\}/);
        if (!person1Match) {
          return {
            success: false,
            message: "Could not find the person1 instance.",
          };
        }

        const person1Value = person1Match[0];
        const hasName =
          person1Value.includes("name") && person1Value.includes("Alice");

        if (hasName) {
          return {
            success: true,
            message: "Perfect! You've created your first ES6 class!",
          };
        }
        return {
          success: false,
          message: "Make sure person1 has name set to 'Alice'.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use 'class ClassName { constructor(param) { this.prop = param; } }' to define a class, then create an instance with 'new ClassName(value)'.",
    solutionHint:
      "class Person { constructor(name) { this.name = name; } } const person1 = new Person('Alice');",
  },
  {
    id: 2,
    title: "Exercise 2: Class Methods",
    description:
      "Classes can have methods that define behaviors for their instances. Methods are functions defined inside the class body. They can access the instance's properties using 'this' and can return values or perform operations.",
    example: `class Calculator {
  constructor() {
    this.value = 0;
  }
  add(n) {
    this.value = this.value + n;
    return this.value;
  }
}
const calc = new Calculator();
const result = calc.add(5);
console.log(result); // 5`,
    instruction:
      "Create a 'Calculator' class with a constructor that sets this.value = 0, and an 'add(n)' method that adds n to this.value and returns this.value. Create an instance called 'calc', call add(5), and store the result in 'result'.",
    starterCode: `// Your code here
`,
    solution: `class Calculator {
  constructor() {
    this.value = 0;
  }
  add(n) {
    this.value = this.value + n;
    return this.value;
  }
}
const calc = new Calculator();
const result = calc.add(5);`,
    watchVariables: ["calc", "result"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_intro.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Calculator")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Calculator'.",
          };
        }
        if (!code.includes("add")) {
          return {
            success: false,
            message: "Make sure you defined an 'add' method in your class.",
          };
        }

        const resultMatch = output.match(/result:\s*(\d+)/);
        if (!resultMatch) {
          return {
            success: false,
            message: "Could not find the result variable.",
          };
        }

        const resultValue = resultMatch[1];
        if (resultValue === "5") {
          return {
            success: true,
            message: "Excellent! You've added a method to your class!",
          };
        }
        return {
          success: false,
          message:
            "The result should be 5. Make sure the add method returns this.value after adding.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Define methods inside the class body: methodName(params) { // code }. Use 'this' to access properties.",
    solutionHint:
      "class Calculator { constructor() { this.value = 0; } add(n) { this.value = this.value + n; return this.value; } }",
  },
  {
    id: 3,
    title: "Exercise 3: Creating Multiple Instances",
    description:
      "One of the key benefits of classes is that you can create multiple independent instances from the same blueprint. Each instance has its own properties and state, so changes to one instance don't affect others.",
    example: `class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count = this.count + 1;
  }
}
const counter1 = new Counter();
counter1.increment();
counter1.increment();
const counter2 = new Counter();
counter2.increment();
console.log(counter1.count); // 2
console.log(counter2.count); // 1`,
    instruction:
      "Create a 'Counter' class with count = 0 in the constructor and an 'increment()' method that increases count by 1. Create two instances: 'counter1' (increment it twice) and 'counter2' (increment it once). Store their counts in 'count1' and 'count2'.",
    starterCode: `// Your code here
`,
    solution: `class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count = this.count + 1;
  }
}
const counter1 = new Counter();
counter1.increment();
counter1.increment();
const counter2 = new Counter();
counter2.increment();
const count1 = counter1.count;
const count2 = counter2.count;`,
    watchVariables: ["counter1", "counter2", "count1", "count2"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_classes.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Counter")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Counter'.",
          };
        }
        if (!code.includes("counter1") || !code.includes("counter2")) {
          return {
            success: false,
            message: "Make sure you created both counter1 and counter2.",
          };
        }

        const count1Match = output.match(/count1:\s*(\d+)/);
        const count2Match = output.match(/count2:\s*(\d+)/);

        if (!count1Match || !count2Match) {
          return {
            success: false,
            message: "Could not find count1 and count2 variables.",
          };
        }

        const count1Value = count1Match[1];
        const count2Value = count2Match[1];

        if (count1Value === "2" && count2Value === "1") {
          return {
            success: true,
            message:
              "Great work! You understand that each instance is independent!",
          };
        }
        return {
          success: false,
          message:
            "count1 should be 2 (incremented twice) and count2 should be 1 (incremented once).",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Create two instances with 'new Counter()', call increment() different numbers of times on each, then access their .count properties.",
    solutionHint:
      "Create counter1, call increment() twice. Create counter2, call increment() once. Store counter1.count and counter2.count.",
  },
  {
    id: 4,
    title: "Exercise 4: Constructor Parameters",
    description:
      "Constructors can accept multiple parameters to initialize objects with different starting values. This makes classes flexible - you can create instances with custom properties by passing arguments when calling 'new'.",
    example: `class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}
const book = new Book("1984", "George Orwell", 328);
console.log(book); // Book { title: "1984", author: "George Orwell", pages: 328 }`,
    instruction:
      "Create a 'Book' class with a constructor that takes 'title', 'author', and 'pages' as parameters and sets them as properties. Create an instance called 'book' with title: '1984', author: 'George Orwell', pages: 328.",
    starterCode: `// Your code here
`,
    solution: `class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}
const book = new Book("1984", "George Orwell", 328);`,
    watchVariables: ["book"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_intro.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Book")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Book'.",
          };
        }
        if (!code.includes("constructor")) {
          return {
            success: false,
            message: "Make sure your class has a constructor.",
          };
        }

        const bookMatch = output.match(/book:\s*\{[\s\S]*?\}/);
        if (!bookMatch) {
          return {
            success: false,
            message: "Could not find the book instance.",
          };
        }

        const bookValue = bookMatch[0];
        const hasTitle =
          bookValue.includes("title") && bookValue.includes("1984");
        const hasAuthor =
          bookValue.includes("author") && bookValue.includes("George Orwell");
        const hasPages =
          bookValue.includes("pages") && bookValue.includes("328");

        if (hasTitle && hasAuthor && hasPages) {
          return {
            success: true,
            message:
              "Perfect! You've created a class with multiple constructor parameters!",
          };
        }
        return {
          success: false,
          message:
            "Make sure book has title: '1984', author: 'George Orwell', and pages: 328.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "The constructor can take multiple parameters: constructor(param1, param2, param3) { this.prop1 = param1; ... }",
    solutionHint:
      "class Book { constructor(title, author, pages) { this.title = title; this.author = author; this.pages = pages; } }",
  },
  {
    id: 5,
    title: "Exercise 5: Instance vs Class",
    description:
      "The 'instanceof' operator checks if an object is an instance of a specific class. This is useful for type checking. All class instances are also instances of Object, showing JavaScript's prototypal inheritance chain.",
    example: `class Car {
  constructor(model) {
    this.model = model;
  }
}
const car = new Car("Tesla");
console.log(car instanceof Car); // true
console.log(car instanceof Object); // true`,
    instruction:
      "Create a 'Car' class with a constructor that takes 'model'. Create an instance 'myCar' with model 'Tesla'. Then check if myCar is an instance of Car (store in 'isCar') and an instance of Object (store in 'isObject').",
    starterCode: `// Your code here
`,
    solution: `class Car {
  constructor(model) {
    this.model = model;
  }
}
const myCar = new Car("Tesla");
const isCar = myCar instanceof Car;
const isObject = myCar instanceof Object;`,
    watchVariables: ["isCar", "isObject"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_classes.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Car")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Car'.",
          };
        }
        if (!code.includes("instanceof")) {
          return {
            success: false,
            message:
              "Make sure you're using the 'instanceof' operator to check types.",
          };
        }

        const isCarMatch = output.match(/isCar:\s*(true|false)/);
        const isObjectMatch = output.match(/isObject:\s*(true|false)/);

        if (!isCarMatch || !isObjectMatch) {
          return {
            success: false,
            message: "Could not find isCar and isObject variables.",
          };
        }

        const isCarValue = isCarMatch[1];
        const isObjectValue = isObjectMatch[1];

        if (isCarValue === "true" && isObjectValue === "true") {
          return {
            success: true,
            message:
              "Excellent! You understand how instanceof works with classes!",
          };
        }
        return {
          success: false,
          message:
            "Both isCar and isObject should be true. Use: variable instanceof ClassName",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use the instanceof operator: object instanceof ClassName returns true or false.",
    solutionHint:
      "const isCar = myCar instanceof Car; const isObject = myCar instanceof Object;",
  },
  {
    id: 6,
    title: "Exercise 6: Getters",
    description:
      "Getters are special methods that act like properties but compute values dynamically. They're defined with the 'get' keyword and accessed without parentheses. Use getters for computed or derived properties that depend on other properties.",
    example: `class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(5);
console.log(circle.area); // 78.53981633974483`,
    instruction:
      "Create a 'Circle' class with a constructor that takes 'radius', and a getter called 'area' that returns Math.PI * radius * radius. Create an instance 'circle' with radius 5, and store circle.area in 'circleArea'.",
    starterCode: `// Your code here
`,
    solution: `class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(5);
const circleArea = circle.area;`,
    watchVariables: ["circle", "circleArea"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_accessors.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Circle")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Circle'.",
          };
        }
        if (!code.includes("get area")) {
          return {
            success: false,
            message:
              "Make sure you defined a getter called 'area' using the 'get' keyword.",
          };
        }

        const circleAreaMatch = output.match(/circleArea:\s*([\d.]+)/);
        if (!circleAreaMatch) {
          return {
            success: false,
            message: "Could not find the circleArea variable.",
          };
        }

        const circleAreaValue = parseFloat(circleAreaMatch[1]);
        const expectedArea = Math.PI * 5 * 5;

        if (Math.abs(circleAreaValue - expectedArea) < 0.01) {
          return {
            success: true,
            message: "Perfect! You've mastered getters for computed properties!",
          };
        }
        return {
          success: false,
          message:
            "The area calculation doesn't look right. Use Math.PI * radius * radius.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Define a getter with: get propertyName() { return /* computation */; }. Access it like a property: object.propertyName (no parentheses).",
    solutionHint:
      "get area() { return Math.PI * this.radius * this.radius; }",
  },
  {
    id: 7,
    title: "Exercise 7: Setters",
    description:
      "Setters are special methods that control how properties are assigned. They're defined with the 'set' keyword and can validate or transform values before storing them. Setters are useful for enforcing business rules or constraints.",
    example: `class Temperature {
  constructor() {
    this._celsius = 0;
  }
  set celsius(value) {
    if (value < -273.15) {
      console.log("Temperature below absolute zero is not possible!");
    } else {
      this._celsius = value;
    }
  }
  get celsius() {
    return this._celsius;
  }
}
const temp = new Temperature();
temp.celsius = 25; // Uses setter
console.log(temp.celsius); // 25`,
    instruction:
      "Create a 'Temperature' class with a private '_celsius' property initialized to 0. Add a setter 'celsius' that only sets _celsius if value >= -273.15. Add a getter 'celsius' that returns _celsius. Create instance 'temp', set celsius to 25, verify it was set.",
    starterCode: `// Your code here
`,
    solution: `class Temperature {
  constructor() {
    this._celsius = 0;
  }
  set celsius(value) {
    if (value >= -273.15) {
      this._celsius = value;
    }
  }
  get celsius() {
    return this._celsius;
  }
}
const temp = new Temperature();
temp.celsius = 25;`,
    watchVariables: ["temp"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_accessors.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Temperature")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Temperature'.",
          };
        }
        if (!code.includes("set celsius")) {
          return {
            success: false,
            message:
              "Make sure you defined a setter called 'celsius' using the 'set' keyword.",
          };
        }
        if (!code.includes("get celsius")) {
          return {
            success: false,
            message:
              "Make sure you defined a getter called 'celsius' using the 'get' keyword.",
          };
        }

        const tempMatch = output.match(/temp:\s*\{[\s\S]*?\}/);
        if (!tempMatch) {
          return {
            success: false,
            message: "Could not find the temp instance.",
          };
        }

        const tempValue = tempMatch[0];
        const hasCelsius = tempValue.includes("_celsius");
        const hasValue = tempValue.includes("25");

        if (hasCelsius && hasValue) {
          return {
            success: true,
            message:
              "Excellent! You've learned how to use setters for validation!",
          };
        }
        return {
          success: false,
          message:
            "Make sure the temperature was set to 25. Did you call temp.celsius = 25?",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Define a setter with: set propertyName(value) { /* validation and assignment */ }. Use it like: object.propertyName = value;",
    solutionHint:
      "set celsius(value) { if (value >= -273.15) { this._celsius = value; } }",
  },
  {
    id: 8,
    title: "Exercise 8: Static Methods",
    description:
      "Static methods belong to the class itself, not to instances. They're defined with the 'static' keyword and called directly on the class name, not on instances. Use static methods for utility functions related to the class.",
    example: `class MathHelper {
  static add(a, b) {
    return a + b;
  }
}
const sum = MathHelper.add(3, 4);
console.log(sum); // 7`,
    instruction:
      "Create a 'MathHelper' class with a static method 'add(a, b)' that returns a + b. Call MathHelper.add(3, 4) and store the result in 'sum'.",
    starterCode: `// Your code here
`,
    solution: `class MathHelper {
  static add(a, b) {
    return a + b;
  }
}
const sum = MathHelper.add(3, 4);`,
    watchVariables: ["sum"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_static.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class MathHelper")) {
          return {
            success: false,
            message: "Make sure you created a class called 'MathHelper'.",
          };
        }
        if (!code.includes("static")) {
          return {
            success: false,
            message:
              "Make sure you used the 'static' keyword to define a static method.",
          };
        }
        if (!code.includes("MathHelper.add")) {
          return {
            success: false,
            message:
              "Make sure you're calling the static method on the class: MathHelper.add(3, 4).",
          };
        }

        const sumMatch = output.match(/sum:\s*(\d+)/);
        if (!sumMatch) {
          return {
            success: false,
            message: "Could not find the sum variable.",
          };
        }

        const sumValue = sumMatch[1];
        if (sumValue === "7") {
          return {
            success: true,
            message: "Perfect! You understand static methods!",
          };
        }
        return {
          success: false,
          message: "The sum should be 7. Make sure you're adding 3 and 4.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Define static methods with 'static methodName() { }' and call them on the class itself: ClassName.methodName().",
    solutionHint:
      "static add(a, b) { return a + b; } then call MathHelper.add(3, 4);",
  },
  {
    id: 9,
    title: "Exercise 9: Class Inheritance",
    description:
      "Inheritance allows you to create a new class based on an existing class. The child class (subclass) inherits properties and methods from the parent class (superclass) using the 'extends' keyword. This promotes code reuse.",
    example: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}
class Dog extends Animal {
  speak() {
    return this.name + " barks";
  }
}
const dog = new Dog("Buddy");
console.log(dog.speak()); // "Buddy barks"`,
    instruction:
      "Create an 'Animal' class with constructor(name) and a speak() method that returns name + ' makes a sound'. Create a 'Dog' class that extends Animal and overrides speak() to return name + ' barks'. Create a dog instance with name 'Rex', call speak(), store result in 'sound'.",
    starterCode: `// Your code here
`,
    solution: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}
class Dog extends Animal {
  speak() {
    return this.name + " barks";
  }
}
const dog = new Dog("Rex");
const sound = dog.speak();`,
    watchVariables: ["dog", "sound"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_inheritance.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Animal")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Animal'.",
          };
        }
        if (!code.includes("class Dog extends Animal")) {
          return {
            success: false,
            message:
              "Make sure Dog extends Animal using the 'extends' keyword.",
          };
        }

        const soundMatch = output.match(/sound:\s*(.+?)(\n|$)/);
        if (!soundMatch) {
          return {
            success: false,
            message: "Could not find the sound variable.",
          };
        }

        const soundValue = soundMatch[1].trim();
        if (soundValue.includes("Rex") && soundValue.includes("barks")) {
          return {
            success: true,
            message:
              "Excellent! You've learned class inheritance with extends!",
          };
        }
        return {
          success: false,
          message:
            "The sound should be 'Rex barks'. Make sure Dog's speak method returns the right value.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use 'class ChildClass extends ParentClass' to create inheritance. Child classes can override parent methods.",
    solutionHint:
      "class Dog extends Animal { speak() { return this.name + ' barks'; } }",
  },
  {
    id: 10,
    title: "Exercise 10: Super in Constructor",
    description:
      "When a child class has a constructor, it must call super() before using 'this'. The super() call invokes the parent class's constructor, initializing inherited properties. You can then add additional properties specific to the child class.",
    example: `class Shape {
  constructor(color) {
    this.color = color;
  }
}
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color); // Call parent constructor
    this.width = width;
    this.height = height;
  }
}
const rect = new Rectangle("blue", 10, 5);
console.log(rect); // { color: "blue", width: 10, height: 5 }`,
    instruction:
      "Create a 'Shape' class with constructor(color). Create a 'Rectangle' class extending Shape with constructor(color, width, height) that calls super(color) and sets width and height. Create instance 'rect' with color 'red', width 20, height 10.",
    starterCode: `// Your code here
`,
    solution: `class Shape {
  constructor(color) {
    this.color = color;
  }
}
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
}
const rect = new Rectangle("red", 20, 10);`,
    watchVariables: ["rect"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_inheritance.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Shape")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Shape'.",
          };
        }
        if (!code.includes("class Rectangle extends Shape")) {
          return {
            success: false,
            message: "Make sure Rectangle extends Shape.",
          };
        }
        if (!code.includes("super(")) {
          return {
            success: false,
            message:
              "Make sure you're calling super() in Rectangle's constructor.",
          };
        }

        const rectMatch = output.match(/rect:\s*\{[\s\S]*?\}/);
        if (!rectMatch) {
          return {
            success: false,
            message: "Could not find the rect instance.",
          };
        }

        const rectValue = rectMatch[0];
        const hasColor =
          rectValue.includes("color") && rectValue.includes("red");
        const hasWidth =
          rectValue.includes("width") && rectValue.includes("20");
        const hasHeight =
          rectValue.includes("height") && rectValue.includes("10");

        if (hasColor && hasWidth && hasHeight) {
          return {
            success: true,
            message:
              "Perfect! You understand how to use super() in constructors!",
          };
        }
        return {
          success: false,
          message:
            "Make sure rect has color 'red', width 20, and height 10. Did you call super(color)?",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "In a child class constructor, call super(parentArgs) first before setting additional properties with 'this'.",
    solutionHint:
      "constructor(color, width, height) { super(color); this.width = width; this.height = height; }",
  },
  {
    id: 11,
    title: "Exercise 11: Super in Methods",
    description:
      "You can call parent class methods from child class methods using super.methodName(). This is useful when you want to extend parent functionality rather than completely replacing it. The child method can call the parent method and then add additional behavior.",
    example: `class Vehicle {
  describe() {
    return "This is a vehicle";
  }
}
class Car extends Vehicle {
  describe() {
    return super.describe() + ", specifically a car";
  }
}
const car = new Car();
console.log(car.describe()); // "This is a vehicle, specifically a car"`,
    instruction:
      "Create a 'Vehicle' class with a describe() method returning 'This is a vehicle'. Create a 'Car' class extending Vehicle, override describe() to call super.describe() and append ', specifically a car'. Create instance, call describe(), store in 'result'.",
    starterCode: `// Your code here
`,
    solution: `class Vehicle {
  describe() {
    return "This is a vehicle";
  }
}
class Car extends Vehicle {
  describe() {
    return super.describe() + ", specifically a car";
  }
}
const car = new Car();
const result = car.describe();`,
    watchVariables: ["result"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_inheritance.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Vehicle")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Vehicle'.",
          };
        }
        if (!code.includes("class Car extends Vehicle")) {
          return {
            success: false,
            message: "Make sure Car extends Vehicle.",
          };
        }
        if (!code.includes("super.describe")) {
          return {
            success: false,
            message:
              "Make sure you're calling super.describe() in Car's describe method.",
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
        if (
          resultValue.includes("vehicle") &&
          resultValue.includes("car") &&
          resultValue.length > 20
        ) {
          return {
            success: true,
            message:
              "Excellent! You've learned how to call parent methods with super!",
          };
        }
        return {
          success: false,
          message:
            "The result should contain both the parent and child description. Use super.describe() + additional text.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Call parent methods with super.methodName() and add to the result: return super.methodName() + ' more text';",
    solutionHint:
      "describe() { return super.describe() + ', specifically a car'; }",
  },
  {
    id: 12,
    title: "Exercise 12: Method Overriding",
    description:
      "Method overriding allows a child class to provide its own implementation of a parent class method. When you call the method on a child instance, the child's version runs instead of the parent's. This is fundamental to polymorphism.",
    example: `class Vehicle {
  start() {
    return "Engine started";
  }
}
class ElectricCar extends Vehicle {
  start() {
    return "Electric motor started";
  }
}
const ev = new ElectricCar();
console.log(ev.start()); // "Electric motor started"`,
    instruction:
      "Create a 'Vehicle' class with start() returning 'Engine started'. Create 'ElectricCar' extending Vehicle, override start() to return 'Electric motor started'. Create instance 'ev', call start(), store result.",
    starterCode: `// Your code here
`,
    solution: `class Vehicle {
  start() {
    return "Engine started";
  }
}
class ElectricCar extends Vehicle {
  start() {
    return "Electric motor started";
  }
}
const ev = new ElectricCar();
const result = ev.start();`,
    watchVariables: ["result"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_inheritance.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Vehicle")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Vehicle'.",
          };
        }
        if (!code.includes("class ElectricCar extends Vehicle")) {
          return {
            success: false,
            message: "Make sure ElectricCar extends Vehicle.",
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
        if (
          resultValue.includes("Electric motor") &&
          resultValue.includes("started")
        ) {
          return {
            success: true,
            message: "Great! You understand method overriding!",
          };
        }
        return {
          success: false,
          message:
            "The result should be 'Electric motor started' from the ElectricCar's start method.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "To override a method, define it again in the child class with the same name but different implementation.",
    solutionHint:
      "class ElectricCar extends Vehicle { start() { return 'Electric motor started'; } }",
  },
  {
    id: 13,
    title: "Exercise 13: Polymorphism",
    description:
      "Polymorphism means 'many forms'. In OOP, it allows different classes to have methods with the same name but different implementations. Each class can respond to the same method call in its own way, making code more flexible and maintainable.",
    example: `class Shape {
  area() {
    return 0;
  }
}
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
const square = new Square(4);
const circle = new Circle(3);
console.log(square.area()); // 16
console.log(circle.area()); // 28.27...`,
    instruction:
      "Create a 'Shape' class with area() returning 0. Create 'Square' (side=4) and 'CircleShape' (radius=3) extending Shape, each with their own area() calculation. Create instances, call area() on each, store results in 'squareArea' and 'circleShapeArea'.",
    starterCode: `// Your code here
`,
    solution: `class Shape {
  area() {
    return 0;
  }
}
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}
class CircleShape extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
const square = new Square(4);
const circleShape = new CircleShape(3);
const squareArea = square.area();
const circleShapeArea = circleShape.area();`,
    watchVariables: ["squareArea", "circleShapeArea"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_inheritance.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Shape")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Shape'.",
          };
        }
        if (!code.includes("class Square extends Shape")) {
          return {
            success: false,
            message: "Make sure Square extends Shape.",
          };
        }
        if (!code.includes("class CircleShape extends Shape")) {
          return {
            success: false,
            message: "Make sure CircleShape extends Shape.",
          };
        }

        const squareAreaMatch = output.match(/squareArea:\s*([\d.]+)/);
        const circleShapeAreaMatch =
          output.match(/circleShapeArea:\s*([\d.]+)/);

        if (!squareAreaMatch || !circleShapeAreaMatch) {
          return {
            success: false,
            message: "Could not find squareArea and circleShapeArea variables.",
          };
        }

        const squareAreaValue = parseFloat(squareAreaMatch[1]);
        const circleShapeAreaValue = parseFloat(circleShapeAreaMatch[1]);

        if (
          squareAreaValue === 16 &&
          Math.abs(circleShapeAreaValue - Math.PI * 9) < 0.01
        ) {
          return {
            success: true,
            message: "Perfect! You understand polymorphism and method override!",
          };
        }
        return {
          success: false,
          message:
            "The areas don't look right. Square(4) should be 16, CircleShape(3) should be ~28.27.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Each subclass overrides area() with its own calculation. Square: side*side, Circle: Math.PI*radius*radius.",
    solutionHint:
      "Create Shape, Square, and CircleShape classes. Each overrides area() with its formula.",
  },
  {
    id: 14,
    title: "Exercise 14: Private Fields (#)",
    description:
      "Private fields are prefixed with # and can only be accessed inside the class. They provide true encapsulation - external code cannot read or modify them directly. You must use methods to interact with private fields. Note: This is a modern JavaScript feature (ES2022) supported in current browsers.",
    example: `class BankAccount {
  #balance = 0; // Private field
  deposit(amount) {
    this.#balance = this.#balance + amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // Error! Cannot access private field`,
    instruction:
      "Create a 'BankAccount' class with a private field '#balance' initialized to 0. Add a deposit(amount) method that adds to #balance, and getBalance() that returns #balance. Create instance 'account', deposit 100, get balance and store in 'balance'.",
    starterCode: `// Your code here
`,
    solution: `class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance = this.#balance + amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount();
account.deposit(100);
const balance = account.getBalance();`,
    watchVariables: ["account", "balance"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_intro.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class BankAccount")) {
          return {
            success: false,
            message: "Make sure you created a class called 'BankAccount'.",
          };
        }
        if (!code.includes("#balance")) {
          return {
            success: false,
            message:
              "Make sure you're using a private field with # prefix: #balance",
          };
        }
        if (!code.includes("deposit") || !code.includes("getBalance")) {
          return {
            success: false,
            message: "Make sure you have deposit and getBalance methods.",
          };
        }

        const balanceMatch = output.match(/balance:\s*(\d+)/);
        if (!balanceMatch) {
          return {
            success: false,
            message: "Could not find the balance variable.",
          };
        }

        const balanceValue = balanceMatch[1];
        if (balanceValue === "100") {
          return {
            success: true,
            message:
              "Excellent! You've learned private fields for encapsulation!",
          };
        }
        return {
          success: false,
          message:
            "The balance should be 100 after depositing. Did you call deposit(100)?",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Declare private fields with # at the class level: #fieldName = value; Access them inside methods with this.#fieldName.",
    solutionHint:
      "#balance = 0; deposit(amount) { this.#balance = this.#balance + amount; }",
  },
  {
    id: 15,
    title: "Exercise 15: Real-World Example (Vehicle Hierarchy)",
    description:
      "Let's put it all together! You'll create a practical vehicle hierarchy demonstrating inheritance, method overriding, and proper use of super. Each class adds specific properties and behaviors while building on the base class.",
    example: `class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  describe() {
    return this.year + " " + this.make + " " + this.model;
  }
}
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  describe() {
    return super.describe() + " (" + this.numDoors + " doors)";
  }
}
const myCar = new Car("Toyota", "Camry", 2023, 4);
console.log(myCar.describe()); // "2023 Toyota Camry (4 doors)"`,
    instruction:
      "Create 'Vehicle' class with make, model, year and describe() method. Create 'Car' extending Vehicle with numDoors, overriding describe() to include door count. Create 'Truck' extending Vehicle with payloadCapacity, overriding describe() to include payload. Create instances of Car and Truck, call describe() on each, store in 'carDesc' and 'truckDesc'.",
    starterCode: `// Your code here
`,
    solution: `class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  describe() {
    return this.year + " " + this.make + " " + this.model;
  }
}
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  describe() {
    return super.describe() + " (" + this.numDoors + " doors)";
  }
}
class Truck extends Vehicle {
  constructor(make, model, year, payloadCapacity) {
    super(make, model, year);
    this.payloadCapacity = payloadCapacity;
  }
  describe() {
    return super.describe() + " (Payload: " + this.payloadCapacity + " lbs)";
  }
}
const car = new Car("Honda", "Civic", 2023, 4);
const truck = new Truck("Ford", "F-150", 2023, 3000);
const carDesc = car.describe();
const truckDesc = truck.describe();`,
    watchVariables: ["car", "truck", "carDesc", "truckDesc"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_class_inheritance.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("class Vehicle")) {
          return {
            success: false,
            message: "Make sure you created a class called 'Vehicle'.",
          };
        }
        if (!code.includes("class Car extends Vehicle")) {
          return {
            success: false,
            message: "Make sure Car extends Vehicle.",
          };
        }
        if (!code.includes("class Truck extends Vehicle")) {
          return {
            success: false,
            message: "Make sure Truck extends Vehicle.",
          };
        }

        const carDescMatch = output.match(/carDesc:\s*(.+?)(\n|$)/);
        const truckDescMatch = output.match(/truckDesc:\s*(.+?)(\n|$)/);

        if (!carDescMatch || !truckDescMatch) {
          return {
            success: false,
            message: "Could not find carDesc and truckDesc variables.",
          };
        }

        const carDescValue = carDescMatch[1].trim();
        const truckDescValue = truckDescMatch[1].trim();

        const carHasInfo = carDescValue.includes("Honda") || carDescValue.includes("Civic");
        const carHasDoors = carDescValue.includes("door");
        const truckHasInfo = truckDescValue.includes("Ford") || truckDescValue.includes("F-150");
        const truckHasPayload = truckDescValue.includes("Payload") || truckDescValue.includes("lbs");

        if (carHasInfo && carHasDoors && truckHasInfo && truckHasPayload) {
          return {
            success: true,
            message:
              "🎉 Congratulations! You've mastered ES6 classes and OOP! You can now create sophisticated object hierarchies with inheritance, encapsulation, and polymorphism!",
          };
        }
        return {
          success: false,
          message:
            "Make sure both descriptions contain vehicle info. Car should mention doors, Truck should mention payload.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Create Vehicle base class, then Car and Truck extending it. Each child class calls super() and adds its own property. Override describe() in each child to call super.describe() and add specific info.",
    solutionHint:
      "Follow the example pattern: base class with constructor and describe(), child classes with super() and overridden describe().",
  },
];
