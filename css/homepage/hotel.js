var cityUrl = "https://developerfunnel.herokuapp.com/location"
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

const getCity = async () => {
    let response = await fetch(cityUrl);
    var data = await response.json();
    console.log(data)
    data.map((item) => {
        var element = document.createElement('option')  // <option></option>
        var text = document.createTextNode(item.city_name) // Delhi
        element.appendChild(text) // <option>Delhi</option>
        element.value = item._id // <option value="1">Delhi</option>
        document.getElementById('city').appendChild(element) //<select><option value="1">Delhi</option></select>
    })
}

function getHotel(){
    var SelectedCity =  document.getElementById('city').value;
    var Hotels =  document.getElementById('restDrop');

    while(Hotels.length>0){
        Hotels.remove(0);
    }

    fetch(`${hotelUrl}${SelectedCity}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option')
            var text = document.createTextNode(`${item.name} | ${item.locality}`) 
            element.appendChild(text)
            element.value = item._id 
            Hotels.appendChild(element)
        })
    })
}

// https://developerfunnel.herokuapp.com/booking

/*
 for(i=0;i<data.length;i++){
        var element = document.createElement('option')  // <option></option>
        var text = document.createTextNode(data[i].city_name) // Delhi
        element.appendChild(text) // <option>Delhi</option>
        element.value = data[i]._id // <option value="1">Delhi</option>
        document.getElementById('city').appendChild(element)
    }
*/