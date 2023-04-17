import { connect } from "./db.js"
import { hasher } from "../utils/hasher/hasher.js";

async function insertUser(user) {
    const hash = await hasher(user.password)
    const sql = "INSERT INTO admin.users (username, email, first_name, last_name, password, role, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id"
    const values = [user.username, user.email, user.firstName, user.lastName, hash, user.role, user.createdAt] 
    const res = await executeQuery(sql, values);
    return res.rows[0]
    
}

async function getUserByUsername(username) {
    const res = await executeQuery("SELECT * FROM admin.users WHERE username = $1", [username]);
    return res.rows[0]
}

async function getUserByEmail(email) {
    const res = await executeQuery("SELECT * FROM admin.users WHERE email = $1", [email]);
    return res.rows[0]
}

async function getUserById(id) {
    const res = await executeQuery("SELECT * FROM admin.users WHERE id = $1", [id]);
    return res.rows[0]
}

async function deleteUserById(id) {
    const res = await executeQuery("DELETE FROM admin.users WHERE id = $1", [id]);
    return res.rows[0]
}

async function getPasswordByUsername(username) {
    const res = await executeQuery("SELECT password FROM admin.users WHERE username = $1", [username]);
    return res.rows[0]
}

async function updateUserById(id, newInfo) {
    const res = await executeQuery("UPDATE admin.users SET username = $1, first_name = $2, last_name = $3, email = $4 WHERE id = $5 RETURNING *", 
                                    [newInfo.username, newInfo.firstName, newInfo.lastName, newInfo.email, id]);
    return res.rows[0]
}

async function getUsers(id) {
    const res = await executeQuery("SELECT * FROM admin.users");
    return res.rows
}

async function executeQuery(sql, values) {
    const conn = await connect();
    try {
        const res = await conn.query(sql, values);
        return res;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    insertUser,
    getUserByUsername,
    getUserByEmail,
    getUserById,
    deleteUserById,
    getPasswordByUsername,
    updateUserById,
    getUsers
}