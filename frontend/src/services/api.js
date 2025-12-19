import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchProjects = () => API.get("/projects");
export const fetchClients = () => API.get("/clients");

export const addProject = (data) => API.post("/projects", data);
export const addClient = (data) => API.post("/clients", data);

export const submitContact = (data) => API.post("/contact", data);
export const fetchContacts = () => API.get("/contact");

export const subscribeNewsletter = (data) => API.post("/newsletter");
export const fetchSubscribers = () => API.get("/newsletter");
