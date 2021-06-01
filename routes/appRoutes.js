var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');
var event_controller = require('../controllers/eventController');
var event_type_controller = require('../controllers/eventTypeController');

/// User Routes ///

// Create a new user
router.post('/users/create', user_controller.user_create_post)
// Get information for a user
router.get('/users/:id', user_controller.user_detail)
// find user by email
router.post('/users/me', user_controller.user_iam) 
// Get list of all users
router.get('/users', user_controller.user_list)

/// Event Types Router ///

// Create a new Event Type
router.post('/events/create', event_type_controller.event_type_create_post)
// Get event type details
router.get('/events/:etid', event_type_controller.event_type_detail)
// Get list of all events related to a user
router.get('/events/all/:uid', event_type_controller.event_type_list)

/// Event Routes ///

// Book an event with a user
router.post('/schedule_events/create', event_controller.event_create_post)
// Update an event
router.put('/schedule_events/update/:eid', event_controller.event_update_put)
// Get information of a particular events scheduled for a user
router.get('/schedule_events/:eid', event_controller.event_detail)
// Get all events scheduled for a user
router.get('/schedule_events/all/:uid', event_controller.event_list)





module.exports = router;
