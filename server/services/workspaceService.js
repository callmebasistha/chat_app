const db = require("../models");
const userService = require("./userService");

const { workspace, user } = require("../models");

const insert = async (payload, callBack) => {
  const t = await db.sequelize.transaction();
  let personName = payload.personName.split(" ");
  let data = {
    ...payload.workspace,
    createdBy: payload.userId,
  };
  let user = {
    firstName: personName[0],
    middleName: String(personName.slice(1, -1)),
    lastName: personName[personName.length - 1],
  };
  try {
    let insertedWorkspace = await workspace.create(data);
    let insertedWorkspaceId = insertedWorkspace.dataValues.id;
    let workspaceUser = {
      ...user,
      workspaceUser: {
        userId: payload.userId,
        workspaceId: insertedWorkspaceId,
        isAdmin: true,
      },
    };
    userService.update(workspaceUser);
    await t.commit();
    return callBack(null, insertedWorkspace);
  } catch (err) {
    callBack(err);
  }
};

const getAll = async (data, callBack) => {
  const t = await db.sequelize.transaction();
  try {
  } catch (err) {
    callBack(err);
  }
};

module.exports = { insert, getAll };
