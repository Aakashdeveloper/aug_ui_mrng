if(condition){
    // do something
}else{
    // do something
}

var a = 9877;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 9877 is odd

var a = 98772;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 98772 is even

//////////
var name = "Bhumika";

if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name== "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} you are unknown`)
}

///////
var name = "John";
var role = "Admin";

if(role == "Admin"){
    if(name=="Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else if(name=="John"){
        console.log(`Hi ${name} you are ${role}`)
    }
}else if(role == "User"){
    if(name=="Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else if(name=="John"){
        console.log(`Hi ${name} you are ${role}`)
    }
}else{
    console.log(`Hi ${name} you are unknown`)
}

var name = "Tina";
if(name=="Tina" || role == "Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are unkown`)
}
Hi Tina you are welcome

var name = "Priya";
if(name=="Tina" || role == "Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are unkown`)
}
Hi Priya you are unkown

var name = "Priya";
if(name=="Tina" && role == "Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are unkown`)
}

var a = 1;
if(a){
    console.log(`Hiii`)
}else{
    console.log(`Bie`)
}
Hiii

var a = 0;
if(a){
    console.log(`Hiii`)
}else{
    console.log(`Bie`)
}
Bie

var a = -1;
if(a){
    console.log(`Hiii`)
}else{
    console.log(`Bie`)
}
Hiii

// ternary operator
// single line if else condition
var a = 10
a>10?"Hii":"Biee"
"Biee"

var a = 10
a==10?"Hii":"Biee"
"Hii"

condition ? if condition true : if condition false

var a = 10
a>10?a+1:a-1
9
var a = 10
a=10?a+1:a-1
11


// you should not use
var a = 10
a>10?a+1:a-1?"Hii":"Bie"
"Hii"
var a = 10
a==10?a+1:a-1?"Hii":"Bie"
11
