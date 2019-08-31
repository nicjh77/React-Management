const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/api/customers/', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'John Doe',
            'birthday': 20100909,
            'gender': 'female',
            'job': 'student'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'Jain March',
            'birthday': 20120303,
            'gender': 'female',
            'job': 'Admin'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Aaron Park',
            'birthday': 20090605,
            'gender': 'male',
            'job': 'doctor'
          }
    ]);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});