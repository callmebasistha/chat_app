const db = require("../../config/sequelizeConfig");

const Otp = db.otps;
const insert = async (data) => {
  try {
    const currentDate = new Date();
    const expiryDate = new Date();
    expiryDate.setMinutes(currentDate.getMinutes() + 3);
    data.expiry = expiryDate;
    await Otp.create(data);
  } catch (err) {
    throw err;
  }
};

const verifyOtp = async (data, callBack) => {
  try {
    const existingToken = await Otp.findOne({
      where: { userId: data.userId },
      include: [{ all: true, nested: true }],
    });
    console.log(existingToken);
    if (existingToken === null)
      return callBack("Otp verification Failed", null);
    if (existingToken.expiry < new Date().getDate())
      return callBack("Token is expired.", null);
    if (existingToken.token != data.token)
      return callBack("Otp verification Failed", null);
    await Otp.destroy({ where: { userId: existingToken.userId } });
    return callBack(null, existingToken.dataValues);
  } catch (err) {
    callBack(err);
  }
};

module.exports = { insert, verifyOtp };
