import express from "express";

import { addDetail } from "../controller/user_controller.js";

const contactroute = express.Router();

contactroute.post("/contact", addDetail);

export default contactroute;
