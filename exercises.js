// Exercise definitions for array methods training
const exercises = [
  {
    id: 1,
    title: "Exercise 1: Using .push()",
    description:
      "The .push() method adds one or more elements to the END of an array and returns the new length of the array. It MODIFIES the original array.",
    example: `const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// You can push multiple elements at once
fruits.push('grape', 'mango');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'mango']`,
    instruction:
      "Create an array called 'shoppingCart' with ['milk', 'bread']. Then use .push() to add 'eggs' to the cart.",
    starterCode: `// Your code here
const shoppingCart = ['milk', 'bread'];`,
    solution: `const shoppingCart = ['milk', 'bread'];
shoppingCart.push('eggs');`,
    watchVariables: ["shoppingCart"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_push.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    },
    validate: function (code, output) {
      try {
        if (!code.includes(".push(")) {
          return {
            success: false,
            message: "Make sure you're using the .push() method.",
          };
        }
        // Extract the shoppingCart array value
        const cartMatch = output.match(/shoppingCart:\s*\[([\s\S]*?)\]/);

        if (!cartMatch) {
          return {
            success: false,
            message:
              "Could not find the shoppingCart variable. Make sure you created it correctly.",
          };
        }

        const cartValue = cartMatch[0];

        // Check that it has milk, bread, and eggs
        const hasCorrectOutput =
          cartValue.includes("milk") &&
          cartValue.includes("bread") &&
          cartValue.includes("eggs");

        if (hasCorrectOutput) {
          return {
            success: true,
            message:
              "Perfect! You've successfully used .push() to add 'eggs' to the shopping cart!",
          };
        }
        return {
          success: false,
          message:
            "Make sure you're using .push('eggs') to add exactly one item (eggs) to the cart.",
        };
      } catch (e) {
        return {
          success: false,
          message: "There's an error in your code. Check your syntax!",
        };
      }
    },
    hint: "Think about which method adds elements to the end of an array. How do you add a single item?",
    solutionHint: "Use: shoppingCart.push('eggs');",
  },
  {
    id: 2,
    title: "Exercise 2: Using .pop()",
    description:
      "The .pop() method removes the LAST element from an array and returns that removed element. It MODIFIES the original array.",
    example: `const colors = ['red', 'blue', 'green', 'yellow'];
const removed = colors.pop();
console.log(removed); // 'yellow'
console.log(colors);  // ['red', 'blue', 'green']`,
    instruction:
      "Create an array called 'stack' with [1, 2, 3, 4, 5]. Use .pop() to remove the last element and store it in a variable called 'lastItem'.",
    starterCode: `// Your code here
const stack = [1, 2, 3, 4, 5];`,
    solution: `const stack = [1, 2, 3, 4, 5];
const lastItem = stack.pop();`,
    watchVariables: ["stack", "lastItem"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_pop.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    },
    validate: function (code, output) {
      if (!code.includes(".pop()")) {
        return {
          success: false,
          message: "Make sure you're using the .pop() method.",
        };
      }
      if (!code.includes("lastItem")) {
        return {
          success: false,
          message:
            "Make sure you're storing the result in a variable called 'lastItem'.",
        };
      }
      // Extract the stack and lastItem values
      const stackMatch = output.match(/stack:\s*\[([\s\S]*?)\]/);
      const lastItemMatch = output.match(/lastItem:\s*(\d+)/);

      if (!stackMatch || !lastItemMatch) {
        return {
          success: false,
          message:
            "Could not find stack or lastItem. Make sure you created both correctly.",
        };
      }

      const stackValue = stackMatch[0];
      const lastItemValue = lastItemMatch[1];

      // Check that stack has 1,2,3,4 but NOT 5, and lastItem is 5
      const hasCorrectStack =
        stackValue.includes("1") &&
        stackValue.includes("4") &&
        !stackValue.includes("5");
      const hasCorrectLastItem = lastItemValue === "5";

      if (hasCorrectStack && hasCorrectLastItem) {
        return {
          success: true,
          message:
            "Excellent! You've mastered .pop() and successfully removed the last element!",
        };
      }
      return {
        success: false,
        message:
          "The stack should have [1,2,3,4] and lastItem should be 5. Did you pop exactly once?",
      };
    },
    hint: "You need to remove the last element AND store it in a variable. Which method removes from the end?",
    solutionHint: "Use: const lastItem = stack.pop();",
  },
  {
    id: 3,
    title: "Exercise 3: Using .shift()",
    description:
      "The .shift() method removes the FIRST element from an array and returns that removed element. It MODIFIES the original array and shifts all remaining elements down.",
    example: `const queue = ['first', 'second', 'third'];
const removed = queue.shift();
console.log(removed); // 'first'
console.log(queue);   // ['second', 'third']`,
    instruction:
      "Create an array called 'waitingList' with ['Alice', 'Bob', 'Charlie', 'David']. Use .shift() to remove the first person and store them in 'nextPerson'.",
    starterCode: `// Your code here
const waitingList = ['Alice', 'Bob', 'Charlie', 'David'];`,
    solution: `const waitingList = ['Alice', 'Bob', 'Charlie', 'David'];
const nextPerson = waitingList.shift();`,
    watchVariables: ["waitingList", "nextPerson"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_shift.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    },
    validate: function (code, output) {
      if (!code.includes(".shift()")) {
        return {
          success: false,
          message: "Make sure you're using the .shift() method.",
        };
      }
      if (!code.includes("nextPerson")) {
        return {
          success: false,
          message:
            "Make sure you're storing the result in a variable called 'nextPerson'.",
        };
      }
      // Extract the waitingList and nextPerson values
      const listMatch = output.match(/waitingList:\s*\[([\s\S]*?)\]/);
      const personMatch = output.match(/nextPerson:\s*"?([A-Za-z]+)"?/);

      if (!listMatch || !personMatch) {
        return {
          success: false,
          message:
            "Could not find waitingList or nextPerson. Make sure you created both correctly.",
        };
      }

      const listValue = listMatch[0];
      const personValue = personMatch[1];

      // Check that waitingList has Bob, Charlie, David (not Alice) and nextPerson is Alice
      const hasCorrectList =
        listValue.includes("Bob") &&
        listValue.includes("Charlie") &&
        listValue.includes("David") &&
        !listValue.includes("Alice");
      const hasCorrectPerson = personValue === "Alice";

      if (hasCorrectList && hasCorrectPerson) {
        return {
          success: true,
          message:
            "Great job! You've successfully used .shift() to remove the first element!",
        };
      }
      return {
        success: false,
        message:
          "The waitingList should have [Bob, Charlie, David] and nextPerson should be Alice.",
      };
    },
    hint: "You need to remove the FIRST element (not last). Which method removes from the beginning and returns that element?",
    solutionHint: "Use: const nextPerson = waitingList.shift();",
  },
  {
    id: 4,
    title: "Exercise 4: Using .unshift()",
    description:
      "The .unshift() method adds one or more elements to the BEGINNING of an array and returns the new length. It MODIFIES the original array.",
    example: `const numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4]

// You can unshift multiple elements
numbers.unshift(-1, 0);
console.log(numbers); // [-1, 0, 1, 2, 3, 4]`,
    instruction:
      "Create an array called 'priorities' with ['medium', 'low']. Use .unshift() to add 'high' to the beginning.",
    starterCode: `// Your code here
const priorities = ['medium', 'low'];`,
    solution: `const priorities = ['medium', 'low'];
priorities.unshift('high');`,
    watchVariables: ["priorities"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_unshift.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    },
    validate: function (code, output) {
      if (!code.includes(".unshift(")) {
        return {
          success: false,
          message: "Make sure you're using the .unshift() method.",
        };
      }

      // Extract the priorities array value
      const prioritiesMatch = output.match(/priorities:\s*\[([\s\S]*?)\]/);

      if (!prioritiesMatch) {
        return {
          success: false,
          message:
            "Could not find the priorities variable. Make sure you created it correctly.",
        };
      }

      const prioritiesValue = prioritiesMatch[0];

      // Check that priorities has high, medium, low in that order
      const hasCorrectOutput =
        prioritiesValue.includes("high") &&
        prioritiesValue.includes("medium") &&
        prioritiesValue.includes("low") &&
        prioritiesValue.indexOf("high") < prioritiesValue.indexOf("medium") &&
        prioritiesValue.indexOf("medium") < prioritiesValue.indexOf("low");

      if (hasCorrectOutput) {
        return {
          success: true,
          message:
            "Perfect! You've mastered .unshift() and added 'high' to the beginning!",
        };
      }
      return {
        success: false,
        message:
          "The priorities array should have exactly [high, medium, low] in that order. Did you unshift 'high' once?",
      };
    },
    hint: "You need to add an element to the BEGINNING. The opposite of push() that adds to the end is...?",
    solutionHint: "Use: priorities.unshift('high');",
  },
  {
    id: 5,
    title: "Exercise 5: Using .slice()",
    description:
      "The .slice() method returns a SHALLOW COPY of a portion of an array. It does NOT modify the original array. Syntax: array.slice(start, end) - extracts from 'start' up to (but not including) 'end'.",
    example: `const animals = ['cat', 'dog', 'elephant', 'fox', 'giraffe'];
const someAnimals = animals.slice(1, 4);
console.log(someAnimals); // ['dog', 'elephant', 'fox']
console.log(animals);     // ['cat', 'dog', 'elephant', 'fox', 'giraffe'] - unchanged!

// Negative indices count from the end
const lastTwo = animals.slice(-2);
console.log(lastTwo); // ['fox', 'giraffe']`,
    instruction:
      "Create an array called 'week' with all days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']. Use .slice() to create a new array called 'weekdays' containing only Monday through Friday.",
    starterCode: `// Your code here
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];`,
    solution: `const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekdays = week.slice(0, 5);`,
    watchVariables: ["week", "weekdays"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_slice_array.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
    },
    validate: function (code, output) {
      if (!code.includes(".slice(")) {
        return {
          success: false,
          message: "Make sure you're using the .slice() method.",
        };
      }
      if (!code.includes("weekdays")) {
        return {
          success: false,
          message:
            "Make sure you're storing the result in a variable called 'weekdays'.",
        };
      }
      // Extract just the weekdays value from output (look for the line with weekdays:)
      // Use [\s\S] to match any character including newlines
      const weekdaysMatch = output.match(/weekdays:\s*(\[[\s\S]*?\])/);
      const weekMatch = output.match(/week:\s*(\[[\s\S]*?\])/);

      if (!weekdaysMatch || !weekMatch) {
        return {
          success: false,
          message:
            "Could not find the weekdays or week variables. Make sure you created both correctly.",
        };
      }

      const weekdaysValue = weekdaysMatch[1];
      const weekValue = weekMatch[1];

      // Check that weekdays has Monday-Friday but NOT Saturday/Sunday
      const hasCorrectWeekdays =
        weekdaysValue.includes("Monday") &&
        weekdaysValue.includes("Friday") &&
        !weekdaysValue.includes("Saturday") &&
        !weekdaysValue.includes("Sunday");

      // Check that week still has all 7 days including Saturday and Sunday
      const hasCorrectWeek =
        weekValue.includes("Sunday") && weekValue.includes("Saturday");

      if (hasCorrectWeekdays && hasCorrectWeek) {
        return {
          success: true,
          message:
            "Excellent! You've mastered .slice() and created a copy without modifying the original!",
        };
      }
      if (!hasCorrectWeekdays) {
        return {
          success: false,
          message:
            "The weekdays array should only contain Monday through Friday (5 days). Use .slice(0, 5).",
        };
      }
      return {
        success: false,
        message:
          "Make sure the original 'week' array is unchanged (should still have all 7 days).",
      };
    },
    hint: "slice() needs two parameters: start index and end index (not inclusive). What index does Monday start at? What would be the end index for Friday?",
    solutionHint:
      "Use: const weekdays = week.slice(0, 5); // Extracts indices 0-4 (first 5 elements)",
  },
  {
    id: 6,
    title: "Exercise 6: Using .splice()",
    description:
      "The .splice() method is the most powerful array method. It can remove, replace, or add elements at any position. Syntax: array.splice(start, deleteCount, item1, item2, ...). It MODIFIES the original array and returns an array of deleted elements.",
    example: `const letters = ['a', 'b', 'c', 'd', 'e'];

// Remove 2 elements starting at index 2
letters.splice(2, 2);
console.log(letters); // ['a', 'b', 'e']

// Add elements at index 1 (delete 0 elements)
letters.splice(1, 0, 'x', 'y');
console.log(letters); // ['a', 'x', 'y', 'b', 'e']

// Replace elements: remove 2, add 1
letters.splice(1, 2, 'z');
console.log(letters); // ['a', 'z', 'b', 'e']`,
    instruction:
      "Create an array called 'playlist' with ['Song1', 'Song2', 'OldSong', 'Song4']. Use .splice() to replace 'OldSong' at index 2 with 'NewSong'.",
    starterCode: `// Your code here
const playlist = ['Song1', 'Song2', 'OldSong', 'Song4'];`,
    solution: `const playlist = ['Song1', 'Song2', 'OldSong', 'Song4'];
playlist.splice(2, 1, 'NewSong');`,
    watchVariables: ["playlist"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_splice.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
    },
    validate: function (code, output) {
      if (!code.includes(".splice(")) {
        return {
          success: false,
          message: "Make sure you're using the .splice() method.",
        };
      }
      // Extract the playlist array value
      const playlistMatch = output.match(/playlist:\s*\[([\s\S]*?)\]/);

      if (!playlistMatch) {
        return {
          success: false,
          message:
            "Could not find the playlist variable. Make sure you created it correctly.",
        };
      }

      const playlistValue = playlistMatch[0];

      // Check that playlist has Song1, Song2, NewSong, Song4 (not OldSong) in correct order
      const hasCorrectPlaylist =
        playlistValue.includes("Song1") &&
        playlistValue.includes("Song2") &&
        playlistValue.includes("NewSong") &&
        playlistValue.includes("Song4") &&
        !playlistValue.includes("OldSong") &&
        playlistValue.indexOf("Song1") < playlistValue.indexOf("Song2") &&
        playlistValue.indexOf("Song2") < playlistValue.indexOf("NewSong") &&
        playlistValue.indexOf("NewSong") < playlistValue.indexOf("Song4");

      if (hasCorrectPlaylist) {
        return {
          success: true,
          message:
            "Amazing! You've mastered .splice() and successfully replaced an element!",
        };
      }
      if (playlistValue.includes("OldSong")) {
        return {
          success: false,
          message:
            "OldSong should be removed. Use .splice(2, 1, 'NewSong') to replace it.",
        };
      }
      return {
        success: false,
        message:
          "The playlist should have exactly [Song1, Song2, NewSong, Song4] in that order. Check your splice parameters.",
      };
    },
    hint: "splice() takes 3 parameters: starting index, how many to delete, and what to add. OldSong is at index 2, you want to delete 1 item and add NewSong.",
    solutionHint:
      "Use: playlist.splice(2, 1, 'NewSong'); // At index 2, delete 1, add 'NewSong'",
  },
  {
    id: 7,
    title: "Challenge: Combining Methods",
    description:
      "Now let's combine what you've learned! You can chain multiple array methods together to perform complex operations.",
    example: `const tasks = ['task1', 'task2', 'task3'];
tasks.push('task4');        // Add to end
tasks.shift();              // Remove from beginning
tasks.unshift('urgent');    // Add to beginning
console.log(tasks);         // ['urgent', 'task2', 'task3', 'task4']`,
    instruction:
      "Create an array called 'inventory' with ['laptop', 'mouse', 'keyboard']. Perform these operations in order: 1) Add 'monitor' to the end, 2) Remove the first item, 3) Add 'headphones' to the beginning.",
    starterCode: `// Your code here
const inventory = ['laptop', 'mouse', 'keyboard'];`,
    solution: `const inventory = ['laptop', 'mouse', 'keyboard'];
inventory.push('monitor');
inventory.shift();
inventory.unshift('headphones');`,
    watchVariables: ["inventory"],
    links: {
      w3schools: "https://www.w3schools.com/jsref/jsref_push.asp",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    },
    validate: function (code, output) {
      if (!code.includes(".push(")) {
        return {
          success: false,
          message:
            "Make sure you're using .push() to add 'monitor' to the end.",
        };
      }
      if (!code.includes(".shift()")) {
        return {
          success: false,
          message: "Make sure you're using .shift() to remove the first item.",
        };
      }
      if (!code.includes(".unshift(")) {
        return {
          success: false,
          message:
            "Make sure you're using .unshift() to add 'headphones' to the beginning.",
        };
      }

      // Extract the inventory array value
      const inventoryMatch = output.match(/inventory:\s*\[([\s\S]*?)\]/);

      if (!inventoryMatch) {
        return {
          success: false,
          message:
            "Could not find the inventory variable. Make sure you created it correctly.",
        };
      }

      const inventoryValue = inventoryMatch[0];

      // Check that inventory has headphones, mouse, keyboard, monitor (not laptop) in correct order
      const hasCorrectInventory =
        inventoryValue.includes("headphones") &&
        inventoryValue.includes("mouse") &&
        inventoryValue.includes("keyboard") &&
        inventoryValue.includes("monitor") &&
        !inventoryValue.includes("laptop") &&
        inventoryValue.indexOf("headphones") <
          inventoryValue.indexOf("mouse") &&
        inventoryValue.indexOf("mouse") < inventoryValue.indexOf("keyboard") &&
        inventoryValue.indexOf("keyboard") < inventoryValue.indexOf("monitor");

      if (hasCorrectInventory) {
        return {
          success: true,
          message:
            "Incredible! You've successfully combined multiple array methods!",
        };
      }
      return {
        success: false,
        message:
          "The inventory should be [headphones, mouse, keyboard, monitor] in that order. Check your operations.",
      };
    },
    hint: "Do the operations in order: (1) add to end, (2) remove from beginning, (3) add to beginning. Think about which methods do each of these.",
    solutionHint:
      "Use: inventory.push('monitor'); inventory.shift(); inventory.unshift('headphones');",
  },
];
