//  Q1
var newObj={
    firstname:"Aditya",
    lastName: "Ashutosh",
    rollNo: 211002,
    GR_No: 21911061,
    loginCount: 24

}
console.log(newObj);
//  Q2

delete newObj.rollNo;
console.log(newObj);

//Q3
var length=0;
for(const i in newObj){
    length++;
}
console.log(length);

//Q4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]

library.forEach((book)=>(console.log(`${book.author} has written ${book.title} and its reading status is ${book.readingStatus}`)));
