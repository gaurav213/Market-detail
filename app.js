import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import route from "./route/route.js";
import contactroute from "./route/contact-route.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", route);
app.use("/contacts", contactroute);

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3005;
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  .then(() => {
    console.log("connection succes");
  })
  .catch((err) => console.log(`no connection`));

  //  deploy

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Contact = new mongoose.model("Contact", userSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Contact.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "log in succ", user: user });
      } else {
        res.send({ message: " pass incorrect" });
      }
    } else {
      res.send({ message: "user not register" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
