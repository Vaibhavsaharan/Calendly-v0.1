//Import the mongoose module
var mongoose = require('mongoose');

const connectDB = async () => {
    var mongoDB = 'mongodb+srv://vaibhav:E4pToQDqUNPJpAtD@cluster0.uy1hb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    try {
      await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log('[Done] : Connected to mongodb atlas');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };

var db = mongoose.connection;

module.exports = connectDB;