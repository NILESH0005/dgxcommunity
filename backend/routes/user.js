import express from "express";

import {
  addUser,
  verifyemail,
  Login,
  updatePassword
//   updateUser,
//   getUser
} from "../controllers/user.js";

const router = express.Router();

router.post("/addUser", addUser);
router.post("/verifyemail", verifyemail);
router.post("/updatePassword", updatePassword);

// router.post("/updateUser",updateUser)
// router.post('/getUser',getUser)
router.post("/login", Login);


export default router;