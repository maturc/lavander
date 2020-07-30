import mysql, { Pool, createPool } from 'mysql';

const pool: Pool = createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'slack-clone',
  port: 3306
});

//????
export function findAll(tableName: string) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(`SELECT * FROM ??`, [tableName]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}
//generic select query
export function find(targetField: string = "*", tableName: string, queryField: object, ) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(`SELECT ?? FROM ?? WHERE ?`, [targetField, tableName, queryField]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}
//SIGNUP insert
export function signUp(user: object) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(`INSERT INTO users SET ?`, [user]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}
//get CHANNELS from USER ID
export function getChannels(id_user: string) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(
      `SELECT DISTINCT c.id_channel, c.channel_name
      FROM members
        INNER JOIN channel_participants
        ON members.id_team = channel_participants.id_team
      
        INNER JOIN channels AS c
          ON channel_participants.id_channel = c.id_channel
      WHERE
        members.id_user = ?
      ORDER BY c.channel_name`, [id_user]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}
//get all CHANNELS
export function getAllChannels() {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(
      `SELECT * FROM channels`, []);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}
//get MESSAGES from CHANNEL ID
export function getMessages(id_channel: string) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(
      `SELECT u.id_user, u.username, u.avatar, m.message, m.time
      FROM messages AS m
      INNER JOIN users_public AS u
      ON m.id_user = u.id_user
      WHERE m.id_channel = ?
      ORDER BY m.time`, [id_channel]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}
//post MESSAGE
export function postMessage(message: object) {
  return new Promise((resolve, reject) => {
    const statement = mysql.format(`INSERT INTO messages SET ?`, [message]);
    pool.query(statement, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}