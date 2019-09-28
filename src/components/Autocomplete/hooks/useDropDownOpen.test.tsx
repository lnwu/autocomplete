import React, { useRef } from "react"
import { useDropDownOpen } from "./useDropDownOpen"
import { mount } from "enzyme"

describe("useDropDownOpen", () => {
  test("should return true when is has matchedData and text", () => {
    const FakeComponent = () => {
      const showDropDown = useDropDownOpen(
        [{ text: "text" }],
        "text",
        useRef(null)
      )
      return <div>{showDropDown ? "true" : "false"}</div>
    }
    const container = mount(<FakeComponent />)
    expect(container.find("div").text()).toBe("true")
  })

  test("should return false when passing empty text", () => {
    const FakeComponent = () => {
      const showDropDown = useDropDownOpen([{ text: "text" }], "", useRef(null))
      return <div>{showDropDown ? "true" : "false"}</div>
    }
    const container = mount(<FakeComponent />)
    expect(container.find("div").text()).toBe("false")
  })

  test("should return false when passing empty data", () => {
    const FakeComponent = () => {
      const showDropDown = useDropDownOpen([], "text", useRef(null))
      return <div>{showDropDown ? "true" : "false"}</div>
    }
    const container = mount(<FakeComponent />)
    expect(container.find("div").text()).toBe("false")
  })
})
