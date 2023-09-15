const models = require("../models");

// Methods to be executed on routes
const getOrders = async (req, res) => {
  return res.json(
    await models.Order.find({}).populate("user").populate("service")
  );
};

const getOrder = async (req, res) => {
  const order = await models.Order.findOne({ _id: req.params.id })
    .populate("user")
    .populate("service");

  return res.json(order);
};
const updateOrder = async (req, res) => {
  return res.json(
    await models.Order.updateOne({ _id: req.body._id }, req.body)
  );
};
const deleteOrder = async (req, res) => {
  return res.json(await models.Order.deleteOne({ _id: req.body._id }));
};
const postOrder = async (req, res) => {
  const newOrder = await models.Order.create({
    ...req.body,
    user: req.user,
    status: 0,
    statusText: "Ongoing",
  });
  await newOrder.save();

  await models.User.updateOne(
    { _id: req.user._id },
    { $push: { orders: newOrder._id } }
  );
  return res.json(newOrder);
};

// Export of all methods as object
module.exports = {
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  postOrder,
};
