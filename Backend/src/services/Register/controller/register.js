const nodeMailer = require("nodemailer");
async function registerUser(req, res) {
  console.log(req.body);
  const { name, email, password } = req.body;

  const emailSender = await nodeMailer.createTransport({
    service: "gmail",
    sendmail: true,
    auth: {
      user: "muhammadqamarmushtaq@gmail.com",
      pass: "Qamar2000!",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const ContentInfo = {
    from: "qamar.socialmedia.handler@gmail.com",
    to: "qamarsheikhlhr@gmail.com",
    subject: "Email verification using OTP",
    text: "Hello sir How are you. Your OTP is ApnaMonDhoJaKe",
  };
  emailSender.sendMail(ContentInfo, (error, info) => {
    if (error) {
      console.log(error.message);
    }
    res.status(200).json({ message: info });
  });
}
function homePage(req, res) {
  console.log("Hello I am here");
  res.status(200).json({ message: "code IS WORKING" });
}

module.exports = { registerUser, homePage };
