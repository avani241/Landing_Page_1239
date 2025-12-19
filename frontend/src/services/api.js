// src/services/api.js
import axios from "axios";

const API_BASE = "http://localhost:5000"; // Change to your backend URL if different

// Landing Page APIs
export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const fetchClients = async () => {
  try {
    const response = await axios.get(`${API_BASE}/clients`);
    return response.data;
  } catch (error) {
    console.error("Error fetching clients:", error);
  }
};

export const submitContact = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/contacts`, data);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact:", error);
  }
};

export const subscribeNewsletter = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/subscribers`, data);
    return response.data;
  } catch (error) {
    console.error("Error subscribing newsletter:", error);
  }
};

// Admin Panel APIs
export const addProject = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/projects`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding project:", error);
  }
};

export const addClient = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/clients`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding client:", error);
  }
};

export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${API_BASE}/contacts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

export const fetchSubscribers = async () => {
  try {
    const response = await axios.get(`${API_BASE}/subscribers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subscribers:", error);
  }
};
