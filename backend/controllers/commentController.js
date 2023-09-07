const models = require("../models");

// Methods to be executed on routes
const getComments = async (req, res) => {
  const comments = await models.Comment.find({})
    .populate("senderId", "username") // Replace "username" with the actual field you want to populate from User model
    .populate("replies"); // Populate the "replies" field

  return res.json(comments);
};
const getComment = async (req, res) => {
  return res.json(await models.Comment.find({ _id: req.body._id }));
};
const updateComment = async (req, res) => {
  return res.json(
    await models.Comment.updateOne({ _id: req.body._id }, req.body)
  );
};
const deleteComment = async (req, res) => {
  return res.json(await models.Comment.deleteOne({ _id: req.body._id }));
};
const createComment = async (req, res) => {
  return res.json(await models.Comment.create(req.body));
};
// Export of all methods as object
module.exports = {
  getComments,
  getComment,
  updateComment,
  deleteComment,
  createComment,
};
