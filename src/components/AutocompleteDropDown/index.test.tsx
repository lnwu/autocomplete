import React from "react"
import AutocompleteDropDown, { AutocompleteDropDownProps } from "."
import { shallow } from "enzyme"
import DorpDownOption from "../DorpDownOption"

describe("AutocompleteDropDown", () => {
  const onSelected = jest.fn()
  const defaultProps: AutocompleteDropDownProps = {
    data: [
      {
        text: "text1"
      },
      {
        text: "text2"
      }
    ],
    onSelected
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("should return DorpDownOptions base on data length", () => {
    const container = shallow(<AutocompleteDropDown {...defaultProps} />)
    const options = container.find(DorpDownOption)
    expect(options).toHaveLength(2)
  })

  test("should trigger corresponding text when DorpDownOption on Select", () => {
    const container = shallow(<AutocompleteDropDown {...defaultProps} />)
    const options = container.find(DorpDownOption)

    options
      .at(0)
      .props()
      .onClick("text")

    expect(onSelected).toBeCalledWith("text")
  })
})
