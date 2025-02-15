const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');

env.config();


const app = express();

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})