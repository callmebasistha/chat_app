const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b86862bdf5e05f",
    pass: "18707465b710ce",
  },
});

module.exports = transporter;
