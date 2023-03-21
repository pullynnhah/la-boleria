import db from "../database/db.connection.js";

const postFlavour = name => {
  return db.query(
    /*sql*/ `
  INSERT INTO flavours (name)
  SELECT $1
  WHERE NOT EXISTS (SELECT * FROM flavours WHERE name = $2);`,
    [name, name]
  );
};

const findFlavour = id => {
  return db.query(/*sql*/ `SELECT * FROM flavours WHERE id = $1`, [id]);
};

export { postFlavour, findFlavour };
