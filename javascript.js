//LOOPS=repeat same operation multiple times
// for ([initialExpression]; [condition]; [incrementExpression]) {
//   statement
// }
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];
//
// for (var i = 0; i < friendsOfKarlie.length; i++) {
//   console.log(`👋 Hi, ${friendsOfKarlie[i]}!`);
// }

// var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];
//
// friendsOfKarlie.forEach(function(friend) {
//   console.log(friend);
// });


 //OBJECTS
// var family = {
//   "Mom" : "The queen",
//   "Dad" : "The coach",
//   "Faith" : "The singer",
//   "Bella" : "The dancer",
//   "Brody" : "The athlete"
// }
// console.log(family["Bella"]);


// var friendsOfBella = ["nicole" , "elena", "briana", "emma", "faith", "olivia", "avery", "megan"];
// for (var i = 0; i < friendsOfBella.length; i++) {
//   console.log(`Hi, ${friendsOfBella[i]} !`);
// }

// var tsSongs = ["ME!", "you need to calm down", "...ready for it?", "endgame" , "babe" , "this is why we can't have nice things" , "so it goes...", "new years day" , "look what you made me do", "i did something bad", "gorgeous", "getaway car","dress", "don't blame me", "delicate", "dancing with our hands tied" , "call it what you want", "i don't want to live forever", "bad blood", "you are in love", "wonderland", "wildest dreams", "welcome to new york", "this love", "style", "shake it off", "out of the woods", "new romantics", "i wish you would", "i know places", "how you get the girl", "clean", "blank space", "all you had to do was stay", "sweeter than fiction", "highway don't care", "we are never ever getting back together", "treacherous", "stay stay stay", "state of grace", "starlight", "sad beautiful tragic", "ronan", "red", "the moment i knew", "the lucky one", "the last time", "i knew you were trouble", "i almost do", "holy ground", "holy ground", "girl at home", "eyes open",  "everything has changed", "come back...be here", "both of us", "begin again", "all too well", "22", "safe and sound", "today was a fairytale", "superman", "the story of us", "speak now", "sparks fly", "ours", "never grow up", "mine", "mean"]
//   var songButton = $('.songButton');
//     songButton.on('click', pickSong);
// function pickSong() {
//   var random = Math.random();
//   var multiply = random * tsSongs.length;
//   var round = Math.floor(multiply);
//   var randomSong = tsSongs[round];
//   console.log(randomSong);
// }

// var students = ["Leta", "Ellen Mary", "Pam", "Megan", "Amy", "Sarah", "Robyn", "Courtney", "Rachel", "Allison", "Ruby", "Maile", "Julie", "Meg", "Christie", "Emmie", "Aurora", "Tori", "Kerry", "Juliana"];
//
// function pickStudent() {
//   var random = Math.random() * 20;
//   var rounded = Math.floor(random);
//   var student = students[rounded];
//   return student;
// }
// console.log(student)

// var randomDecimal = Math.random(); //random numbers
// var random = randomDecimal * 20;
// var final = Math.floor(random);
// console.log(randomDecimal);
// console.log(random);
// console.log(final);

//edit arrays
// var friendsOfBella = ["nicole" , "elena", "briana", "arianna", "emma", "faith", "olivia", "avery", "leah", "megan", "kessler", "landis" , "addie"];
//   friendsOfBella[2] = "cole";  //replace an element
//   friendsOfBella.push("arianna"); //add a name to the end
//   friendsOfBella.pop(); //remove last person on array
//   friendsOfBella.shift(); //remove first person from array
//   friendsOfBella.splice(9,1) //remove specific element
//   console.log(friendsOfBella);

// var friendsOfKarlie = ["Michelle Obama" , "Serena Williams" , "T Swift" , "Jimmy Fallon"];
//   console.log(friendsOfKarlie[2]);
//   console.log(friendsOfKarlie.length);
//
// var temperature = [78, 72, 81, 75]

