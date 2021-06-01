var EventType = require('../models/event_type');

exports.event_type_list = async function(req, res) {
    const userEventTypesList = await EventType.find({owner_id : req.params.uid}).exec();
    res.send(userEventTypesList);
};
exports.event_type_detail = async function(req, res) {
    var eventTypeId = req.params.etid;
    await EventType.findOne({_id : eventTypeId}, function (err, docs){
        if(err){
            console.log(err);
        }
        else res.send(docs);
    })
};
exports.event_type_create_post = function(req, res) {
    var eventTypeDetails = req.body;
    var eventType = new EventType({
        owner_id : eventTypeDetails.owner_id,
        name : eventTypeDetails.name,
        active : eventTypeDetails.active,
        scheduling_url : eventTypeDetails.scheduling_url,
        duration : eventTypeDetails.duration
    })
    eventType.scheduling_url = eventType.scheduling_url+"/"+eventType._id;
    eventType.save(function (err){
        if(err){
            console.log(err);
        }
    })
    res.status(201).send(eventType.scheduling_url);
};
