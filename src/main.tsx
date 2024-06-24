import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./app/App"
import { store } from "./app/store"
import FontStyles from "./assets/font-styles/font-styles"
import GlobalStyles from "./global"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <FontStyles />
      <Provider store={store}>
        <App />
      </Provider>{" "}
      <GlobalStyles />
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
