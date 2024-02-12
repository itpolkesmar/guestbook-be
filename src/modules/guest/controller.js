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


}

export default controller;
