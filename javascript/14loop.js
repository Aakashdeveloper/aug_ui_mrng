for
while
do while
for of
for in (object)
Map
filter

////////////////
for > generate the series of value or help to iterate over an array
////////////////////////////////

for(starting, condition, increment){}

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Delhi', 'Dubai', 'Helsinki', 'Indore', 'Mumbai', 'Nice', 'Paris']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

Delhi
Dubai
Helsinki
Indore
Mumbai
Nice
Paris

var city = ['Paris','Mumbai',['Red','Yellow','Green','Gray'], 'Indore', 'Helsinki', 'Dubai']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Paris
VM632:3 Mumbai
VM632:3 (4) ['Red', 'Yellow', 'Green', 'Gray']
VM632:3 Indore
VM632:3 Helsinki
VM632:3 Dubai

var city = ['Paris','Mumbai',['Red','Yellow','Green','Gray'], 'Indore', 'Helsinki', 'Dubai']
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
    
}

///////////
while
//////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

///////////
Do while
//////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

////////
for of >es6
////////////////////////////////
var city = ['Delhi', 'Dubai', 'Helsinki', 'Indore', 'Mumbai', 'Nice', 'Paris']

for(mycity of city){
    console.log(mycity)
}

Delhi
VM678:4 Dubai
VM678:4 Helsinki
VM678:4 Indore
VM678:4 Mumbai
VM678:4 Nice
VM678:4 Paris

var city = ['Paris','Mumbai',['Red','Yellow','Green','Gray'], 'Indore', 'Helsinki', 'Dubai']

for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
}