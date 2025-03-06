"use client"

import { useState, useEffect } from "react"

export function useImageLoader(src: string) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      setLoaded(true)
      setError(false)
    }

    img.onerror = () => {
      setLoaded(false)
      setError(true)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { loaded, error }
}

export function getImagePlaceholder(title: string) {
  return `https://placehold.co/600x400/1f2937/ffffff?text=${encodeURIComponent(title)}`
}

export function isExternalImage(src: string) {
  return src.startsWith("http") || src.startsWith("https")
}

