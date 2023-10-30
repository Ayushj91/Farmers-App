const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const app= express();
const data= require('./models/dataschema');

const uri = "mongodb://0.0.0.0:27017/data";

app.use(express.json());

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Database connected');
    // data.collection.insertOne({name: 'test', number: '1234567890', crop_name: [], crop_area: [], products_used: []});
}).catch(err => {
    console.log(err);
});

app.use(cors());

app.get('/', (req, res) => {
    res.send({html: 'Hello World'});
});

app.get('/data', (req, res) => {
    data.find().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
});

app.post('/data', (req, res) => {
    const {name, number, cropData} = req.body;
    console.log(cropData);
    const newdata= new data({
        name,
        number,
        cropData
    });
    newdata.save().then(() => {
        res.send('Data added');
    }).catch(err => {
        console.log(err);
    });
});

app.listen(4000, () => {
    console.log('Server on port 4000');
});




// {data.map((item) => {
                 
// })};