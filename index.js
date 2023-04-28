//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Genero la conexion entre el server y la DB
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getDataApi} = require('./src/controllers/dataApi.js');
require('dotenv').config();
const { PORT } = process.env;

const port = PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  await getDataApi()
  server.listen(port, () => {
    console.log('%s listening at 3001', server.name); // eslint-disable-line no-console
    console.log('connected to the database');
  });
}).catch(error => {
  console.log('The connection to the database could not be established');
});

