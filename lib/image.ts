import { getPlaiceholder } from "plaiceholder"
import type { ImageProps } from "next/image"

export async function getBlurDataURL(src: string): Promise<string> {
  try {
    const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()))

    const { base64 } = await getPlaiceholder(buffer)
    return base64
  } catch (error) {
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEkMSw1QDM4Njs7OTM9PURHSUVKNUs7PT5aV1FVWF9kaGR0eXp8fEL/2wBDAR..."
  }
}

export async function getImageMetadata(src: string): Promise<Partial<ImageProps>> {
  try {
    const imageResponse = await fetch(src)
    const arrayBuffer = await imageResponse.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { metadata, base64 } = await getPlaiceholder(buffer)

    return {
      ...metadata,
      blurDataURL: base64,
    }
  } catch (error) {
    console.error("Error getting image metadata:", error)
    return {}
  }
}

