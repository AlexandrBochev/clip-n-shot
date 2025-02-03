export const captureScreen = async () => {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        displaySurface: "window",
      }
    })

    const video = document.createElement("video")
    video.srcObject = stream
    await new Promise(resolve => (video.onloadedmetadata = resolve))
    video.play()

    const canvas = document.createElement("canvas")
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext("2d")

    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    }

    const screenshotUrl = canvas.toDataURL("image/png")
    chrome.tabs.create({ url: `editor.html?screenshot=${encodeURIComponent(screenshotUrl)}` })
    stream.getTracks().forEach(track => track.stop())
  } catch (error) {
    console.error("❌ Error capturing screen:", error)
  }
}

export const captureViewport = () => {
  chrome.runtime.sendMessage({ action: "captureViewport" }, (response) => {
    if (response?.screenshot) {
      chrome.tabs.create({ url: `editor.html?screenshot=${encodeURIComponent(response.screenshot)}` })
    } else {
      console.error("❌ Error capturing viewport:", response?.error)
    }
  })
}