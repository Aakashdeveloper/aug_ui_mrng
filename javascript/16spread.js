var myarry = [1,2,3,4]

function add(a,b,c,d){
    return a+b+c+d
}

add(myarry)

add(myarry)
'1,2,3,4undefinedundefinedundefined'


function add(a,b,c,d){
    return a+b+c+d
}
add(...myarry) >> spread
10

//rest
function add(...args){
    var output = 0
   for(mydata of args){
        output = output+mydata
   }
   return output
}

//spread
add(...myarry)
10