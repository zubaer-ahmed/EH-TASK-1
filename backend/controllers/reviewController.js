const models = require("../models");

// Methods to be executed on routes
const getReviews = async (req, res) => {
  return res.json(await models.Review.find({}));
};
const updateReview = async (req, res) => {
  return res.json(
    await models.Review.updateOne({ _id: req.body._id }, req.body)
  );
};
const deleteReview = async (req, res) => {
  return res.json(await models.Review.deleteOne({ _id: req.body._id }));
};
const createReview = async (req, res) => {
  return res.json(await models.Review.create(req.body));
};
// Export of all methods as object
module.exports = {
  getReviews,
  updateReview,
  deleteReview,
  createReview,
};
