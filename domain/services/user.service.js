const User = require('../models/user.model');
const UserRepository = require('../../infrastructure/repositories/user.repository');

exports.getAllUsers = async () => {
  const users = await UserRepository.getAllUsers();
  return users;
};

exports.getUserById = async (id) => {
  const user = await UserRepository.getUserById(id);
  return user;
};

exports.createUser = async (data) => {
  const { name, email } = data;
  const user = new User(name, email);
  const createdUser = await UserRepository.createUser(user);
  return createdUser;
};

exports.updateUser = async (id, data) => {
  const user = await UserRepository.getUserById(id);
  if (!user) {
    return null;
  }
  const { name, email } = data;
  user.name = name || user.name;
  user.email = email || user.email;
  const updatedUser = await UserRepository.updateUser(user);
  return updatedUser;
};

exports.deleteUser = async (id) => {
  const user = await UserRepository.getUserById(id);
  if (!user) {
    return null;
  }
  const deletedUser = await UserRepository.deleteUser(id);
  return deletedUser;
};