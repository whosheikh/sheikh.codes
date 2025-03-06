"use client"

import Link from "next/link"
import { ArrowLeft, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-green-400 p-4">
      <div className="container mx-auto">
        <Link href="/" className="mb-8 flex items-center text-sm hover:text-green-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Support My Work</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Buy Me a Coffee</CardTitle>
              <CardDescription>Support my work with a one-time donation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Your support helps me continue creating content and developing open-source projects.
              </p>
              <Input placeholder="Amount (USD)" type="number" min="1" step="0.01" />
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Coffee className="mr-2 h-4 w-4" />
                Buy me a coffee
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cryptocurrency Donation</CardTitle>
              <CardDescription>Donate using cryptocurrency</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Send your donation to the following Ethereum address:</p>
              <code className="block p-2 bg-gray-800 rounded">0xBFD25B75E9a742cEC6ea68D06d631f6EF14Cfa82</code>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={() => navigator.clipboard.writeText("0xBFD25B75E9a742cEC6ea68D06d631f6EF14Cfa82")}
              >
                Copy Address
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p>
            Your support means the world to me and helps me continue my work in web development, SEO, and open-source
            projects. Every contribution, no matter the size, is greatly appreciated!
          </p>
        </div>
      </div>
    </div>
  )
}

