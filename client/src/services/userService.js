import http from "../http-common";

const getAll = () => {
  return http.get("/users");
};

const get = id => {
	return http.get(`/users/${id}`);
};

const getAuthUser = email =>{
	console.log(email)
	return http.post('/users/me',email)
}

const create = data => {
	return http.post("/users/create", data);
};


const UserService = {
	getAll,
	get,
	create,
	getAuthUser
};

export default UserService;