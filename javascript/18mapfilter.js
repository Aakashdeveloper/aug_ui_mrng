var a = [5,4,7,3,8,9,11,21,34,56]
a.map((data) => {console.log(data)})

a.map((data) => {return data*2})
[10, 8, 14, 6, 16, 18, 22, 42, 68, 112]

a.map((data) => {return `<p>${data*2}</p>`})
['<p>10</p>', '<p>8</p>', '<p>14</p>', '<p>6</p>', '<p>16</p>', '<p>18</p>', '<p>22</p>', '<p>42</p>', '<p>68</p>']


var a = [10, 8, 14, 6, 16, 18, 22, 42,5,9, 68,11,21]
a.map((data) => {return data>15})
[false, false, false, false, true, true, true, true, false, false, true, false, true]

> map is use to iterate over the array
> it always return the same length of output array as input Array
> it is use to apply the logics like(math, return html)


/////////
> filter is use to filter out the value;
> it may or may not return the same length of output array as input Array
> it only return those value for which output or condition is true

var a = [10, 8, 14, 6, 16, 18, 22, 42,5,9, 68,11,21]
a.filter((data) => {return data>15})
[16, 18, 22, 42, 68, 21]

var a = [-1,0,1,2,3]
a.map((data) => {return data*2})
[-2,0,2,4,6]

a.filter((data) => {return data*2})
[-1,1,2,3]

[0]

