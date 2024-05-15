// // Task #2
// let personsName: string = "Sharjeel";
// console.log(`Hello ${personsName}, would you like to learn some Python today?`);
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // Task #3
// let secondPersonName : string = "ahmed"
// console.log(secondPersonName.toLocaleUpperCase());
// console.log(secondPersonName.toLowerCase());
// // Task #4
// let quote : string = "Life is like riding a bicycle. To keep your balance, you must keep moving."
// console.log(`Albert Einstein once said,"${quote}"`);
// // Task #5
// let famousPerson :string = "Albert Einstein "
// console.log(`${famousPerson} once said,"${quote}"`);
// Task #6
// let famousPersonSpaces :string = "             A\nlbe\nrt \t\nEins\ntein                      "
// let famousPersonWitoutSpaces : string = famousPersonSpaces.replace(/\n/g  ,"")
// console.log(famousPersonSpaces);
// console.log(famousPersonWitoutSpaces.replace("\t" , "").trim());
// Task #7 Task #8
// console.log(5+3);
// console.log(2*4);
// console.log(12-4);
// console.log(16/2);
// Task #9
// const favNumber: number = 8;
// if (favNumber === 4) {
//   console.log(`your fav number is ${favNumber}`);
// }
// Task #10
// const Myname: string = "Sharjeel Ahmed";
// const date: string = Date();
// console.log(`My namne is ${Myname} and today date is ${date}`);
// Task #11
var friends = ["Maaz", "Ali", "Shehbaz", "Fahad", "Raza"];
// friends.forEach((friend) => {
//   console.log(friend);
// });
// // Task #12
// const message: string = "is my friend";
// friends.forEach((friend) => {
//   console.log(friend, message);
// });
// Task #13
// const transportaionMode: string[] = ["Bike", "Car", "Jet"];
// transportaionMode.forEach((mode) => {
//   console.log(`I would like to own a ${mode}.`);
// });
// Task #14
// friends.forEach((friend) => {
//   console.log(`${friend}, You are inivited to dinner`);
// });
// Task #15
// const absentGuest: string = "Maaz";
// const newGuest: string = "Rajab";
// const invitedGuests = friends.map((friend) =>
//   friend != absentGuest ? friend : newGuest
// );
// console.log(`${absentGuest} , cant make dinner`);
// invitedGuests.forEach((guest) => {
//   console.log(`${guest} ,You are invited for dinner`);
// });
// Task #16
// friends.unshift("heryy");
// friends.push("Fahad")
// friends.map((friend)=>{
// console.log(`${friend} ,You are invited for dinner and you found a bigger table`);
// })
// Task #17
// console.log("You can invite only two people for dinner.");
// friends.map((friend , index,friends)=>{
//     if (friends.length > 2) {
//        const removedGuest =  friends.pop()
//        console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
//     }
// })
// friends.forEach((friend) => {
//     console.log(`${friend}, you're still invited.`);
// });
// friends.splice(0, friends.length); 
// console.log(friends);
// Task #18
var places = ["Turkey", "Maldives", "America", "Qatar", "Thiland"];
console.log(__spreadArray([], places, true).sort());
console.log(places);
console.log(__spreadArray([], places, true).sort().reverse());
console.log(places);
