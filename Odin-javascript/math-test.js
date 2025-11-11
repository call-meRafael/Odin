// const firstName = 'Rafael';
// const lastName = 'Araujo';
// const birthYear = 1992;
// const thisYear = 2025;

// const age = thisYear - birthYear;
// const fullName = firstName + ' ' + lastName;
// const greetings = `Hi, my name is ${fullName} and I am ${age} years old!`;
// console.log(greetings);

// const greeting = `Hello, my name is ${firstName} ${lastName}! I am ${thisYear - birthYear} years old!`;
// console.log(greeting);


/* -------------Repeat Strings------------------- */

function repeatString(string, times) {
    switch (times) {
        case 0:
            '';
            break;
        case 1:
            'Hello';
            break;
        case 2:
            'HelloHello';
            break;
        case 3:
            'HelloHelloHello';
            break;
        default:
            console.log(string);
    }
}

console.log(repeatString('Hello', 3));