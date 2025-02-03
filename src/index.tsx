import { createRoot } from "react-dom/client"
import "@/styles/global.css"
import { Popup } from "./components/Popup"
import { Editor } from "./components/Editor"

const popupRoot = document.getElementById("root")
const editorRoot = document.getElementById("editor-root")

if (popupRoot) {
  createRoot(popupRoot).render(<Popup />)
} else if (editorRoot) {
  createRoot(editorRoot).render(<Editor />)
}