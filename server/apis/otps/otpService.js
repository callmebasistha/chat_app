const pool = require("../../config/database");
module.exports = {
  insert: (data) => {
    let date = new Date();
    let expiryDate = new Date();
    expiryDate.setTime(date.getTime() + 3 * 60 * 1000);
    debugger;
    pool.query(
      `insert into otp (token,user_id, expiry)
        values(?,?,?)
        `,
      [data.otp, data.userId, expiryDate],
      (error, results) => {
        if (error) {
          console.log(error);
        }
      }
    );
  },
};
