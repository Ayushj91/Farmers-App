const mongoose= require('mongoose');

const schema= new mongoose.Schema({
    name: String,
    number: String,
    cropData: [
        {
            crop_name: String,
            crop_area: String,
            products_used: String,
        }
    ]

});

const data= mongoose.model('data', schema);

module.exports= data;