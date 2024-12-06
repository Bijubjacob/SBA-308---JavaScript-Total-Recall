
// A. Q + A
// How do we assign a value to a variable?

// In Java, you assign a value to a variable using the assignment operator (=).
// Syntax:

// variableName = value;


// How do we change the value of a variable?
// We can change the value of a variable by simply assigning a new value to it using the assignment operator (=).

// int x = 10;

// x = 20;

// How do we assign an existing variable to a new variable?
// We can assign an existing variable to a new variable using the assignment operator (=).

// int x = 10; // Existing variable
// int y; // New variable

// y = x; // Assigning the value of x to y

// Remind me, what are declare, assign, and define?

// These terms relate to variables and methods:

// Declare:
// Declaring a variable means specifying its type and name, reserving a memory location for it.

//    int age;
//    String name;

// Method: Declaring a method means specifying its return type, name, parameters, and access modifiers.

//     greet(String name) {
//        // Method body
//    }


// Assign:
// Assigning a variable means giving it a value using the assignment operator (=).

//    age = 25; 
//    name = "John"; 

// Define:
// "define" is often used interchangeably with "declare".
// Method: Defining a method means providing the actual code that the method executes within its body.

// What is pseudocoding and why should you do it?
// Pseudocode is a way to describe the steps of an algorithm or program using plain language, essentially a "rough draft" of code, 
// without adhering to the strict syntax of a specific programming language; it helps you plan out the logic of your program before writing actual code, 
// making it easier to understand, debug, and communicate your ideas with others, even if they use different programming languages. 

// Why use pseudocode:

// Clarifies complex algorithms:
// By breaking down a problem into simple steps, pseudocode helps visualize the logic and identify potential issues before diving into coding.

// Improves communication:
// Since it uses natural language, pseudocode can be easily understood by both programmers and non-technical stakeholders, facilitating collaboration and feedback. 

// Reduces development time:
// Identifying errors in the planning stage through pseudocode can save significant time during actual coding and debugging.

// Algorithm design and validation:
// You can test different approaches to a problem by writing pseudocode for each option before committing to a specific implementation. 

// Documentation:
// Pseudocode can act as a high-level overview of your code, making it easier to understand and maintain later on. 

// Key points about pseudocode:
// Not executable:
// Pseudocode cannot be directly run on a computer as it is not written in a programming language. 

// Focus on logic, not syntax:
// The primary goal is to clearly outline the steps of the algorithm, not worry about specific keywords or formatting. 

// Common structures:
// Most pseudocode uses standard programming constructs like "if-then", "while loops", and "for loops" but written in plain language.

// // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// I think the more time you spend thinking how to solve the problem, the less time you need to code the problem. Based on my research, 80% thinking and 20% writing code.


// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?

// var firstVariable = "Hello World";
// var firstVariable = 2;
// var secondVariable;
// secondVariable=firstVariable;
// console.log(firstVariable);

// // Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// // ex: Hello, my name is Jean Valjean

// var secondVariable = "Hello!"

// var yourName
// var yourName = "Biju Jacob";
// console.log("Hello, my name is " + yourName);



// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
  
//  const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name'.length < 'Kevin'.length);
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false && false)
//   console.log(e < 'Kevin');
//   console.log(a + b >= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a >= d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 <= '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// let animal = "cow";

// if (animal){
//     console.log ("mooooo")
// }
// else {
//     console.log ("Hey! You're not a cow.")
// }



// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// const age = 14;

// if (age >= 16) {
// console.log ("Here are the keys!");

// } else {
//     console.log ("Sorry, you're too young.");
//     }

// II. Loops
// Remember: USE letwhen you initialize your for loops!

// //for(let i = 0; i < 100; i++) //This is GOOD: 

// //for(i = 0; i < 100; i++) //This is NO GOOD: 


// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive


//for (let i = 0; i <= 10; i++) {
//    console.log(i)
//}


// Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i <= 400; i++) {
//     console.log(i)
// }
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

//  for (let i = 12; i <= 4000; i++) {
//     if (i % 3 == 0) {
//      console.log(i)
//     }
//  }
// // B. Get even
// // Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//     console.log(i + " <-- is an even number")
//      }
// }


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:

