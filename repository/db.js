import pg from "pg";

export async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: process.env.POSTGRES_STRING
    });
    global.connection = pool;
    return pool.connect();
};