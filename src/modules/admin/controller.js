import prisma from "../../config/conn.js";
import bcrypt from "bcrypt";

const saltRounds = 15;
// const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

class controller {
  static async addUser(req, res, next) {
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
        res.status(201).json({
          message: result,
          user: req.user,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getUser(req, res, next) {
    const result = await prisma.user.findMany();

    try {
      res.status(201).json({
        message: result,
        user: req.user,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getUserById(req, res, next) {
    const id = req.params.id;

    const result = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    try {
      if (result) {
        res.status(201).json({
          message: result,
          user: req.user,
          //   token: req.query.secret_token,
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateUser(req, res, next) {
    const id = req.params.id;
    let { email, password, name, gedung } = req.body;

    const salt = bcrypt.genSaltSync(saltRounds);
    password = bcrypt.hashSync(password, salt);

    const updated_at = new Date().toISOString();

    const result = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...(email && { email }),
        ...(password && { password }),
        ...(name && { name }),
        ...(gedung && { gedung }),
        updated_at,
      },
    });

    try {
      if (result) {
        res.status(500).json({
          message: result,
          user: req.user,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteUser(req, res, next) {
    const id = req.params.id;

    const result = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    try {
      if (result) {
        res.status(201).json({
          message: "data berhasil dihapus",
          user: req.user,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  static async getGuest(req, res, next) {
    const result = await prisma.guest.findMany();

    try {
      res.status(201).json({
        message: result,
        user: req.user,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getGuestById(req, res, next) {
    const id = req.params.id;

    const result = await prisma.guest.findUnique({
      where: {
        id: id,
      },
    });

    try {
      if (result) {
        res.status(201).json({
          message: result,
          user: req.user,
          //   token: req.query.secret_token,
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async deleteGuestById(req, res, next) {
    const id = req.params.id;
    const result = await prisma.guest.delete({
      where: {
        id: id,
      },
    });
    try {
      if (result) {
        res.status(201).json({
          message: result,
          user: req.user,
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default controller;
