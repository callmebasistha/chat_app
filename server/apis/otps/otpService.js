const db = require("../../config/sequelizeConfig");

const Otp = db.otps;
const insert = async (data) => {
  try {
    await Otp.create(data);
  } catch (err) {
    throw err;
  }
};

const verifyOtp = async (data, callBack) => {
  try {
    let existingToken = Otp.findOne({ where: { userId: data.userId } });
    if (existingToken === null || existingToken.expiry > new Date()) {
      return callBack("Otp verification Failed", null);
    }
    return callBack(null, existingToken.dataValues);
  } catch (err) {
    callBack(err);
  }
};

module.exports = { insert, verifyOtp };
