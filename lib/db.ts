import mysql from "serverless-mysql"

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT || "3306"),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
})

export interface QueryResult {
  [key: string]: any
}

export async function query(q: string, values: any[] = []): Promise<QueryResult[]> {
  try {
    const results = await db.query(q, values)
    await db.end()
    return results as QueryResult[]
  } catch (error) {
    throw new Error(error as string)
  }
}