// I found a 5. High five!
// I found a 10. High five!

// for (let i = 1; i <= 100; i++) {
//         if (i % 5 == 0) {
//         console.log(i + "  I found a 5. High five!")
//          }
//          if (i % 10 == 0) {
//             console.log(i + "  I found a 10. High five!")
//              }
// //Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//              else if (i % 3 == 0) {
//                 console.log(i + "  I found a number. Three is a crowd")
//          }
//     }

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//     bank_account += i;
   
// }
// console.log ("Total Savings = " + bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// let bank_account = 0;
// for (let i = 1; i <= 100; i++) {
//  bank_account += i*2;
//   }
// console.log ("Total Savings = " + bank_account);


// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?
// collection of Elements.

// Do Arrays guarantee those things will be in order?
// Unlike Objects, arrays have things in onder.

// What real-life thing could you model with an array?
//Our contacts on our phones are stored in a Array.


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

//  let quotes = ['JACOB', 'GLENVIEW', 'HILLSIDE', 'UNITED STATES']

//  console.log(quotes)

// // C. Accessing elements
// // // Given the following array 
//      const randomThings = [1, 10, "Hello", true]

// // // // How do you access the 1st element in the array?

// // console.log(randomThings[0]);

// // // Change the value of "Hello"to "World"

// randomThings[2] = "World"

// // // Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);

// D. Change values
// Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // // What would you write to access the 3rd element of the array?
// // console.log(ourClass[2]);

// // Change the value of "Github" to "Octocat"
// // ourClass[4] = "Octocat"

// // console.log(ourClass);
// // Add a new element, "Cloud City" to the array
// ourClass.push = "Cloud City"
// console.log(ourClass);


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
// const myArray = [5, 10, 500, 20]

// // Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push = "Aegon"

// // Remove the 5from the beginning of the array.
// myArray.shift();
// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift('Bob Marley');
// // Remove the string of your choice from the end of the array.
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// //yes reverse() method worked. It changed the order of the elements in the Array
// // //Mute means changing the elements order in an array
// myArray.reverse();
// console.log(myArray);


// F. Biggie Smalls
// Create a variable that contains an integer.

// const x =  102;

// // Write an if ... elsestatement that:
// if (x < 100) {


// // console.log()s "little number" if the number is entered is less than 100
//     console.log("little number "+x)
// } else {

//     // console.log()s big numberif the number is greater than or equal to 100.
//     console.log("Big number " +x)
// }

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
// const x = 4;

// if (x <= 5) {
//     console.log("little number "+x)

// } else if (x > 5 && x <=25 ){
//     console.log("Big number " +x)

// } else {   
//     console.log("monkey " +x)
// }

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [ "left shoe", "cowboy boots", "right sock", "Per Scholas hoodie", "green pants", "yellow knit hat", "marshmallow peeps" ];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
//log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

//console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
//kristynsCloset.splice(6, 5, 'raybans','marshmallow peeps');
//console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// kristynsCloset.splice(5, 4, 'stained knit hat','marshmallow peeps');
// console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
//console.log("Tom is wearing " + thomsCloset[0][0] + " shirt today!");

// In the same way, access one item from Thom's pants array.
//console.log("Tom is wearing " + thomsCloset[1][1] + " pant today!");

// Access one item from Thom's accessories array.
//console.log("Tom is wearing " + thomsCloset[2][1] + " today!");

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
//console.log(`Thom is looking fierce in a ${thomsCloset[0][0]} shirt, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`);


// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
    // thomsCloset[1].splice(2,2, 'Footie Pajamas');
    // console.log(thomsCloset[1])


// IV. Functions


// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?
// function printGreetingwith(name) {
//     console.log("Hello there, " + name + "!");
//     }
//     printGreetingwith("BIJU");

    // Hello there, BIJU!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, 
//read entire problems carefully before doing them from now on.


// B. printCool
// // Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// function printCoolwith(name) {
// console.log(name+ " is cool;");
// }
// //"Captain Reynolds is cool";
// printCoolwith("Captain Reynolds");

// C. calculateCube
// Write a function calculate Cube that takes a single number and prints the volume of a cube made from that number.

// function calculateCube(x) {
//     return x*x*x;
// }
// console.log(calculateCube(8))

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
//The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, 
//take a minute to test them with different values to make sure they behave the way you want.

