import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
pool
  .connect()
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1); // Exit the app on error to trigger a restart
  });

export default pool;
