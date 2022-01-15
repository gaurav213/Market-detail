import User from "../model/user-schema.js";
import Contact from "../model/user-message-schema.js";
export const getUsers = async (request, response) => {
  try {
    let user = await User.find().sort({ _id: -1 });
    response.json(user);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const addUser = async (request, response) => {
  const user = request.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    response.json(newUser);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const addDetail = async (request, response) => {
  const contact = request.body;
  const newMessage = new Contact(contact);

  try {
    await newMessage.save();
    response.json(newMessage);
  } catch (error) {
    response.json({ message: error.message });
  }
};
