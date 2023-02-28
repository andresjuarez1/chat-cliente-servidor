import express from "express";
import path from "path";
const fileUpload = require('express-fileupload')


const app = express();
app.use(fileUpload())
// settings
app.set("port", process.env.PORT || 3000);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
export default app;
