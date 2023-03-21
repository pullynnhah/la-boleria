import db from "../database/db.connection.js";

export const postFlavour = async name => {
  return db.query(
    /*sql*/ `
  INSERT INTO flavours (name)
   SELECT $1
   WHERE NOT EXISTS (SELECT * FROM flavours WHERE name = $2);`,
    [name, name]
  );
};
