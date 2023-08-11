const db = require("../../config/sequelizeConfig");
const sequelize = require("../../config/database");
const workspaceUserService = require("../workspaceUser/workspaceUserService");

const Workspace = db.workspaces;

const insert = () => {};

const getAll = async (data, callBack) => {
  try {
  } catch (err) {
    callBack(err);
  }
};
