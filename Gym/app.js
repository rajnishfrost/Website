const express = require("express");
const path = require("path");
const fs = require("fs");
const { urlencoded } = require("express");
const req = require("express/lib/request");
const app = express();
const port = 8001;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = { 'title': 'PubG is the best game', "content": con }
    res.render('index.pug');
});
//========================================================================================================================
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart', { useNewUrlParser: true });

const kittySchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    address: String,
    more: String
});
pname='';
page='';
pgender='';
paddress='';
pmore='';


//========================================

app.post('/', (req, res) => {
    pname = req.body.name;
    page = req.body.age;
    pgender = req.body.gender;
    paddress = req.body.address;
    pmore = req.body.more;



    const gym = mongoose.model('gym', kittySchema);

    const add = new gym({
        name: pname,
        age: page,
        gender: pgender,
        address: paddress,
        more: pmore
    });
    
    add.save(function (err, silence) {
        if (err)
            return console.log(err);
    
    })


    // let outputToWrite = `the name of the client is ${pname}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
    // [fs.writeFileSync('output.txt', outputToWrite);]
    const params = { 'Message': 'Form Submitted Successfully' };
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

