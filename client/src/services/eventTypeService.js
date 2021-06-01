import http from "../http-common";

const create = data => {
	return http.post("/events/create", data);
};

const get = etid => {
	return http.get(`/events/${etid}`);
};

const getAll = uid => {
    return http.get(`/events/all${uid}`);
};
  
const EventTypeService = {
	getAll,
	get,
	create,
};

export default EventTypeService;