// function isVowel(alphabets){

//     const vowels = (['a', 'e', 'i', 'o', 'u']);
    
//         for (let i = 0; i <= vowels.length; i++){
//             if (alphabets != vowels[i]) {
//                 continue;
//             }
//             return true;
//         }
//         return false;
// }

// console.log(isVowel("b"));



// E. getTwoLengths
// Write a function getTwoLengthscthat accepts two parameters (strings). The function should return an array of numbers where each number is the 
//length of the corresponding string.

    // function getTwoLengths(...sentence) {
    //     return sentence.map(x => x.length);
    // }
          
    // console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
   
    // function getMultipleLengths(sentences) {
    //     return sentences.map(function(sentences) {
    //         return sentences.length;
    //     });
    // }

    // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


    // G. maxOfThree
    // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, 
    //it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with 
    //larger values in each of the three locations.

    // function maxOfThree(num1,num2, num3) {
    //     const max = Math.max(num1, num2, num3);
    //     return max;
    // }
    
    // console.log(maxOfThree(6, 9, 1));
    
    // Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, 
    //we need you to submit a solution that does not use Math.max().

//     H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. 
//In case of a tie, the method should return the word that appears first in the array.
//     function printLongestWord(arr) {
//     return arr.reduce((a, b) => a.length < b.length ? b : a, "");
//        }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, 
//and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. 
//Set the other values to whatever you would like.
// const user = {
//     name:"Biju", 
//     email:"biju@gmail.com", 
//     age:"47",
//     purchased: []
// }


// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
//    user["email"]="jacob@gmail.com"
   
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
//    user['age']++;

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).
//    user["location"]="home"


// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// user["purchased"].push("carbohydrates","peace of mind", "Merino jodhpurs");
//console.log(user)
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.
// console.log(user.purchased[2])

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

//  user.friend = {
//     name:"Biju", 
//     age:"47", 
//     location:"Glenview",
//     purchased: []
// }

// Console.log just the friend's name
//console.log(user.friend.age)

// Console.log just the friend's location
//console.log(user.friend.location)


// CHANGE the friend's age to 55
//user.friend["age"] = 55;
//console.log(user.friend.age)

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
//user.friend.purchased.push = "The One Ring";

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
//user.friend["purchased"].push("The One Ring", "A latte");
//console.log(user.friend)

// Console.log just "A latte" from the friend's purchasedarray.
//console.log(user.friend.purchased[1])

// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

// for (let purchased of user.purchased) {
//     console.log(purchased);
// }

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

// for (let purchased of user.friend.purchased) {
//     console.log(purchased)
// }


// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
// function updateUser(user) {
//     user.age, user['age']++,
//     user.name.toUpperCase();
//   }

  //console.log(user.name.toUpperCase())

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, 
// make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
// Call your oldAndLoudfunction with useras the argument.

// function oldAndLoud(person) {
//     if (user = "Biju") {
//       user = "It's him!";
//     }  
//     return person;
//   }

//   console.log(oldAndLoud);

//   Cat Combinator

// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

// const cat1 = [
//     { name: "Skylar", breed: "Husky", age: "4" }
// ]
// cat1.forEach((obj) => {
//     console.log(`${obj.age}, ${obj.breed}`);
//     })

// // 2. Papa cat
// // Define an object called cat2that also contains the properties:

// // name
// // breed
// // age (a number)

// const cat2 = [
//     { name: "Jacky", breed: "Pomerian", age: "7" }
// ]

function combineCats(mama, papa) {
    // Create a new kitten object
    const kitten = {
      name:, // You can customize the naming logic
      age: , // Or combine age in some way
      breed: // Assuming both parents are the same breed
    };
  
    // Return the new kitten object
    return kitten;
  }

  const cat1 = 
    { name: "Skylar", breed: "Husky", age: "4" };
  
  const cat2 = { name: "Jacky", breed: "Pomerian", age: "7" };
  
  //const kitten = combineCats(cat1, cat2);
  const kitten = combineCats({ name: "Skylar", breed: "Husky", age: "4" }, { name: "Jacky", breed: "Pomerian", age: "7" });
  console.log(kitten);