import axios from "axios";
const url = "https://shetakari-bajarpeth.herokuapp.com/users";
const message = "https://shetakari-bajarpeth.herokuapp.com/contacts";
const feedbackss = "https://shetakari-bajarpeth.herokuapp.com/feedback";

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
