
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
     direccion: {
          demand: true,
          desc: 'Nombre de la ciudad',
          alias: 'd'
     }
}).argv;

lugar.getLugar(argv.direccion).then((data) => {
     clima.getWeather(data.lat, data.lon)
     .then(res => {
          console.log(`El clima para la ciudad de ${data.dir} es de: ${res} C`);
     })
     .catch(err => {
          console.log(err);
     })
}).catch(err => {
     console.log(err);
})

/*let infoWeather = async (direccion) => {

     try {
          const coords = await lugar.getLugar(direccion);
          const res = await clima.getWeather(coords.lat, coords.lon);
          return`El clima para la ciudad de ${coords.dir} es de: ${res} C`;
     } catch (error) {
          return 'No se pudo encontrar resultados para esta dirrecion ' + direccion;
     }
}

infoWeather(argv.direccion).then((c) => {
     console.log(c);
}).catch(err => {
     console.log(err);
})
*/
