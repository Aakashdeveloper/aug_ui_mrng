var name = "Avengers"
var rating = 4.5
var type = "Action"
var ind = "Hollywood"

//es5
var out = "An "+name+" is an "+type+" movie with rating of "+rating+" form ind "+ind+"."
"An Avengers is an Action movie with rating of 4.5 form ind Hollywood."

//es6
var out = `An ${name} is an ${type} movie with rating of ${rating} from ind ${ind}.`
"An Avengers is an Action movie with rating of 4.5 from ind Hollywood."