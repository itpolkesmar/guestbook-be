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
          const body = { _id: user.id, email: user.email };

          const token = jwt.sign({ user: body }, process.env.KEY);
          return res.json(token);
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  }

  static async addLogin(req, res, next) {
    let { email, password, name, gedung } = req.body;

    const id = nanoid(16);
    const salt = bcrypt.genSaltSync(saltRounds);
    password = bcrypt.hashSync(password, salt);
    const created_at = new Date().toISOString();
    const updated_at = created_at;

    const result = await prisma.user.create({
      data: {
        id,
        email,
        password,
        name,
        gedung,
        created_at,
        updated_at,
      },
    });

    try {
      if (result) {
        res.status(201).json(result);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default controller;
