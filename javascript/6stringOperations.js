var city = "LonDOn"
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"

var city = "LonDOn"
city[0]
"L"
city[1]
"o"
city.length
6
city[city.length-1]
"n"

var name ="  Nikita  "
undefined
name.length
10
name.trim()
"Nikita"
name.trim().length
6
var name = "   Bhumika .  "
name.trim()
"Bhumika ."

//case sensitive
var a = "john"
var b = "John"
a == b
false
a.toLowerCase() == b.toLowerCase()
true
a.toUpperCase() == b.toUpperCase()
true

var city = "amSteRDam" ('Amsterdam')


var city = "LonDOn"
city.charAt(0)
"L"
city.charAt(1)
"o"

// remove number of letter from start
city.slice(1)
"onDOn"
city.slice(2)
"nDOn"
city.slice(3)
"DOn"

// provide you letter from end
city.slice(-1)
"n"
city.slice(-2)
"On"

// extract char between given range
city.slice(2,5)
"nDO"
city.slice(1,5)
"onDO"
city.slice(0,3)
"Lon"

city.slice(0,-1)
"LonDO"
city.slice(0,-2)
"LonD"

city.slice(-4,-1)
"nDO"
city.slice(-1,-4)
""


var city = "LonDOn"
city.substring(1)
"onDOn"
city.substring(2)
"nDOn"
city.substring(2,5)
"nDO"
city.substring(0,-1)
""
city.substring(0,-2)
""
city.substring(-2)


var city = "amSteRDam"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"mSteRDam"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()


var a = "i am learning javascript"
undefined
a.replace('javascript','JS')
"i am learning JS"
var a = "javascript i am learning javascript"
undefined
a.replace('javascript','JS')
"JS i am learning javascript"
a.replace(/javascript/g,'JS')

var name = "   Bhumika .  "
name.replace(/ /g,'')
"Bhumika."

var name = "   Bhumika .  "
name.replace(/ /g,'-')
"---Bhumika-.--"


var url = "https://github.com/Aakashdeveloper/aug_node_mrng_21";
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "aug_node_mrng_21"]
url.split('/').length
5

var out = url.split('/')
out[out.length-1]
"aug_node_mrng_21"


var a = "javascript i am learning javascript"
a.split(' ')
["javascript", "i", "am", "learning", "javascript"]

var a = "javascript"
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var a = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
a.toString()
"j,a,v,a,s,c,r,i,p,t"
var out = a.toString()
out.replace(/,/g,'')
"javascript"

var a = [1,2,3,4]
a.toString()
"1,2,3,4"
a.toString().replace(/,/,'')
"12,3,4"
a.toString().replace(/,/g,'')
"1234"
Number(a.toString().replace(/,/g,''))
1234

var a = 10
a.toString()
"10"
a+""
"10"
""+a
"10"


var a = "Javascript i am learning javascript"
a.replace(/Javascript/g,'Js')
"Js i am learning javascript"
var a = "Javascript i am learning javascript"
a.replace(/Javascript/ig,'Js')
"Js i am learning Js"


var city = "LonDOn"
city.charAt(0)
"L"
city.charCodeAt(0)
76