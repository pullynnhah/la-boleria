import db from "../database/db.connection.js";

const postClient = (name, address, phone) => {
  return db.query(
    /*sql*/ `
  INSERT INTO clients (name, address, phone)
  VALUES ($1, $2, $3);`,
    [name, address, phone]
  );
};

const getClientOrders = id => {
  return db.query(
    /*sql*/ `
  SELECT o.id,
         o."createdAt",
         o.quantity, 
         o."totalPrice",
         o."isDelivered",
         c.name "cakeName"
  FROM clients cl 
  JOIN orders o ON o."clientId" = cl.id
  JOIN cakes c ON c.id = o."cakeId"
  WHERE cl.id = $1;
  `,
    [id]
  );
};
export { postClient, getClientOrders };
