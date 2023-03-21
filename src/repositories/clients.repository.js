import db from "../database/db.connection.js";

const postClient = (name, address, phone) => {
  return db.query(
    /*sql*/ `
  INSERT INTO clients (name, address, phone)
  VALUES ($1, $2, $3);`,
    [name, address, phone]
  );
};

export { postClient };
