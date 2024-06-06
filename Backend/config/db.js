const mongoose = require('mongoose');
const connectionString =
  "mongodb+srv://libraryApp:myPassword@cluster0.ppwn2ab.mongodb.net/Books?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);
const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Database connected Successfully");
    }
    catch(err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;