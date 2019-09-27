import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { JSDOM } from "jsdom"

configure({ adapter: new Adapter() })

const document = new JSDOM(
  "<html><head><script></script></head><body></body></html>",
  {
    url: "http://localhost:4000"
  }
)

type Global = {
  document: Document
  window: Window
  navigator: Navigator
}

declare let global: Global

global.window = document.window
global.document = window.document
