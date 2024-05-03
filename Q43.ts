//Q43.Unchanged Magicians: Start with your work from Exercise 40.
 //Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
 //Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

 type magician = string
 const Magicians:  magician[] =['Dynamo','Criss Angel','penn jillette','Teller'];

 function showmagicians(Magicians:[]): void{
    console.log(Magicians.join("\n"));
 }
 function makeGreat(Magicians: []): magician[]{
return Magicians.map((magician) => `${magician} the Great`);
 }
 const magicianCopy =[...Magicians];
 const greatMagician = makeGreat(magicianCopy);
 //original Magicians:
 console.log("Original magicians:");
 showmagicians(Magicians);
 //with great:
 console.log("\nMagicians with 'the Great'added:");
 showmagicians(greatMagician);