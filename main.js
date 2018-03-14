// The new "Avengers" movie has just been released! There are a lot of people at the
// cinema box office standing in a huge line. Each of them has a single 100, 50 or
// 25 dollars bill. A "Avengers" ticket costs 25 dollars.
//
// Vasya is currently working as a clerk. He wants to sell a ticket to every single
//  person in this line.
//
// Can Vasya sell a ticket to each person and give the change if he initially has
// no money and sells the tickets strictly in the order people follow in the line?
//
// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

//peopleInLine is the array
//peopleInLine is set in a loop within conditionals to help determine how the change
//will be distributed
function tickets(peopleInLine){
//the variables represent those with 25 and 50 dollars and the array will act as
//almost like a cash register
  var a25 = 0;
   var a50 = 0;
  for(var i = 0;i<peopleInLine.length;i++){
    //when the loop reaches 25, that represents when one ticket is sold for exactly
    //25 dollars
    if(peopleInLine[i] == 25){
      a25 += 1;
    }
    //when the loop reaches 50 it represents the next customer who has a 50 dollar
    //bill and will need change.
    //because he needs change will have to subtract a25 from the array and add a50
    //symbolizing the clerk giving change, and only being left with 50 dollars
    if(peopleInLine[i] == 50){
      a25 -= 1; a50 += 1;
    }
    //in this instance if the loop reaches 100 dollars and a25 is equal to 3 that means
    //the array will subtract 3. meaning the customer can recieve change
    if(peopleInLine[i] == 100){
      if(a50 == 0 && a25 >= 3){
        a25 -= 3;
    //this else statement means if theres an a25, and an a50 subtract 1 of each
    //when the loop reaches 100
      }else{
        a25 -= 1; a50 -= 1;
      }
    }
    //and if a25 or a50 is equal to 0 that means the clerk cannot give change at all
    if(a25 < 0 || a50 < 0){
       return 'NO';
    }
  }
  return 'YES';
}
