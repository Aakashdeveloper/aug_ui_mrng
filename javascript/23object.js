var moviename = "Avengers";
var movieRating = 4.5
var movielang = "English";


var moviename1 = "Jab We Met";
var movieRating1 = 4.8
var movielang1 = "Hindi";


var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

typeof(movie)
'object'
movie.rating
4.5
movie.name
'Avengers'
movie.lang
'English'
movie.rating=4.6
4.6
movie
{name: 'Avengers', rating: 4.6, lang: 'English'}
movie.ind = "Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.6, lang: 'English', ind: 'Hollywood'}
delete movie.lang
true

movie["lang"]
'English'
movie["name"]
'Avengers'
movie["rating"] = 4.7
4.7
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}


var user = {
    name:'Ankit',
    email:'a@a.com', 
    addresses:[
        {"home":"home address"},
        {"office":"office address"}
    ]
}
user.addresses
(2) [{…}, {…}]
user.addresses[1].office
'office address'
user.addresses[0].office
undefined
user.addresses[0].home
'home address'


//////////JSON/////////
JavaScript Object Notation

var movie = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'English'
    },
    {
        name:'Jab We Met',
        rating:4.8,
        lang:'Hindi'
    }
]
movie.map((data) => { return data.name})
['Avengers', 'Jab We Met']

movie[1].name
'Jab We Met'
movie[1].rating = 4.9
4.9
movie


var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}


for(key in movie){
    console.log(key)
}

name
rating
lang

for(key in movie){
    console.log(movie[key])
}
Avengers
4.5
English