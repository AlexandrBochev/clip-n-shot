import { RefObject, useEffect, useRef, useState } from "react"
import Cropper from "cropperjs"
import "cropperjs/dist/cropper.css"

export const useScreenshot = () => {
  const [screenshot, setScreenshot] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const screenshotUrl = params.get("screenshot")
    setScreenshot(screenshotUrl)
  }, [])

  return [ screenshot ]
}

export const useCropper = (imageRef: RefObject<HTMLImageElement>) => {
  const cropperRef = useRef<Cropper | null>(null)

  const initializeCropper = () => {
    if (imageRef.current) {
      cropperRef.current = new Cropper(imageRef.current, {
        aspectRatio: NaN,
        viewMode: 1,
        autoCropArea: 1,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
      })
    }
  }

  useEffect(() => {
    return () => {
      cropperRef.current?.destroy()
    }
  }, [])

  const zoomIn = () => cropperRef.current?.zoom(0.1)
  const zoomOut = () => cropperRef.current?.zoom(-0.1)
  const rotateLeft = () => cropperRef.current?.rotate(-45)
  const rotateRight = () => cropperRef.current?.rotate(45)
  const reset = () => cropperRef.current?.reset()

  const handleDownload = () => {
    if (!cropperRef.current) return
    const croppedCanvas = cropperRef.current.getCroppedCanvas()
    const dataURL = croppedCanvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = dataURL
    link.download = "cropped-image.png"
    link.click()
  }

  return { cropperRef, initializeCropper, zoomIn, zoomOut, rotateLeft, rotateRight, reset, handleDownload }
}