const AWS = require("aws-sdk");

AWS.config.update({ region: "eu-central-1" });
const sns = new AWS.SNS({ apiVersion: "2010-03-31" });

const sendSmsAWS = (payload) => sns.publish(payload).promise();

module.exports = { sendSmsAWS };
