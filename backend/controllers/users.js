import { v4 as uuid } from "uuid";

let users = [];
let clients = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("User Deleted successfully..");
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.name = req.body.name;
  user.email = req.body.email;
  user.address = req.body.address;

  res.send("User Updated successfully..");
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  res.send("User created successfully..");
};

export const createClient = (req, res) => {
  const client = req.body;

  clients.push({ ...client, id: uuid() });
  res.send("Contact send successfully..");
};

export const getClient = (req, res) => {
  res.send(clients);
};
