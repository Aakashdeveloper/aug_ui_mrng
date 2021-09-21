const getId = () => {
    var id = Math.floor(Math.random() * 100000);
    document.getElementById('eid').value = id
}

const validateFname = () => {
    var name = document.getElementById('fname').value;
    if(name.trim().length==0){
        document.getElementById('fout').innerText="Please Enter First Name"
        document.getElementById('fname').style.borderColor="red"
    }else{
        document.getElementById('fout').innerText=""
        document.getElementById('fname').style.borderColor="green"
    }
}

function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.trim().length==0){
        document.getElementById('eout').innerText="Please Enter email"
        document.getElementById('email').style.borderColor="red"
    }else{
        if(email.match("^([a-zA-Z0-9$#!]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText="Please Enter Valid email"
        }else{
            document.getElementById('eout').innerText="";
            document.getElementById('email').style.borderColor="green"
        }
    }
}

const validatePassword = () =>{
    var pwd = document.getElementById('pwd').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText = "Min length of password is 8";
            document.getElementById('pwd').style.borderColor="red";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.backgroundColor="red"
        }else if(pwd.length<11){
            document.getElementById('pout').innerText = "";
            document.getElementById('pwd').style.borderColor="orange";
            document.getElementById('ppout').style.backgroundColor="orange"
        }
    }else{
        document.getElementById('pwd').style.borderColor="green";
        document.getElementById('ppout').style.backgroundColor="green"
    }
}

function showPassword(){
    var pwd = document.getElementById('pwd');
    if(pwd.type == 'password'){
        pwd.type = 'text'
    }else{
        pwd.type = 'password'
    }
}

const validateCPassword = () =>{
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText = "Password Does Not Match"; 
    }else{
        document.getElementById('cpout').innerText = " " 
    }
}

function getCity(){
    var city = document.getElementById('city').value;
    var mycity = city ? city:'No City';
    document.getElementsByTagName('span')[1].innerText=`Your City is ${mycity}`
}