import db from "../database/db.connection.js";

export const postOrder = async (clientId, cakeId, quantity) => {
  return db.query(
    /*sql*/ `
  INSERT INTO orders ("clientId", "cakeId", "quantity", "totalPrice")
  SELECT $1, $2, $3, $4 * (SELECT price FROM cakes WHERE id = $5)
  WHERE EXISTS (SELECT * FROM clients WHERE id = $6)
  AND EXISTS (SELECT * FROM cakes WHERE id = $7);`,
    [clientId, cakeId, quantity, quantity, cakeId, clientId, cakeId]
  );
};
