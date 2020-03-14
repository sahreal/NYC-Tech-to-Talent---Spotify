const dbPassword =
  "mongodb+srv://sahar:" +
  encodeURIComponent("sahar123!") +
  "@cluster0-3fpsm.mongodb.net/test?retryWrites=true&w=majority";

module.exports = {
  mongoURI: dbPassword
};
