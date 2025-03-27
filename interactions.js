// interactions in javascript.
alert('hello');


let age = ('how old are you?',100);
alert = (`you are ${age} years old!`); // output is you are 100 years old!
// the prompt function is used to get input from the user.
// the prompt function takes two arguments: the title of the input dialog box and the default value for the input box.
// the prompt function returns a string value.

//confirm function is used to get a confirmation from the user.
// the confirm function takes one argument: the message to show the user.
// the confirm function returns a boolean value: true if the user clicks ok and false if the user clicks cancel.


//syntax for alert function is alert(message);
//syntax for prompt function is prompt(title, default); result= prompt('title',[default]);
//syntax for confirm function is confirm(message);  result = confirm('message');
//syntax for console.log function is console.log(message);

// browser-specific functions to interact with the visitors.
//alert function is used to show a message to the user in a dialog box.
//prompt function is used to get input from the user.
//confirm function is used to get a confirmation from the user.

// there are 2 limitations of the browser functions:
// they block the execution of javascript until the user interacts with the dialog box.
// they look differently in different browsers.

//write a code that instructs the user to enter their name and then shows the name entered by the user.
 let name = prompt('what is your name?','');
 alert(name);

