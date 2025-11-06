// Not defined

var a;

console.log(a); // here the memory allocated but not defined

if (a == undefined) 
    console.log("a is allocated" );
else 
    console.log("a is not allocated");

// here the a is automatically takes undefined
// its get removed if it is defined.