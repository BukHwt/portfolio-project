import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 10000,
  max: 20,
  idleTimeoutMillis: 30000,
  keepAlive: true,
});
pool.on("error", (err) => {
  console.error("Unexpected error on idle client:", err.message);
});

pool
  .connect()
  .then((client) => {
    console.log("Connected to the database successfully");
    return client.query("SELECT NOW()").then((result) => {
      console.log("Current time:", result.rows);
      client.release();
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
    console.error("Detailed error:", err);
    process.exit(1);
  });

export default pool;
