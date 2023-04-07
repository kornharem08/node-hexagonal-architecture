// const User = require('../../domain/models/user.model');
const { connect, getDb } = require('../../config/database');

const getDbConnection = async () => {
  await connect();
  return getDb();
};

exports.getAllUsers = async () => {
  const db = await getDbConnection();
  const users = await db.collection('users').find().toArray()
  return users;
};

exports.getUserById = async (id) => {
  const db = await getDbConnection();
  const user = await db.collection('users').findOne({ _id: id });
  return user;
};

exports.createUser = async (user) => {
  const db = await getDbConnection();
  const result = await db.collection('users').insertOne(user);
  const createdUser = await db.collection('users').findOne({ _id: result.insertedId });
  return createdUser;
};

exports.updateUser = async (user) => {
  const db = await getDbConnection();
  const result = await db.collection('users').replaceOne({ _id: user._id }, user);
  const updatedUser = await db.collection('users').findOne({ _id: user._id });
  return updatedUser;
};

exports.deleteUser = async (id) => {
  const db = await getDbConnection();
  const result = await db.collection('users').deleteOne({ _id: id });
  return result.deletedCount === 1 ? { message: 'User deleted' } : null;
};

