import db from "../database/db.connection.js";

const postOrder = (clientId, cakeId, quantity) => {
  return db.query(
    /*sql*/ `
  INSERT INTO orders ("clientId", "cakeId", "quantity", "totalPrice")
  SELECT $1, $2, $3, $4 * (SELECT price FROM cakes WHERE id = $5)
  WHERE EXISTS (SELECT * FROM clients WHERE id = $6)
  AND EXISTS (SELECT * FROM cakes WHERE id = $7);`,
    [clientId, cakeId, quantity, quantity, cakeId, clientId, cakeId]
  );
};

const getOrders = () => {
  return db.query(`${ORDERS_QUERY};`);
};

const getOrder = id => {
  return db.query(
    /*sql*/ `
    ${ORDERS_QUERY}
    WHERE o.id = $1
    `,
    [id]
  );
};

const ORDERS_QUERY = /*sql*/ `
SELECT o.id, o."createdAt", o.quantity, o."totalPrice", 
  json_build_object(
    'id', cl.id,
    'name', cl.name, 
    'address', cl.address, 
    'phone', cl.phone) AS client,
  json_build_object(
    'id', c.id,
    'name', c.name, 
    'price', c.price,
    'description', c.description, 
    'image', c.image,
    'flavour', json_build_object(
      'id', f.id,
      'name', f.name
    )) AS cake
  FROM orders o
  JOIN cakes c ON c.id = o."cakeId"
  JOIN flavours f ON f.id = c."flavourId"
  JOIN clients cl ON cl.id = o."clientId"
`;

export { postOrders, getOrders, getOrder };
