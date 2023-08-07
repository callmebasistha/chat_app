const transporter = require("./emailConfig");

module.exports.sendMail = (message) => {
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "no-reply@bigyankharel.com.np", // sender address
      to: message.to, // list of receivers
      subject: message.subject, // Subject line
      text: message.text, // plain text body
      html: message.html,
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
};
