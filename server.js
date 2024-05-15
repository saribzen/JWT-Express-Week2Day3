const express = require('express')
const userRoutes = require('./routes/user')

port = 3000;
const app = express();
require('dotenv').config()

app.use(express.json());

app.use('/', userRoutes);

app.listen(port, () => console.log("Successfully listening at port " + port));