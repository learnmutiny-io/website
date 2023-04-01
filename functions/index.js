const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const sgMail = require("@sendgrid/mail");

admin.initializeApp(functions.config().firebase);

const SENDGRID_API = functions.config().sendgrid.key;
const SENDGRID_TEMPLATE = functions.config().sendgrid.template;
sgMail.setApiKey(SENDGRID_API);

// Cloud Function to send email from form
exports.sendEmailFromForm = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    res.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "GET, POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.status(200).send("");
    }

    if (req.method === "POST") {
      const { name, email, userType } = req.body;
      const msg = {
        to: email,
        from: "admin@learnmutiny.io",
        templateId: SENDGRID_TEMPLATE,
        dynamic_template_data: {
          name: name,
          userType: userType,
        },
        subject: "welcome to learnmutiny",
      };
      try {
        await sgMail.send(msg);
        console.log("Email sent successfully");
        res.status(200).send("Email sent successfully");
      } catch (error) {
        console.error(error);
        res.status(500).send("Error sending email");
      }
    } else {
      res.status(405).send("Method Not Allowed");
    }
  });
});
