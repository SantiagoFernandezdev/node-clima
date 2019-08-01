const axios = require('axios');
const getLugar = async (direccion) => {
     const url = encodeURI(direccion);

     const instance = axios.create({
          baseURL:  `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${url}`,
          headers: {'X-RapidAPI-Key': 'bccd5fdc5dmsh5461e4e40bf1e40p1f1debjsn7acbdf07b044'}
     });

     const resp = await instance.get();

     if(resp.data.Results.length === 0) {
          throw new Error('No existen resultados para ' + direccion);
     }

     const data = resp.data.Results[0];
     const dir = data.name,
          lat = data.lat,
          lon = data.lon;

     return {
          dir, lat, lon
     }
}



module.exports = {
     getLugar
}