import passport from "passport";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import prisma from "../../config/conn.js";
import "dotenv/config";
import bcrypt from "bcrypt";

const saltRounds = 15;

class controller {
  static async login(req, res, next) {
    passport.authenticate("login", async (err, user, info) => {
      try {
        if (err || !user) {
          // const error = new Error("An error occured");
          return next(err);
        }
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);
          const body = { _id: user.id, email: user.email, name:user.name, gedung:user.gedung };
          const token = jwt.sign({ user: body }, process.env.KEY);
          return res.json({token});
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  }

  
}

export default controller;
