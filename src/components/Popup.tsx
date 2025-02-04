import { captureScreen, captureViewport } from "../utils/utils"
import { Header } from "./ui/Header"

const CONTENT = {
  logoUrl: "icons/icon16.png",
  title: "ClipNShot",
  actions: [
    {
      key: "screen-window",
      title: "Screenshot (Screen/Window)",
      noClick: captureScreen,
    },
    {
      key: "viewport",
      title: "Screenshot (Viewport)",
      noClick: captureViewport,
    },
  ],
}

const Popup = () => {
  return (
    <div className="w-lg flex flex-col items-center gap-y-4 p-5 bg-white">
      <Header {...CONTENT} />
    </div>
  )
}

export { Popup }