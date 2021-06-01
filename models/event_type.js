const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    owner_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true },
    name : {type : String, required: true},
    active : {type : Boolean , required: true},
    scheduling_url : {type : String, required: true},
    duration : {type : Number , required: true},
    },{
    timestamps : {
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    }
});

module.exports = mongoose.model('EventType', schema);