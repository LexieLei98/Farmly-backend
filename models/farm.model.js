const mongoose = require('mongoose');

//creating a new folder in the database
const farmSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: Object
    },
    description: {
        required: true,
        type: String
    },
    profile_pic: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: Array
    },
    user_id:{
        required: true,
        type: Number
    },
    farm_id: {
        required: false,
        type: Number
    },
    distance_from_location: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Farms', farmSchema)