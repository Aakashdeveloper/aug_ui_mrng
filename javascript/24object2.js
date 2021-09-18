var calc = {
    sum: function(a,b){return a+b},
    sub: (a,b) => {return a-b}
}

calc.sum(4,8)
12
calc.sub(8,4)
4

var dbQuery = {
    find:(table)=> { return `Select * from ${table}`},
    insert:(table,data) => { return `insert into ${table} name,city values(${data.name}, ${data.city})`}
}

dbQuery.find('User')
'Select * from User'
dbQuery.find('employee',{name:'John',city:'Delhi'})
'Select * from employee'
dbQuery.insert('employee',{name:'John',city:'Delhi'})
'insert into employee name,city values(John, Delhi)'

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

// you can only update the property
Object.seal(movies)
{name: 'Avengers', rating: 4.5, lang: 'English'}
movies.rating
4.5
movies.rating = 4.7
4.7
movies
{name: 'Avengers', rating: 4.7, lang: 'English'}
movies.ind="Hollywood"
'Hollywood'
movies
{name: 'Avengers', rating: 4.7, lang: 'English'}
delete movies.lang
false

// we cannot update/add or remove any property
Object.freeze(movies)
{name: 'Avengers', rating: 4.5, lang: 'English'}
movies.rating=5
5
movies
{name: 'Avengers', rating: 4.5, lang: 'English'}
delete movies.lang
false
movies.ind= "Hollywood"
'Hollywood'
movies
{name: 'Avengers', rating: 4.5, lang: 'English'}