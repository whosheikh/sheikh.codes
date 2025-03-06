import { NextResponse } from "next/server"
import { sign } from "jsonwebtoken"
import { query } from "@/lib/db"
import { createHash } from "crypto"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    // Hash the password with SHA-256 (not as secure as bcrypt but doesn't require external dependency)
    const hashedPassword = createHash("sha256").update(password).digest("hex")

    // Get user from database
    const users = await query("SELECT * FROM users WHERE email = ?", [email])
    const user = users[0] as { id: string; password: string } | undefined

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Compare password hashes
    // In a real app, you should use a proper password hashing library like bcrypt
    // This is a simplified version for demonstration
    const passwordMatch = user.password === hashedPassword

    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Create JWT token
    const token = sign({ userId: user.id }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "1h" })

    // Create response
    const response = NextResponse.json({ success: true, token })

    // Set cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

