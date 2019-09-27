import DorpDownOption, { DorpDownOptionProps } from "."
import { shallow } from "enzyme"
import React from "react"

describe("DorpDownOption", () => {
  const onClick = jest.fn()
  const defaultProps: DorpDownOptionProps = {
    text: "text",
    onClick
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  test("should render correct passing text", () => {
    const container = shallow(<DorpDownOption {...defaultProps} />)
    expect(container.find("li").text()).toBe("text")
  })

  test("should trigger onClick with text when item on click", () => {
    const container = shallow(<DorpDownOption {...defaultProps} />)
    const item = container.find("li")
    item.simulate("click")

    expect(onClick).toBeCalledWith("text")
  })
})
