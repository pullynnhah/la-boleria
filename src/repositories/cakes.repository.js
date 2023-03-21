import db from "../database/db.connection.js";

export const postCake = async (name, price, description, image, flavourId) => {
  return db.query(
    /*sql*/ `
  INSERT INTO cakes (name, price, description, image, "flavourId")
  SELECT $1, $2, $3, $4, $5
  WHERE NOT EXISTS (SELECT * FROM cakes WHERE name = $6);`,
    [name, price, description, image, flavourId, name]
  );
};
