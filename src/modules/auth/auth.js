import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import prisma from "../../config/conn.js";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import bcrypt from 'bcrypt'
// import isValidPassword from "../../utils/validatePassword.js";
import "dotenv/config";

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = bcrypt.compareSync(password, user.password)
        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }
        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.KEY,
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(null, error);
      }
    }
  )
);
