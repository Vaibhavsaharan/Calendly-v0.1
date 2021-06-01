const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {type : String, required: true},
    email : {type : String , required: true},
    },{
    timestamps : {
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    }
});

module.exports = mongoose.model('User', schema);