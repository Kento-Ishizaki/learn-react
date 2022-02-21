const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

const sendRes = (res, statusCode, body) => {
  res.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

exports.addDataset = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    sendRes(res, 405, "Invalid request!");
  } else {
    const dataset = req.body;
    for (const key of Object.keys(dataset)) {
      const data = dataset[key];
      await db.collection("questions").doc(key).set(data);
    }
    sendRes(res, 200, { message: "Successfully added dataset!" });
  }
});
