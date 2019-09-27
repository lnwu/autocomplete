import { configure } from "@storybook/react"
import { addDecorator } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import React from "react"

const WrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh"
}

const WrapperDecorator = storyFn => <div style={WrapperStyle}>{storyFn()}</div>

// automatically import all files ending in *.stories.js
addDecorator(WrapperDecorator)
addDecorator(withInfo)
configure(require.context("../stories", true, /\.stories\.tsx$/), module)
