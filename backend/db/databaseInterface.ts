import mysql, { Pool, createPool } from 'mysql';

const pool: Pool = createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'slack-clone',
  port: 3306
});

export function findAll(tableName: string) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(`SELECT * FROM ??`, [tableName]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}

export function findById(tableName: string, queryField: string | object, targetField: string = "*") {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(`SELECT ?? FROM ?? WHERE ?`, [targetField, tableName, queryField]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}

export function findByEmail(email: string) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(`SELECT * FROM users WHERE email=?`, [email]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}

export function signUp(user: object) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(`INSERT INTO users SET ?`, [user]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      console.log(results);
      console.log(results.insertId);
      return resolve(results);//delet????
    });
  });
}