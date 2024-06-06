const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require("dotenv")
const connectDB = require('./config/db.js')
const BookRoutes = require("./routes/api/book")
const UserRoutes = require("./routes/api/user")
const AdminRoute  = require("./routes/api/admin.js")
const bodyParser = require("body-parser");



dotenv.config({path : "./process.env"});

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use("/api/books",BookRoutes)
app.use("/api/user",UserRoutes)
app.use("/api/admin",AdminRoute)
connectDB();

const port = process.env.PORT || 8082;
app.listen(port, () => console.log('Server is running at http://localhost:8082'));