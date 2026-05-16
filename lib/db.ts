import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

/**
 * Neon Postgres 데이터베이스 클라이언트
 * Vercel 환경 변수에 설정된 DATABASE_URL을 자동으로 사용합니다.
 */
export const sql = neon(process.env.DATABASE_URL);

/**
 * 사용 예시:
 * 
 * const users = await sql`SELECT * FROM users`;
 * console.log(users);
 * 
 * // 데이터를 삽입하는 예시
 * // await sql`INSERT INTO users (name, email) VALUES (${name}, ${email})`;
 */
