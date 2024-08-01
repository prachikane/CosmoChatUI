const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {logger} = functions;

exports.getMessages = functions.https.onCall(async (data, context) => {
  try {
    // const db = 
    
  } catch (error) {
    logger.error("Error retrieving messages: ", error);

    throw new functions.https.HttpsError(
        "unknown",
        "An error occured while retrieving these messages",
        error.message,
    );
  }
});
