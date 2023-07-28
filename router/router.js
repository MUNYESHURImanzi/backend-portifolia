

import { Router } from "express";
const router = Router();
import {
    createMessage,
  readAllMessages,
} from "../controller/controller.js";


router.post("/",createMessage);
router.get("/readAll", readAllMessages);


export default router;