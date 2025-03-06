"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallback?: string
}

export function OptimizedImage({ src, alt, fallback = "/placeholder.svg", ...props }: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
    setImgSrc(fallback)
  }

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={handleError}
      className={`${props.className || ""} ${hasError ? "object-contain bg-muted" : ""}`}
      unoptimized={
        typeof src === "string" &&
        (src.includes("v0.blob.com") ||
          src.includes("github-readme-stats") ||
          src.includes("img.shields.io") ||
          src.includes("camo.githubusercontent.com"))
      }
    />
  )
}

