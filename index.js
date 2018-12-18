require('dotenv').config();

const express = require('express');
const app = express();

const admin = require('./controllers/admincontroller');
const user = require('./controllers/usercontroller');
const travall = require('./controllers/travallcontroller');
const transport = require('./controllers/transportcontroller');
const activity = require('./controllers/activitycontroller');

const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync(
    {force: true}
);
app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/user', user);
app.use('/admin', admin);

// app.use(require('./middleware/validatesession'));

app.use('/travall', travall);
app.use('/transport', transport);
app.use('/activity', activity);


app.listen(process.env.PORT, () => console.log(`.....!@#$%^&**&^%$#@! APP IS LISTENING ON ${process.env.PORT} !@#$%^&**&^%$#@!.....`));