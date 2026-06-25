import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not defined.")
}

const sql = postgres(connectionString, {
  max: 1,
  idle_timeout: 20,
})

export async function ensureTableExists() {
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      topic VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `
}

export default sql
