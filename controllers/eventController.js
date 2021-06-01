var Event = require('../models/event');
var User = require('../models/user');
const mongoose = require('mongoose');

exports.event_list = async function(req, res) {
    console.log(req.params)
    var user = await User.findById(req.params.uid);
    await Event.find({$or: [{owner_id : mongoose.Types.ObjectId(req.params.uid)}, {event_guests: { "$in" : [user.email]}} ]} , function(err, docs){
        if(err){
            res.send(err);
        }
        res.send(docs)
    });

};
exports.event_detail = async function(req, res) {
    var eventId = req.params.eid;
    await Event.findOne({_id : eventId}, function (err, docs){
        if(err){
            console.log(err);
        }
        else res.send(docs);
    })
};
exports.event_create_post = function(req, res) {
    var eventDetails = req.body.eventInfo;
    console.log(eventDetails)
    var newEvent = new Event({
        owner_id: eventDetails.owner_id,
        name : eventDetails.name,
        status : eventDetails.status,
        start_time : eventDetails.start_time,
        end_time : eventDetails.end_time,
        event_guests: eventDetails.event_guests,
        event_type : eventDetails.event_type
    })
    newEvent.save(function(err){
        if(err){
            console.log(err);
        }
    })
    res.status(201).send(newEvent._id);
};
exports.event_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Event update POST');
};