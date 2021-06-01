import http from "../http-common";

const create = data => {
	return http.post("/schedule_events/create", data);
};

const get = eid => {
	return http.get(`/schedule_events/${eid}`);
};

const getAll = uid => {
	console.log(uid)
	console.log(`/schedule_events/all/${uid.userId}`)
    return http.get(`/schedule_events/all/${uid.userId}`);
};
  
const EventService = {
	getAll,
	get,
	create,
};

export default EventService;