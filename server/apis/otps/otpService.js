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

const resendToken = async (data, callBack) => {
  try {
    debugger;
    const existingToken = await Otp.findOne({
      where: { userId: data.userId },
    });
    if (existingToken != null) {
      await Otp.destroy({ where: { userId: existingToken.userId } });
      let otpText = "";
      helper.generateOTP((otp) => {
        otpText = otp;
      });
      data.token = otpText;
      insert(data);
    }
    return callBack;
  } catch (err) {
    callBack(err);
  }
};
const verifyOtp = async (data, callBack) => {
  try {
    debugger;
    const existingToken = await Otp.findOne({
      where: { userId: data.userId },
      include: [{ model: db.users }],
    });
    console.log(existingToken);
    if (existingToken === null)
      return callBack("Otp verification Failed", null);
    if (existingToken.expiry < new Date().getDate())
      return callBack("Token is expired.", null);
    if (existingToken.token != data.token)
      return callBack("Otp verification Failed", null);
    else await Otp.destroy({ where: { userId: existingToken.userId } });
    return callBack(null, existingToken.dataValues);
  } catch (err) {
    callBack(err);
  }
};

module.exports = { insert, verifyOtp, resendToken };
