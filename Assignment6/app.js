const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser')

const routes = require ('./Routes/index');

const port = 5501;
const hostname = 'localhost';

const atlasDbUrl ='mongodb+srv://Zomato-56:277KYETuJgpmSHYg@cluster0.urvumiy.mongodb.net/Zomato-db?retryWrites=true&w=majority'

//user:Zomato-56
//pass:277KYETuJgpmSHYg      
//Database-name:Zomato-db
const app = express();

app.use(bodyParser.json())
app.use ('/', routes);

mongoose.connect(atlasDbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
})

.then( res => {
    app.listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}:${port}`)
    });
})
.catch(err => console.log(err));