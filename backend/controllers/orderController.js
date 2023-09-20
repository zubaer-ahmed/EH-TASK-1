const models = require("../models");
const getAllOrders = async (req, res) => {
  return res.json(
    await models.Order.find({}).populate("user").populate("provider")
  );
};
// Methods to be executed on routes
const getOrders = async (req, res) => {
  return res.json(
    await models.Order.find({
      user: req.user._id,
    })
      .populate("user")
      .populate("provider")
  );
};
const getAcceptedOrders = async (req, res) => {
  return res.json(
    await models.Order.find({
      provider: req.user._id,
    })
      .populate("user")
      .populate("provider")
  );
};

const getOrder = async (req, res) => {
  try {
    const order = await models.Order.findOne({ _id: req.params.id })
      .populate("user")
      .populate("provider");

    return res.json(order);
  } catch (err) {
    return res.json(null);
  }
};
const acceptOrder = async (req, res) => {
  try {
    const order = await models.Order.updateOne(
      { _id: req.params.id },
      {
        provider: req.user._id,
        step: 1,
      }
    );

    return res.json(order);
  } catch (err) {
    return res.json({ error: err });
  }
};
const markDone = async (req, res) => {
  try {
    const order = await models.Order.updateOne(
      { _id: req.params.id },
      {
        step: 2,
      }
    );
    return res.json(order);
  } catch (err) {
    return res.json({ error: err });
  }
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
    step: 0,
    data: req.body.data,
    user: req.user,
    status: 1,
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
  acceptOrder,
  markDone,
  getAllOrders,
  getOrders,
  getAcceptedOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  postOrder,
};
