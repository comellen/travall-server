require('dotenv').config();

const express = require('express');
const app = express();

const user = require('./controllers/usercontroller');
const trip = require('./controllers/tripcontroller');

const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/user', user);

app.use(require('./middleware/validatesession'));
app.use('/trips', trip);


app.listen(process.env.PORT, () => console.log(`.....!@#$%^&**&^%$#@! APP IS LISTENING ON ${process.env.PORT} !@#$%^&**&^%$#@!.....`));