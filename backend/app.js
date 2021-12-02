const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({origin: "*"}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("The server started on port 3000...");
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Welcome to our Backend<br><br></h1>"
    );
});

app.post("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
        console.log(`The mail has send and the id is ${info.messageId}`)
        res.send(info);
    });
});

async function sendMail(user, callback) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: details.email,
            pass: details.password
        }
    });

    let mailOptions = {
        from: '"zeeshan"zeeshanmd956@gmail.com',
        to: user.email,
        subject: "Testing nodemailer",
        html: `<h1>Hi ${user.name}</h1><br>
        <h4>Thanks for joining us</h4>`
    };

    let info = await transporter.sendMail(mailOptions);

    callback(info);
}
