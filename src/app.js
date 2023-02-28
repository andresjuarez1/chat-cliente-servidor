import express from "express";
import path from "path";
const fileUpload = require('express-fileupload')


const app = express();
app.use(fileUpload())

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "public")));

export default app;
