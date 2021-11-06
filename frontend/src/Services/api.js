import axios from "axios";
const url = "http://localhost:3005/users";
const message = "http://localhost:3005/contacts";
const feedbackss = "http://localhost:3005/feedback";

export const getUsers = async () => {
  return await axios.get(url);
};
export const addUser = async (user) => {
  return await axios.post(`${url}/add`, user);
};

export const addDetail = async (contact) => {
  return await axios.post(`${message}/contact`, contact);
};

export const addfeedback = async (feedback) => {
  return await axios.post(`${feedbackss}/feedback`, feedback);
};

export default getUsers;
