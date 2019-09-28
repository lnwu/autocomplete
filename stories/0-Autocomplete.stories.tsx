import React from "react"
import { action } from "@storybook/addon-actions"
import Autocomplete from "../src/components/Autocomplete"

export default {
  title: "Autocomplete"
}

export const MatchedDropdown = () => (
  <Autocomplete
    data={[
      { text: "text1" },
      { text: "text22" },
      { text: "text333" },
      { text: "text4444" }
    ]}
    onChange={action("input")}
    placeholder="input 1/2/3/4"
  />
)

export const TriggerTextChange = () => (
  <Autocomplete
    data={[{ text: "text1" }, { text: "text2" }]}
    onChange={action("input")}
  />
)
