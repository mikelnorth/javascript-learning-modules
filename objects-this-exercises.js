// Exercise definitions for the this keyword training
const exercises = [
  {
    id: 1,
    title: "Exercise 1: this in Object Method",
    description:
      "Inside an object method, 'this' refers to the object that owns the method. You can use 'this' to access other properties of the same object.",
    example: `const person = {
  name: "Alice",
  greet() {
    return "Hello, I'm " + this.name;
  }
};
console.log(person.greet()); // "Hello, I'm Alice"`,
    instruction:
      "Create an object called 'person' with a property 'name' set to 'Alice' and a method 'greet()' that returns 'Hello, I\\'m Alice' using this.name. Call person.greet() and store the result in a variable called 'greeting'.",
    starterCode: `// Your code here
`,
    solution: `const person = {
  name: "Alice",
  greet() {
    return "Hello, I'm " + this.name;
  }
};
const greeting = person.greet();`,
    watchVariables: ["person", "greeting"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_this.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("person")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'person'.",
          };
        }
        if (!code.includes("this")) {
          return {
            success: false,
            message: "Make sure you're using 'this' to access the name property.",
          };
        }
        if (!code.includes("greeting")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'greeting'.",
          };
        }

        const greetingMatch = output.match(/greeting:\s*(.+?)(\n|$)/);
        if (!greetingMatch) {
          return {
            success: false,
            message: "Could not find the greeting variable.",
          };
        }

        const greetingValue = greetingMatch[1].trim();
        if (greetingValue.includes("Hello, I'm Alice")) {
          return {
            success: true,
            message:
              "Perfect! You've learned how 'this' refers to the object in a method!",
          };
        }
        return {
          success: false,
          message:
            "The greeting should be 'Hello, I\\'m Alice'. Did you use this.name in the method?",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use 'this.name' inside the method to access the object's name property.",
    solutionHint:
      "const person = { name: 'Alice', greet() { return \"Hello, I'm \" + this.name; } }; const greeting = person.greet();",
  },
  {
    id: 2,
    title: "Exercise 2: this with Multiple Properties",
    description:
      "You can use 'this' to access multiple properties of the same object. This is useful for creating methods that work with the object's data.",
    example: `const calculator = {
  a: 10,
  b: 5,
  add() {
    return this.a + this.b;
  }
};
console.log(calculator.add()); // 15`,
    instruction:
      "Create a 'calculator' object with properties 'a' (10) and 'b' (5). Add methods 'add()' (returns this.a + this.b) and 'multiply()' (returns this.a * this.b). Store calculator.add() in 'sum' and calculator.multiply() in 'product'.",
    starterCode: `// Your code here
`,
    solution: `const calculator = {
  a: 10,
  b: 5,
  add() {
    return this.a + this.b;
  },
  multiply() {
    return this.a * this.b;
  }
};
const sum = calculator.add();
const product = calculator.multiply();`,
    watchVariables: ["calculator", "sum", "product"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_this.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("calculator")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'calculator'.",
          };
        }
        if (!code.includes("sum")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'sum'.",
          };
        }
        if (!code.includes("product")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'product'.",
          };
        }

        const sumMatch = output.match(/sum:\s*(\d+)/);
        const productMatch = output.match(/product:\s*(\d+)/);

        if (!sumMatch || !productMatch) {
          return {
            success: false,
            message: "Could not find sum and product values.",
          };
        }

        const sumValue = parseInt(sumMatch[1]);
        const productValue = parseInt(productMatch[1]);

        if (sumValue === 15 && productValue === 50) {
          return {
            success: true,
            message:
              "Excellent! You've used 'this' to access multiple properties!",
          };
        }
        return {
          success: false,
          message:
            "The sum should be 15 and product should be 50. Check your calculations using this.a and this.b.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Both methods should use 'this.a' and 'this.b' to perform their calculations.",
    solutionHint:
      "const calculator = { a: 10, b: 5, add() { return this.a + this.b; }, multiply() { return this.a * this.b; } }; const sum = calculator.add(); const product = calculator.multiply();",
  },
  {
    id: 3,
    title: "Exercise 3: Arrow Functions and this",
    description:
      "Arrow functions do NOT have their own 'this'. They inherit 'this' from the surrounding scope. For object methods, use regular functions, not arrow functions.",
    example: `const team = {
  name: "Dev Team",
  getName() {
    return this.name; // Works!
  }
};
console.log(team.getName()); // "Dev Team"`,
    instruction:
      "Create a 'team' object with property 'name' set to 'Dev Team' and a regular method 'getName()' (NOT arrow function) that returns this.name. Store team.getName() in 'teamName'.",
    starterCode: `// Your code here
`,
    solution: `const team = {
  name: "Dev Team",
  getName() {
    return this.name;
  }
};
const teamName = team.getName();`,
    watchVariables: ["team", "teamName"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_arrow_function.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("team")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'team'.",
          };
        }
        if (code.includes("=>")) {
          return {
            success: false,
            message:
              "Don't use arrow functions for object methods! Use regular method syntax: getName() { }",
          };
        }
        if (!code.includes("teamName")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'teamName'.",
          };
        }

        const teamNameMatch = output.match(/teamName:\s*(.+?)(\n|$)/);
        if (!teamNameMatch) {
          return {
            success: false,
            message: "Could not find the teamName variable.",
          };
        }

        const teamNameValue = teamNameMatch[1].trim();
        if (teamNameValue.includes("Dev Team")) {
          return {
            success: true,
            message:
              "Great! You understand that regular functions work correctly with 'this' in object methods!",
          };
        }
        return {
          success: false,
          message:
            "The teamName should be 'Dev Team'. Make sure you're calling team.getName().",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use the method shorthand syntax: getName() { return this.name; } - NOT an arrow function.",
    solutionHint:
      "const team = { name: 'Dev Team', getName() { return this.name; } }; const teamName = team.getName();",
  },
  {
    id: 4,
    title: "Exercise 4: Method Shorthand with this",
    description:
      "ES6 method shorthand is the preferred way to define methods that use 'this'. It works exactly like the traditional function syntax for 'this' binding.",
    example: `const wallet = {
  balance: 100,
  deposit(amount) {
    this.balance += amount;
  },
  getBalance() {
    return this.balance;
  }
};
wallet.deposit(50);
console.log(wallet.getBalance()); // 150`,
    instruction:
      "Create a 'wallet' object with 'balance' (100), a method 'deposit(amount)' that adds amount to this.balance, and a method 'getBalance()' that returns this.balance. Call wallet.deposit(50), then store wallet.getBalance() in 'currentBalance'.",
    starterCode: `// Your code here
`,
    solution: `const wallet = {
  balance: 100,
  deposit(amount) {
    this.balance += amount;
  },
  getBalance() {
    return this.balance;
  }
};
wallet.deposit(50);
const currentBalance = wallet.getBalance();`,
    watchVariables: ["wallet", "currentBalance"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_this.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("wallet")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'wallet'.",
          };
        }
        if (!code.includes("deposit")) {
          return {
            success: false,
            message: "Make sure you created a deposit method.",
          };
        }
        if (!code.includes("currentBalance")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'currentBalance'.",
          };
        }

        const currentBalanceMatch = output.match(/currentBalance:\s*(\d+)/);
        if (!currentBalanceMatch) {
          return {
            success: false,
            message: "Could not find the currentBalance variable.",
          };
        }

        const balanceValue = parseInt(currentBalanceMatch[1]);
        if (balanceValue === 150) {
          return {
            success: true,
            message:
              "Perfect! You've used 'this' to modify and read object properties!",
          };
        }
        return {
          success: false,
          message:
            "The currentBalance should be 150 after depositing 50. Make sure deposit modifies this.balance.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "The deposit method should use 'this.balance += amount' to modify the balance property.",
    solutionHint:
      "const wallet = { balance: 100, deposit(amount) { this.balance += amount; }, getBalance() { return this.balance; } }; wallet.deposit(50); const currentBalance = wallet.getBalance();",
  },
  {
    id: 5,
    title: "Exercise 5: this in Constructor",
    description:
      "In constructor functions, 'this' refers to the new object being created. This is how you set properties on new instances.",
    example: `function Car(make, model) {
  this.make = make;
  this.model = model;
}
const myCar = new Car("Honda", "Civic");
console.log(myCar.make); // "Honda"`,
    instruction:
      "Create a constructor function 'Car' that takes 'make' and 'model' parameters and assigns them to this.make and this.model. Create an instance 'myCar' with make 'Honda' and model 'Civic'. Store myCar.make in 'carMake'.",
    starterCode: `// Your code here
`,
    solution: `function Car(make, model) {
  this.make = make;
  this.model = model;
}
const myCar = new Car("Honda", "Civic");
const carMake = myCar.make;`,
    watchVariables: ["myCar", "carMake"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_object_constructors.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("function Car")) {
          return {
            success: false,
            message:
              "Make sure you created a constructor function called 'Car'.",
          };
        }
        if (!code.includes("new Car")) {
          return {
            success: false,
            message: "Make sure you're using 'new Car()' to create an instance.",
          };
        }
        if (!code.includes("carMake")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'carMake'.",
          };
        }

        const carMakeMatch = output.match(/carMake:\s*(.+?)(\n|$)/);
        if (!carMakeMatch) {
          return {
            success: false,
            message: "Could not find the carMake variable.",
          };
        }

        const carMakeValue = carMakeMatch[1].trim();
        if (carMakeValue.includes("Honda")) {
          return {
            success: true,
            message:
              "Excellent! You understand how 'this' works in constructor functions!",
          };
        }
        return {
          success: false,
          message:
            "The carMake should be 'Honda'. Make sure you're accessing myCar.make.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "In the constructor, use 'this.make = make' to assign the parameter to the new object's property.",
    solutionHint:
      "function Car(make, model) { this.make = make; this.model = model; } const myCar = new Car('Honda', 'Civic'); const carMake = myCar.make;",
  },
  {
    id: 6,
    title: "Exercise 6: Losing this Context",
    description:
      "When you extract a method from an object, it loses its connection to the object. You can use bind() to create a new function with a fixed 'this' value.",
    example: `const user = {
  name: "Bob",
  getName() {
    return this.name;
  }
};
const fn = user.getName.bind(user);
console.log(fn()); // "Bob"`,
    instruction:
      "Create a 'user' object with 'name' set to 'Bob' and a 'getName()' method returning this.name. Use bind() to create 'boundGetName' bound to user. Call boundGetName() and store in 'result'.",
    starterCode: `// Your code here
`,
    solution: `const user = {
  name: "Bob",
  getName() {
    return this.name;
  }
};
const boundGetName = user.getName.bind(user);
const result = boundGetName();`,
    watchVariables: ["user", "result"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_function_bind.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("user")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'user'.",
          };
        }
        if (!code.includes("bind")) {
          return {
            success: false,
            message: "Make sure you're using the bind() method.",
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
              "Perfect! You've learned how to use bind() to preserve 'this' context!",
          };
        }
        return {
          success: false,
          message:
            "The result should be 'Bob'. Make sure you bound the function with bind(user).",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use user.getName.bind(user) to create a bound function, then call it.",
    solutionHint:
      "const user = { name: 'Bob', getName() { return this.name; } }; const boundGetName = user.getName.bind(user); const result = boundGetName();",
  },
  {
    id: 7,
    title: "Exercise 7: bind() Method",
    description:
      "Function.prototype.bind() creates a new function with 'this' permanently set to the provided value. This is useful when passing methods as callbacks.",
    example: `const printer = {
  prefix: ">>>",
  print(msg) {
    return this.prefix + " " + msg;
  }
};
const boundPrint = printer.print.bind(printer);
console.log(boundPrint("hello")); // ">>> hello"`,
    instruction:
      "Create a 'printer' object with 'prefix' set to '>>>' and a method 'print(msg)' that returns this.prefix + ' ' + msg. Use bind() to create 'boundPrint' bound to printer. Call boundPrint('hello') and store in 'output'.",
    starterCode: `// Your code here
`,
    solution: `const printer = {
  prefix: ">>>",
  print(msg) {
    return this.prefix + " " + msg;
  }
};
const boundPrint = printer.print.bind(printer);
const output = boundPrint("hello");`,
    watchVariables: ["printer", "output"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_function_bind.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("printer")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'printer'.",
          };
        }
        if (!code.includes("bind")) {
          return {
            success: false,
            message: "Make sure you're using the bind() method.",
          };
        }
        if (!code.includes("output")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'output'.",
          };
        }

        const outputMatch = output.match(/output:\s*(.+?)(\n|$)/);
        if (!outputMatch) {
          return {
            success: false,
            message: "Could not find the output variable.",
          };
        }

        const outputValue = outputMatch[1].trim();
        if (outputValue.includes(">>> hello")) {
          return {
            success: true,
            message:
              "Excellent! You've mastered using bind() to fix 'this' context!",
          };
        }
        return {
          success: false,
          message:
            "The output should be '>>> hello'. Make sure your print method uses this.prefix.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use printer.print.bind(printer) to create a bound function that will always have the correct 'this'.",
    solutionHint:
      "const printer = { prefix: '>>>', print(msg) { return this.prefix + ' ' + msg; } }; const boundPrint = printer.print.bind(printer); const output = boundPrint('hello');",
  },
  {
    id: 8,
    title: "Exercise 8: call() Method",
    description:
      "Function.prototype.call() immediately invokes a function with a specified 'this' value and individual arguments. It's useful for borrowing methods.",
    example: `function introduce(greeting) {
  return greeting + ", I'm " + this.name;
}
const person1 = { name: "Bob" };
const message = introduce.call(person1, "Hi");
console.log(message); // "Hi, I'm Bob"`,
    instruction:
      "Create a standalone function 'introduce(greeting)' that returns greeting + \", I'm \" + this.name. Create 'person1' object with name 'Bob'. Use introduce.call(person1, 'Hi') and store in 'message'.",
    starterCode: `// Your code here
`,
    solution: `function introduce(greeting) {
  return greeting + ", I'm " + this.name;
}
const person1 = { name: "Bob" };
const message = introduce.call(person1, "Hi");`,
    watchVariables: ["message"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_function_call.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("function introduce")) {
          return {
            success: false,
            message: "Make sure you created a function called 'introduce'.",
          };
        }
        if (!code.includes("call")) {
          return {
            success: false,
            message: "Make sure you're using the call() method.",
          };
        }
        if (!code.includes("message")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'message'.",
          };
        }

        const messageMatch = output.match(/message:\s*(.+?)(\n|$)/);
        if (!messageMatch) {
          return {
            success: false,
            message: "Could not find the message variable.",
          };
        }

        const messageValue = messageMatch[1].trim();
        if (messageValue.includes("Hi, I'm Bob")) {
          return {
            success: true,
            message:
              "Perfect! You've learned how to use call() to set 'this' explicitly!",
          };
        }
        return {
          success: false,
          message:
            "The message should be \"Hi, I'm Bob\". Make sure you're using call(person1, 'Hi').",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use introduce.call(person1, 'Hi') to invoke the function with person1 as 'this'.",
    solutionHint:
      "function introduce(greeting) { return greeting + \", I'm \" + this.name; } const person1 = { name: 'Bob' }; const message = introduce.call(person1, 'Hi');",
  },
  {
    id: 9,
    title: "Exercise 9: apply() Method",
    description:
      "Function.prototype.apply() is like call(), but takes an array of arguments instead of individual arguments. Useful when you have arguments in an array.",
    example: `function formatInfo(title, city) {
  return this.name + " - " + title + " from " + city;
}
const obj = { name: "Eve" };
const info = formatInfo.apply(obj, ["Engineer", "NYC"]);
console.log(info); // "Eve - Engineer from NYC"`,
    instruction:
      "Create a function 'formatInfo(title, city)' that returns this.name + ' - ' + title + ' from ' + city. Create 'obj' with name 'Eve'. Use formatInfo.apply(obj, ['Engineer', 'NYC']) and store in 'info'.",
    starterCode: `// Your code here
`,
    solution: `function formatInfo(title, city) {
  return this.name + " - " + title + " from " + city;
}
const obj = { name: "Eve" };
const info = formatInfo.apply(obj, ["Engineer", "NYC"]);`,
    watchVariables: ["info"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_function_apply.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("function formatInfo")) {
          return {
            success: false,
            message: "Make sure you created a function called 'formatInfo'.",
          };
        }
        if (!code.includes("apply")) {
          return {
            success: false,
            message: "Make sure you're using the apply() method.",
          };
        }
        if (!code.includes("info")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'info'.",
          };
        }

        const infoMatch = output.match(/info:\s*(.+?)(\n|$)/);
        if (!infoMatch) {
          return {
            success: false,
            message: "Could not find the info variable.",
          };
        }

        const infoValue = infoMatch[1].trim();
        if (infoValue.includes("Eve - Engineer from NYC")) {
          return {
            success: true,
            message:
              "Excellent! You've mastered apply() and understand the difference from call()!",
          };
        }
        return {
          success: false,
          message:
            "The info should be 'Eve - Engineer from NYC'. Make sure you're using apply with an array of arguments.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use formatInfo.apply(obj, ['Engineer', 'NYC']) - note that apply takes an array of arguments.",
    solutionHint:
      "function formatInfo(title, city) { return this.name + ' - ' + title + ' from ' + city; } const obj = { name: 'Eve' }; const info = formatInfo.apply(obj, ['Engineer', 'NYC']);",
  },
  {
    id: 10,
    title: "Exercise 10: Arrow Function as Method (Pitfall)",
    description:
      "Arrow functions should NOT be used as object methods because they don't have their own 'this'. They inherit 'this' from their surrounding scope, which often leads to unexpected behavior.",
    example: `const goodObj = {
  value: 42,
  getValue() {
    return this.value; // Works!
  }
};
const badObj = {
  value: 42,
  getValue: () => {
    return this.value; // Doesn't work - 'this' is not badObj
  }
};`,
    instruction:
      "Create 'goodObj' with value 42 and a regular method getValue() returning this.value. Create 'badObj' with value 42 and an arrow function getValue: () => this.value. Call both methods and store in 'goodResult' and 'badResult'.",
    starterCode: `// Your code here
`,
    solution: `const goodObj = {
  value: 42,
  getValue() {
    return this.value;
  }
};
const badObj = {
  value: 42,
  getValue: () => {
    return this.value;
  }
};
const goodResult = goodObj.getValue();
const badResult = badObj.getValue();`,
    watchVariables: ["goodResult", "badResult"],
    links: {
      w3schools: "https://www.w3schools.com/js/js_arrow_function.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
    },
    validate: function (code, output) {
      try {
        if (!code.includes("goodObj")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'goodObj'.",
          };
        }
        if (!code.includes("badObj")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'badObj'.",
          };
        }
        if (!code.includes("=>")) {
          return {
            success: false,
            message:
              "Make sure badObj uses an arrow function: getValue: () => { }",
          };
        }
        if (!code.includes("goodResult")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'goodResult'.",
          };
        }
        if (!code.includes("badResult")) {
          return {
            success: false,
            message: "Make sure you created a variable called 'badResult'.",
          };
        }

        const goodResultMatch = output.match(/goodResult:\s*(\d+)/);
        const badResultMatch = output.match(/badResult:\s*(undefined|null|\d+)/);

        if (!goodResultMatch) {
          return {
            success: false,
            message: "Could not find the goodResult variable.",
          };
        }

        const goodValue = parseInt(goodResultMatch[1]);
        const badValue = badResultMatch ? badResultMatch[1] : "undefined";

        if (goodValue === 42 && badValue === "undefined") {
          return {
            success: true,
            message:
              "Perfect! You understand why arrow functions shouldn't be used as object methods!",
          };
        } else if (goodValue === 42) {
          return {
            success: false,
            message:
              "Good start, but badResult should be undefined. Make sure badObj uses an arrow function for getValue.",
          };
        }
        return {
          success: false,
          message:
            "The goodResult should be 42 and badResult should be undefined.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Use getValue() { } for goodObj and getValue: () => { } for badObj. Notice the difference!",
    solutionHint:
      "const goodObj = { value: 42, getValue() { return this.value; } }; const badObj = { value: 42, getValue: () => { return this.value; } }; const goodResult = goodObj.getValue(); const badResult = badObj.getValue();",
  },
];
