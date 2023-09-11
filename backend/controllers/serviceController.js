const models = require("../models");

// Methods to be executed on routes
const getServices = async (req, res) => {
  return res.json(await models.Service.find({}));
};

const getService = async (req, res) => {
  const comment = await models.Service.findOne({ _id: req.params.id }).populate(
    "employer"
  );

  return res.json(comment);
};
const updateService = async (req, res) => {
  return res.json(
    await models.Service.updateOne({ _id: req.body._id }, req.body)
  );
};
const deleteService = async (req, res) => {
  return res.json(await models.Service.deleteOne({ _id: req.body._id }));
};
const createService = async (req, res) => {
  return res.json(
    await models.Service.create({ ...req.body, worker: req.user })
  );
};

// Export of all methods as object
module.exports = {
  getServices,
  getService,
  updateService,
  deleteService,
  createService,
};