// var button1 = $('.b1');
//   button1.on('click', word1);
//   function word1(){
//     console.log("number one.");
//   }
// var button2 = $('.b2');
//   button2.on('click', word2);
//   function word2(){
//     console.log("number two.");
//   }
// var button1 = $('.b3');
//   button1.on('click', word3);
//   function word3(){
//     console.log("number three.");
//   }

// var header = $('h1');
//   header.text("hi, i'm bella"); //change HTML in jquery
// var head2 = $(`h2`);
//   head2.text("yoooo");
//
// var clickButton = $('button');
// clickButton.on('click', somethingGreat);
// function somethingGreat(){
//   console.log("You've found it.");
// }
// var headChange = $('h1');
//   headChange:hover:after{
//     content: :"GOOD JOB!"
//   }
// var header = document.querySelector(`h1`); //change HTML using js
//   header.innerHTML = "Welcome To My Life!" ;

// var groceryItems = ["apples" , "banannas" , "beef" , "milk" , "eggs" , "bread"];
// var moneyAmount = 0;
//
// function groceryList(numberOfItems){
//   groceryItems.push("sugar");
//   moneyAmount = groceryItems.length * numberOfItems * 3;
//   console.log(`Don't forget to buy ${numberOfItems} sugar bags.`);
//   console.log(`You need ${moneyAmount} dollars.`);
// }
// groceryList(5);

// function shop(shirts){
//   var shirtPrice = shirts * 5;
//   console.log(`Your shirt(s) will cost ${shirtPrice}`);
//
//   }
// }

// function sandwiches(numberOfSandwiches){
//   var eatingTime= numberOfSandwiches * 4;
//   console.log(`It will take you ${eatingTime} minutes to eat your sandwich(es).`);
// }
// sandwiches(2)

// function walkDogs(numberOfDogs){
//   if(numberOfDogs === 1){
//   console.log(`Put on ${numberOfDogs} leash.`);
//   console.log(`Put on ${numberOfDogs} treat.`);
//   console.log(`Bring ${numberOfDogs} poop bag!`);
// }
//   else{
//     console.log(`Put on ${numberOfDogs} leashes.`);
//     console.log(`Put on ${numberOfDogs} treats.`);
//     console.log(`Bring ${numberOfDogs} poop bags!`);
// }
// }
// walkDogs(1);




// function movies(numberOfMovies) {
//   console.log(`Watch ${numberOfMovies} movies.`);
//   console.log(`Bring ${numberOfMovies} popcorn bags.`);
// }
//   movies(13)
//
//
// function walkZuzu() {
//   console.log("Zuzu needs a walk NOW!");
//   console.log("Bring a poop bag.");
//   console.log("Don't forget the leash!");
// }
// walkZuzu();

// console.log("hello world");
// console.log("kode with klossy");
// console.log(5+7);
// console.log(5/4);
// console.log(9*4);
//
// //an array ( [] ) is a collection of data
// var colors = []
//   colors[0] = "blue";
//   colors[1] = "pink";
//   colors[2]= "purple";
//   colors[3]= "magenta";
//   colors[4]= "white";
//   colors[5]= "black";
//
// var peopleNames= ["bella","faith","brody","nicole","brian"]
//
// var numbers= [20, 26, 24, 28, 32]
//
// console.log(numbers);
//
// numbers.push(17);
// console.log(numbers);
//
// console.log("Kode with Klossy Austin wants " + numbers[3] + " " + colors[4] + " donuts.");
//
// var kwk= ["website" , "arrays" , "mobile" , "app"];
// var names= ["Bella" , "Sarah"]
// var sites= ["dog-walking"]
// console.log(names[1] + " wants to create a " + sites[0] + " " + kwk[0] + ".");
//
// //Operators! Boolean Values + such
//
// console.log(3<5);
// //true (less than)
// 4>=9;
// //false (greater than or equal to)
// 7===7;
// //true (equals)
//
// var a = 13;
// var b = 26;
// var c = 25;
// var d = 89;
//
// console.log((a + b + c + d) / 4);
//
// var camps = 36;
// var scholars = 23.5;
// console.log(36*23.5);
// console.log("If there are " + scholars + " at each of the " + camps + " camps, then there are about 846 scholars total.");
