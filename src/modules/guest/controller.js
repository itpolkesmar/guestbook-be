import { nanoid } from "nanoid";
import prisma from "../../config/conn.js";

class controller {
  static async addGuest(req, res, next) {
    const { name, instansi, ingroup, visitors, purpose, to_meet, scheduled } =
      req.body;

    const id = nanoid(16);
    const created_at = new Date().toISOString();
    const updated_at = created_at;

    const result = await prisma.guest.create({
      data: {
        id,
        name,
        instansi,
        ingroup,
        visitors,
        purpose,
        to_meet,
        scheduled,
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

  static async getGuest(req, res, next) {
    const result = await prisma.guest.findMany();

    try {
      res.status(201).json(result);
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
        res.status(201).json(result);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // static async updateGuestById(req, res, next) {
  //   const id = req.params.id
  // }

  static async deleteGuestById(req, res, next) {
    const id = req.params.id;
    const result = await prisma.guest.delete({
      where: {
        id: id,
      },
    });
    try {
      if (result) {
        res.status(201).json({ message: "data berhasil dihapus" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default controller;
