const mongoose = require('mongoose');

const schema = new mongoose.Schema({
      owner_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true },
      name : {type : String, required: true},
      status : {type: Boolean, required : true},
      start_time : {type : Date, required: true},
      end_time : {type : Date, required: true},
      event_guests: {type : [String], required : true},
      event_type : {type: mongoose.Schema.Types.ObjectId, ref: 'EventType', required: true},
      },{
      timestamps : {
          createdAt : 'created_at',
          updatedAt : 'updated_at'
      }
});

module.exports = mongoose.model('Event', schema);