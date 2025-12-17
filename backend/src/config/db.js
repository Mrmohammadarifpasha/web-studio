import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",        // PostgreSQL running on same EC2
  port: 5432,
  user: "dbuser",
  password: "StrongDBPasswordHere",
  database: "comdb",
  max: 10,                  // max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on("connect", () => {
  console.log("✅ PostgreSQL connected successfully");
});

pool.on("error", (err) => {
  console.error("❌ PostgreSQL pool error:", err);
  process.exit(1);
});

export default pool;

