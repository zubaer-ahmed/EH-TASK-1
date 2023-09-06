const models = require("../models");

// Methods to be executed on routes
const getServices = async (req, res) => {
  return res.json(await models.Service.find({}));
};

const updateService = async (req, res) => {
  return res.json(
    await models.Service.updateOne({ _id: req.body._id }, req.body)
  );
};

// Export of all methods as object
module.exports = {
  getServices,
  updateService,
};
