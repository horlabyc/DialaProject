const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api-routes');
const bodyParser = require('body-parser');
const app = new express();




app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', apiRoutes);
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/MockPremierLeague'); 
mongoose.connect('mongodb://localhost/MockPremierLeague');
var db = mongoose.connection;

// check for db connection
if(!db) {
    console.log('Error connecting to DB');
} else {
    console.log('Connection established with DB');
}

app.get('/', (req, res) => {
    res.send('Hello Dear, you still have a long way to go sha');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application listening on port` + port);
})