// import { DataTypes } from "sequelize";
// import sq from "../../config/conn.js";

const DataTypes = require("sequelize");
const { sq } = require("./config/conn");

const guestTb = sq.define("guest_tb", {
  id: {
    type: DataTypes.STRING(),
    primaryKey: true,
  },
  ingroup: {
    type: DataTypes.BOOLEAN(),
    allowNull: false,
  },
  visitors: {
    type: DataTypes.INTEGER(),
    allowNull: false,
  },
  purpose: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  to_meet: {
    type: DataTypes.STRING(),
    // allowNull:false
  },
  scheduled: {
    type: DataTypes.BOOLEAN(),
  },
});

await sq.sync({ force: true });
console.log("All models were synchronized successfully.");

export default guestTb;
