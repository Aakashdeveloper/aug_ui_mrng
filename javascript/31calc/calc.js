function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(a.trim().length>0 || b.trim().length>0 ){
        if(isNaN(a) || isNaN(b)){
            out = "Please enter valid value"
        }else{
            if(opt=="Add"){
                out = `Sum is ${Number(a)+Number(b)}`;
            }else{
                out = `Sub is ${Number(a)-Number(b)}`;
            }
        }
    }else{
        out = "Please enter value"
    }
    document.getElementById('output').innerText =out
}

 /*
            function Add(){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value;
                var out = Number(a)+Number(b);
                document.getElementById('output').innerText = `Sum is ${out}`
            }
            function Sub(){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value;
                var out = Number(a)-Number(b);
                document.getElementById('output').innerText = `Sub is ${out}`
            }
isNaN("hhh")
true
isNaN(10)
false
isNaN(true)
false       
*/
           