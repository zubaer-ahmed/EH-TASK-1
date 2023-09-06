const models = require("../models");

// Methods to be executed on routes
const getJobs = async (req, res) => {
  return res.json(await models.Job.find({}));
};

// Export of all methods as object
module.exports = {
  getJobs,
};
