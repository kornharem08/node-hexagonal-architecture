const UserService = require('../domain/services/user.service');

exports.getAllUsers = async (req, res) => {
  const users = await UserService.getAllUsers();
  res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
  const user = await UserService.getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
};

exports.createUser = async (req, res) => {
  const user = await UserService.createUser(req.body);
  res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
  const user = await UserService.updateUser(req.params.id, req.body);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  const user = await UserService.deleteUser(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
};
