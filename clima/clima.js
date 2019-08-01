
const axios = require('axios');
const getWeather = async (lat, lon) => {

     const instance = axios.create({
          baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2ff22ef8a14f279dc88e3cd00c6aaed2`
     })

     const resp = await instance.get();


     return Math.round((resp.data.main.temp - 273.15));
     
}

module.exports = {
     getWeather
}