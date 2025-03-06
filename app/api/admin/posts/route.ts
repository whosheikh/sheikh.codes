import { NextResponse } from "next/server"
import { query } from "@/lib/db"
import { verifyToken } from "@/lib/auth"

export async function GET(req: Request) {
  try {
    const token = req.cookies.get("token")
    const user = await verifyToken(token)

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const posts = await query("SELECT * FROM posts ORDER BY created_at DESC")

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching posts:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const token = req.cookies.get("token")
    const user = await verifyToken(token)

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await req.formData()
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const banner = formData.get("banner") as File

    // Handle banner upload (implement your own image upload logic)
    const bannerUrl = banner ? await uploadImage(banner) : null

    const result = await query("INSERT INTO posts (title, content, banner_url, author_id) VALUES (?, ?, ?, ?)", [
      title,
      content,
      bannerUrl,
      user.id,
    ])

    const post = {
      id: result.insertId,
      title,
      content,
      bannerUrl,
      authorId: user.id,
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error("Error creating post:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function uploadImage(file: File): Promise<string> {
  // Implement your image upload logic here
  // This could involve uploading to a cloud storage service like AWS S3 or Cloudinary
  // Return the URL of the uploaded image
  return "https://example.com/uploaded-image.jpg"
}

