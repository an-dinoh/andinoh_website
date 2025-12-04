import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

export const sql = neon(process.env.DATABASE_URL);

export async function createWaitlistTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS waitlist (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      user_type VARCHAR(50) NOT NULL CHECK (user_type IN ('customer', 'hotel')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function addToWaitlist(email: string, userType: 'customer' | 'hotel') {
  try {
    const result = await sql`
      INSERT INTO waitlist (email, user_type)
      VALUES (${email}, ${userType})
      RETURNING id, email, user_type, created_at
    `;
    return { success: true, data: result[0] };
  } catch (error: any) {
    if (error.code === '23505') { // Unique violation
      return { success: false, error: 'Email already registered' };
    }
    throw error;
  }
}

export async function getWaitlistCount() {
  const result = await sql`
    SELECT COUNT(*) as count FROM waitlist
  `;
  return parseInt(result[0].count);
}

export async function getWaitlistEntries() {
  const result = await sql`
    SELECT id, email, user_type, created_at
    FROM waitlist
    ORDER BY created_at DESC
  `;
  return result;
}
