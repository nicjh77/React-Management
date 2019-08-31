const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = process.env.SERVER_PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const customerProcess = require('./apis/customer');

app.use('/api/customers', customerProcess());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});