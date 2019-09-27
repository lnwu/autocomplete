import React from "react"
import { AutocompleteProps } from "."
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import AutocompleteDropDown from "./components/AutocompleteDropDown"

describe("Autocomplete", () => {
  const onChange = jest.fn()
  const defaultProps: AutocompleteProps = {
    data: [
      {
        text: "text1"
      },
      {
        text: "text2"
      },
      {
        text: "text3"
      }
    ],
    placeholder: "placeholder",
    onChange
  }

  beforeEach(() => {
    // set default mock value
    jest.mock("./hooks/useMatchedDropdownData", () => ({
      useMatchedDropdownData: jest.fn().mockReturnValue([
        {
          text: "text1"
        },
        {
          text: "text2"
        }
      ])
    }))
    jest.mock("./hooks/useDropDownOpen", () => ({
      useDropDownOpen: jest.fn().mockReturnValue(true)
    }))
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
  })

  test.skip("should render input and can change value", async () => {
    const { default: Autocomplete } = await import("./index")
    const container = mount(<Autocomplete {...defaultProps} />)
    const input = container.find("input")

    expect(input.props().value).toBe("")

    act(() => {
      input.simulate("change", { target: { value: "text" } })
    })

    // works but with warning
    // act(async () => {
    //   await input.simulate("change", { target: { value: "text" } })
    //   expect(input.props().value).toBe("text")
    // })

    act(() => {
      input.simulate("change", { target: { value: "text" } })
    })

    expect(input.props().value).toBe("text")
  })

  test.skip("should set text when AutocompleteDropDown on clicked", async () => {
    const { default: Autocomplete } = await import("./index")
    const container = mount(<Autocomplete {...defaultProps} />)
    const dropDown = container.find(AutocompleteDropDown)

    // works but with warning
    // act(async () => {
    //   await dropDown.props().onSelected("text")
    //   expect(container.find("input").props().value).toBe("text")
    // })

    act(async () => {
      dropDown.props().onSelected("text")
    })

    expect(container.find("input").props().value).toBe("text")
  })

  test("should passing default mock matchedData to AutocompleteDropDown", async () => {
    const { default: Autocomplete } = await import("./index")
    const container = mount(<Autocomplete {...defaultProps} />)
    const dropDown = container.find(AutocompleteDropDown)

    expect(dropDown.props().data).toEqual([
      {
        text: "text1"
      },
      {
        text: "text2"
      }
    ])
  })

  test.skip("should not render dropdown when useDropDownOpen return false", async () => {
    jest.mock("./hooks/useDropDownOpen", () => ({
      useDropDownOpen: jest.fn().mockReturnValue(false)
    }))
    const { default: Autocomplete } = await import("./index")
    const container = mount(<Autocomplete {...defaultProps} />)
    const dropDown = container.find(AutocompleteDropDown)

    expect(dropDown).toHaveLength(0)
  })
})
