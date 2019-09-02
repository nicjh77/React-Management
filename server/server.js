const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = process.env.SERVER_PORT || 5000;
const cors = require('cors');

// file upload
const multer = require('multer');
const upload = multer({dest: './upload'})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const customerProcess = require('./apis/customer');

app.use('/image', express.static('./upload'));
app.use('/api/customers', upload.single('image'), customerProcess());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});