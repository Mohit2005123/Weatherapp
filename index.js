let key= "2710dcb21d1d044a9a3276901d2d6ad4";
async function getweather(city){
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    let resp= await axios.get(url);
    let ans= await resp.data;
    return ans;
    }
    catch{
        return "Not Found";
    }
}
// Temperature- It is given in kelvin we have to convert it into celcius
// Description
//Humidity
//wind speed

let temp= document.querySelector('.temp');
let type= document.querySelector('.type');
let humidity= document.querySelector('.humidity');
let windspeed= document.querySelector('.windspeed');
let input= document.querySelector('input');
let button= document.querySelector('button');
let waterdrop= document.querySelector('.waterdrop');
let wind= document.querySelector('.wind');
let  container= document.querySelector('.container');
console.dir(waterdrop);
let weathericon= document.querySelector('img');
let display='inline';
button.addEventListener('click', async ()=>{
    try{
        let city= input.value;
        let data=  await getweather(city);
        console.log(data);
        let t1= await (data.main.temp-273).toFixed(3);
        let des= await (data.weather[0].description);
        let humid= await(data.main.humidity);
        let speed= await(data.wind.speed);
        weathericon.style.display='inline';
        console.dir(weathericon);
        waterdrop.style.display=display;
        wind.style.display= display;
        temp.innerHTML=`<h2>${t1}<sup>o</sup> C</h2>`;
        type.innerHTML=`<h4>${des}</h4`;
        humidity.innerText= `${humid} % Humidity`;
        windspeed.innerText= `${speed} Km/h Windspeed`;
    }
    catch{
        waterdrop.style.display='none';
        wind.style.display= 'none';
        temp.innerHTML=`<h1> Sorry Location Not Found</h1>`;
        type.innerHTML='';
        humidity.innerText= '';
        windspeed.innerText= '';
        console.log('Error occured');
    }
});
document.addEventListener('keydown', async (event)=>{
    if(input.value.length>0 && event.code=='Enter'){
        try{
            let city= input.value;
            let data=  await getweather(city);
            console.log(data);
            let t1= await (data.main.temp-273).toFixed(3);
            let des= await (data.weather[0].description);
            let humid= await(data.main.humidity);
            let speed= await(data.wind.speed);
            weathericon.style.display='inline';
            waterdrop.style.display=display;
            wind.style.display= display;
            temp.innerHTML=`<h2>${t1}<sup>o</sup> C</h2>`;
            type.innerHTML=`<h4>${des}</h4`;
            humidity.innerText= `${humid} % Humidity`;
            windspeed.innerText= `${speed} Km/h Windspeed`;
        }
        catch{
            waterdrop.style.display='none';
            wind.style.display= 'none';
            temp.innerHTML=`<h1> Sorry Location Not Found</h1>`;
            type.innerHTML='';
            humidity.innerText= '';
            windspeed.innerText= '';
            console.log('Error occured');
        }
    }
});
