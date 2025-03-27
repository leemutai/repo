//there are 8 data types in javascript

let message = 'hello'; // string
message = 1234; // number

//number represents both an interger and a floating point number
let n = 123;
n = 12.345;
//besides regular numbers, there are so-called "special numeric values" which also belong to this data type: Infinity, -Infinity and NaN.
//Infinity represents the mathematical Infinity ∞. It is a special value that's greater than any number.
alert(1/0); // output is Infinity

//NaN ,represents a computational error. It is a result of an incorrect or an undefined mathematical operation.
alert('not a number'/2);
//NaN is sticky. Any further operation on NaN will result in NaN.
alert('not a number'/2 + 5)

//BigInt is for integer numbers of arbitrary length.
const bigInt = 1234567890123456789012345678901234567890n;
//BigInt is not a number, it is a separate data type.
//BigInt is created by appending n to the end of an integer literal.
//BigInt cannot be mixed with regular numbers. For example, alert(1n + 2) will cause an error.      
//BigInt is not supported in all browsers and javascript environments yet.

//String represents a sequence of characters. It must be enclosed in quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// backticks ` ` allow us to embed any expression into the string by wrapping it in ${...}
// in js there are 3 types of quotes: double quotes, single quotes and backticks.
// double and single quotes are simple quotes. There is no difference between them in javascript.
// backticks allow us to embed variables and expressions into a string by wrapping them in ${...}
// we can use single quotes and double quotes inside backticks. 
// backticks are more convenient when creating a multiline string.
// backticks can also be used to embed a function call into a string.


//Boolean(logical type) represents true/false.
//Boolean represents a logical entity and can have two values: true and false.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked


//null represents an empty or non-existent value.
//It is a special value that represents nothing, empty or value unknown.
let age = null;
// the undefined value is a special value that represents an empty or non-existent value.
// it is a type of undefined.
// if a variable is declared but not assigned, then the value of that variable is undefined.
let x;
alert(x); // output is undefined

//object is a complex data type that allows us to store collections of data.
//object is a collection of key-value pairs.
// symbol is a unique identifier.
// function is a callable object.
// object is a collection of key-value pairs.
// object is a complex data type that allows us to store collections of data.
// object is a collection of properties and methods.

//typeof operator returns the type of the argument.
//typeof operator returns the type of the argument.
