import React from "react"
import { useMatchedDropdownData } from "./useMatchedDropdownData"
import { mount } from "enzyme"

describe("useMatchedDropdownData", () => {
  test("should return mapped data when matching text", () => {
    const FakeComponent = () => {
      const matchedData = useMatchedDropdownData(
        [{ text: "text1" }, { text: "text2" }],
        "2"
      )
      return (
        <ul>
          {matchedData.map(data => (
            <li key={data.text}>{data.text}</li>
          ))}
        </ul>
      )
    }
    const container = mount(<FakeComponent />)
    expect(container.find("li")).toHaveLength(1)
  })

  test("should return empty list when not matching text", () => {
    const FakeComponent = () => {
      const matchedData = useMatchedDropdownData(
        [{ text: "text1" }, { text: "text2" }],
        "3"
      )
      return (
        <ul>
          {matchedData.map(data => (
            <li key={data.text}>{data.text}</li>
          ))}
        </ul>
      )
    }
    const container = mount(<FakeComponent />)
    expect(container.find("li")).toHaveLength(0)
  })
})
