class geo{
    constructor(){
        this.lat = 43.11;
        this.long = 32.11;
    }
}

class language1 extends geo {
    constructor(name,country,city){
        super()
        this.name = name;
        this.country = country;
        this.city = city; 
    }

    greet = () => {  return `Say hi to ${this.name}` }
}


var English = new language1('English','England','London')