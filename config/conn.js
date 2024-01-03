import dotenv from "dotenv"

dotenv.config()

import { Sequelize } from "sequelize";

const sq = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIAL,
    logging: false,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    pool: {
      max: 30,
      min: 0,
      idle: 10000,
      acquire: 60000,
    },
    timezone: "+07:00",
  }
);

// try {
//   await sq.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

export default sq
