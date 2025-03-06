import type { Metadata } from "next"
import CVPageClient from "./CVPageClient"

export const metadata: Metadata = {
  title: "CV - Likhon Sheikh",
  description: "Professional resume of Likhon Sheikh, Full-stack Developer based in Dhaka, Bangladesh",
}

export default function CVPage() {
  return <CVPageClient />
}

