let myStory = "Hocaya sormuşlar, hoca eşeğe neden ters bindin? hoca da demiş ki";

console.log("1- Story Length: " + myStory.length);
console.log("2- Total Index: " + myStory.length);
let firstIndex = myStory.indexOf("hocam");
let lastIndex = myStory.lastIndexOf("hocam");
console.log("3- First Index of 'hocam': " + firstIndex);
console.log("   Last Index of 'hocam': " + lastIndex);
console.log("4- First 15 Characters: " + myStory.slice(0, 15));
console.log("5- Characters After the 15th (Method 1): " + myStory.slice(15));
console.log("   Characters After the 15th (Method 2): " + myStory.substring(15));
console.log("6- Last 5 Characters (Method 1): " + myStory.slice(-5));
console.log("   Last 5 Characters (Method 2): " + myStory.substring(myStory.length - 5));
console.log("7- 10 Characters After the 11th: " + myStory.substring(11, 21));
console.log("8- Story Excluding Last 5 Characters: " + myStory.slice(-5));
let containsWord = myStory.includes("eşeğe");
console.log("9- Does the story contain 'eşeğe'? " + containsWord);
myStory = myStory.replace(/i/g, "ı");
console.log("10- 'i' Characters Replaced with 'ı': " + myStory);
myStory = myStory.replace(/a/g, "e");
console.log("11- 'a' Characters Replaced with 'e': " + myStory);
myStory = myStory.toUpperCase();
console.log("12- Text Converted to Uppercase: " + myStory);
myStory = myStory.toLowerCase();
console.log("13- Text Converted to Lowercase: " + myStory);
// 14
let userName = prompt("Please enter your name");
console.log("14.a- Welcome, " + userName);
console.log(`14.b- Welcome, ${userName}`);
// 15
let userInput = prompt("Enter a text");
userInput.concat("   ");
let userInput2 = "   " + userInput;
// 15-a
userInput2 = userInput.trimStart();
// 15-b
userInput2 = userInput.trimEnd();
// 15-c
let trimmedInput = userInput2.trim();
console.log("15- " + trimmedInput)
//16
let formattedName = "MY Name: " + userName;
console.log("16- Formatted Text: " + formattedName);
//17
let message = "It's break time. Enjoy your rest.";
alert(message);