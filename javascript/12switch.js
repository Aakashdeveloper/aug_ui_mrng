// multiple condition multiple output >> if else
// one condition one output >> Ternary
// one condition multiple output >> Switch

var name = "Eva"
switch (name){
    case 'Aakash':
        console.log("Hi Case 1");
        break;
    case 'Eva':
        console.log("Hi Case 2");
        break;
    default:
        console.log("Hi default Case");
}
"Hi Case 2"

var input = 2
switch (input%2){
    case 0:
        console.log(`Number ${input} is even`)
        break;
    case 1:
        console.log(`Number ${input} is odd`)
        break;
    default:
        console.log("Hi default Case");
}
Number 2 is even

switch(new Date().getDay()){
    case 0:
        console.log(`Today is Sunday`);
        break;
    case 1:
        console.log(`Today is Monday`);
        break;
    case 2:
        console.log(`Today is Tuesday`);
        break;
    default:
        console.log("Hi default Case");
}
Today is Monday