import { Router } from 'express';
import {data_users} from "../data";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", (req, res) => {
  const {email, password} = req.body;
  const user = data_users.find(user => user.email === email
    && user.password === password);

  if(user){
    res.send(generateTokenResponse(user));
  }else{
    res.status(400).send("User name or password is not valid!")
  }
})

const generateTokenResponse = (user: any) => {
  const token = jwt.sign({
    email: user.email, isAdmin: user.isAdmin
  }, "SecretText", {
    expiresIn:"1d"
  });

  user.token = token;
  return user;
}

export default router;