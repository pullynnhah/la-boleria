import db from "../database/db.connection.js";

export const postClient = async (name, address, phone) => {
  return db.query(
    /*sql*/ `
  INSERT INTO clients (name, address, phone)
  VALUES ($1, $2, $3);`,
    [name, address, phone]
  );
};
