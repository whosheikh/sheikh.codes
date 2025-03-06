import { verify } from "jsonwebtoken"
import { query } from "./db"
import { cookies } from "next/headers"

export async function verifyToken(token?: string | null) {
  try {
    // If no token is provided, try to get it from cookies
    if (!token) {
      const cookieStore = cookies()
      token = cookieStore.get("token")?.value
    }

    if (!token) return null

    const decoded = verify(token, process.env.JWT_SECRET || "fallback_secret") as { userId: number }
    const users = await query("SELECT * FROM users WHERE id = ?", [decoded.userId])
    return users[0]
  } catch (error) {
    console.error("Token verification error:", error)
    return null
  }
}

export async function getServerSession() {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value

  if (!token) return null

  return verifyToken(token)
}

