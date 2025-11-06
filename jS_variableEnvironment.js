let x = 1;
a();
b();
console.log(x);

function a(){
    let x = 10
    console.log(x);
}

function b() {
    let x =100
    console.log(x);
}

// Basically the call stack is the path way of execution of the code
// first all the memorey is allocated 
// then the program moves to 1 line of code and executes it
// then goes to the second and then jumps to the 7 line due the function calling
// then runs those two lines and goes back to the same line 2.
// Similarly with the line 3
// then it empty's the stack.
// the displays it onto the console