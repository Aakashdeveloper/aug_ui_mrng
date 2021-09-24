setInterval(function() {}, time);
>> call something after certain interval of time

var interval = setInterval(function() {
    console.log(Math.random())
}, 3000)

0.1565541445769234
VM257:2 0.8213491292919937
VM257:2 0.20524463749204314
VM257:2 0.9006985427647236

clearInterval(interval)

////////////////////////////////
run only once after given amount of time

setTimeout(function() {
    console.log(Math.random())
},3000)
0.5589616298292448