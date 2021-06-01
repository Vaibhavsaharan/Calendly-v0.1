const connectDb = require('./db/connectDb.js');
connectDb();
//60b39fd8231ccb4104002988

var User = require('./models/user');
var EventType = require('./models/user');

var newEventType = new EventType({
    owner_id : "60b39fd8231ccb4104002988",
    name : "30 Minutes Interview",
    active : true,
    scheduling_url : "http://localhost:5000/api/schedule"
});

newEventType.save(function(err) {
    if(err) {
        return handleError(err);
    }
    console.log('saved')
});