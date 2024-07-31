const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {logger} = functions;

exports.addMessage = functions.https.onCall(async (data, context) => {
  try {
    logger.log("Received message: ", data);

    // Check for valid arguments
    if (!data.message || !data.sender || !data.direction) {
      logger.log("Invalid arguments");
      throw new functions.https.HttpsError(
          "invalid-argument",
          "required fields text and userid not found",
      );
    }

    const {message, sender, direction} = data;

    // construct the message
    const messageData = {
      message,
      direction,
      sender,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Add message to the user collection
    const messageRef = await admin
        .firestore()
        .collection("chats")
        .doc("user1")
        .collection("messages")
        .add(messageData);

    logger.log("Message added successfully, messageId : ", messageRef.id);

    return {status: "Success", messageId: messageRef.id};
  } catch (error) {
    logger.error("Error adding message: ", error);

    throw new functions.https.HttpsError(
        "unknown",
        "An error occured while adding this message",
        error.message,
    );
  }
});
