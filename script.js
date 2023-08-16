const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dadec05e99mshc2d05e23c1a79b0p195e2bjsnf93becd957f4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetchWeather("Bengaluru")
async function fetchWeather(city) {
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();
        console.log(result);
        temp.innerText=result.temp;
        wind_speed.innerHTML=result.wind_speed;
        wp.innerText=result.cloud_pct;

        sbcty.innerHTML=city;
        mncty.innerHTML=city;

        if( cloud_pct<10){cloud_pct.innerText="Clear";}
        if( cloud_pct>10 && cloud_pct<84){cloud_pct.innerText="Cloudy";}
        else{cloud_pct.innerText="Stromy";}

        humidity.innerHTML=result.humidity;

        humidity.innerHTML=result.humidity;
        mntp.innerHTML=result.min_temp;
        mxtp.innerHTML=result.max_temp;
        wdg.innerHTML=result.wind_degrees;

        snrs.innerHTML=result.sunrise;
        snst.innerHTML=result.sunset;
    } catch (error) {
        console.error(error);
    }
}


search.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchWeather(city.value);   
})



