"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function AdminDashboard() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [banner, setBanner] = useState(null)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/posts")
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error("Error fetching posts:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("content", content)
    if (banner) {
      formData.append("banner", banner)
    }

    try {
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        toast({
          title: "Success",
          description: "Blog post created successfully!",
        })
        setTitle("")
        setContent("")
        setBanner(null)
        fetchPosts()
      } else {
        toast({
          title: "Error",
          description: "Failed to create blog post. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error creating post:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      })
    }
  }

  const handleLogout = () => {
    // Implement logout logic here
    router.push("/likhon")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Button onClick={handleLogout} className="mb-6">
        Logout
      </Button>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
          <CardDescription>Add a new blog post to your website.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="title"
                  placeholder="Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Textarea
                  id="content"
                  placeholder="Post Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="banner" type="file" onChange={(e) => setBanner(e.target.files[0])} accept="image/*" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Create Post</Button>
          </CardFooter>
        </form>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Existing Posts</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.content.substring(0, 100)}...</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={() => {
                  /* Implement edit functionality */
                }}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                className="ml-2"
                onClick={() => {
                  /* Implement delete functionality */
                }}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

