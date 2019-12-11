import React from "react"
import ReactDOM from "react-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import worktubeMaterialTheme from "material-ui-override/core"
import "./styles/styles.css"
import "./styles/bootstrap-grid-override.css"

const theme = createMuiTheme(worktubeMaterialTheme)

function App() {
  return <MuiThemeProvider theme={theme}>Content here</MuiThemeProvider>
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
