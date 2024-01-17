import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class controller {
  static async addGuest(req, res, next) {
    const { ingroup, visitors, purpose, to_meet, scheduled } = req.body;

    const created_at = new Date().toISOString();
    const updated_at = created_at;

    const result = await prisma.guest.create({
      data: {
        ingroup,
        visitors,
        purpose,
        to_meet,
        scheduled,
        created_at,
        updated_at,
      },
    });

    // console.log('ingroup:', ingroup)

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
