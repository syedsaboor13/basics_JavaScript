

// As we learned before the execution path first allocates the memory.


console.log(x); // here as the memory is allocated as undefined but not defined

let x = 10

console.log(x); // hepre since the memory is been defined it prints 10


hosting()  // here since the function as already allocated memory and defined it is executed 


function hosting(){
    console.log("hosting");
}

host() // here the arrow function acts like an variable and prints hosting

let host = () => {
    console.log("hosting");
}

host() // Since it has already allocated and defined it prints hosting 