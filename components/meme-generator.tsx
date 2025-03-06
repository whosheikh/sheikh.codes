"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function MemeGenerator() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [memeUrl, setMemeUrl] = useState("")

  const generateMeme = async () => {
    try {
      const response = await fetch(`https://api.imgflip.com/caption_image`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          template_id: "181913649", // Drake Hotline Bling meme template
          username: "your_imgflip_username",
          password: "your_imgflip_password",
          text0: topText,
          text1: bottomText,
        }),
      })
      const data = await response.json()
      if (data.success) {
        setMemeUrl(data.data.url)
      } else {
        console.error("Failed to generate meme:", data.error_message)
      }
    } catch (error) {
      console.error("Error generating meme:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Meme Generator</CardTitle>
        <CardDescription>Create your own Drake Hotline Bling meme!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <Input placeholder="Top text" value={topText} onChange={(e) => setTopText(e.target.value)} />
          <Input placeholder="Bottom text" value={bottomText} onChange={(e) => setBottomText(e.target.value)} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={generateMeme}>Generate Meme</Button>
        {memeUrl && <img src={memeUrl || "/placeholder.svg"} alt="Generated Meme" className="mt-4 max-w-full h-auto" />}
      </CardFooter>
    </Card>
  )
}

