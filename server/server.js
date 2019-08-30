const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: "hello express!"});
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});