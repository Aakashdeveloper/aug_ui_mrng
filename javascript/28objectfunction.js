//es5
function language(name,country,city){
    this.name = name;
    this.country = country;
    this.city = city;
    this.greet = () => {
        return `Say hi to ${name}`
    };
}

var Hindi = new language('Hindi','India','Delhi')
Hindi
language {name: 'Hindi', country: 'India', city: 'Delhi', greet: ƒ}
Hindi.name
'Hindi'
Hindi.greet()
'Say hi to Hindi'

//es6
class language1{
    constructor(name,country,city){
        this.name = name;
        this.country = country;
        this.city = city; 
    }

    greet = () => {  return `Say hi to ${this.name}` }
}

var French = new language1('French','France','Paris')
undefined
French
language1 {name: 'French', country: 'France', city: 'Paris', greet: ƒ}
French.greet()
'Say hi to French'
French.country
'France'