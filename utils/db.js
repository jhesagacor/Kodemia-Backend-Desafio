const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

module.exports = {
  connect: () => {
    return mongoose.connect(`mongodb+srv://${DB_USER}, ${DB_PASSWORD}, ${DB_HOST}, ${DB_NAME},`,
      { retryWrites: true }
    );
  },
};


