import React from "react"
import DorpDownOption from "../DorpDownOption"
import { DataType } from "../../../common/interface/DataType"

export interface AutocompleteDropDownProps {
  data: DataType[]
  onSelected: (text: string) => void
}

const AutocompleteDropDown: React.FC<AutocompleteDropDownProps> = ({
  data,
  onSelected
}) => {
  const handleSelect = (text: string) => {
    onSelected(text)
  }

  const list = data.map((item, index) => {
    return (
      <DorpDownOption key={index} onClick={handleSelect} text={item.text} />
    )
  })
  return <ul>{list}</ul>
}

export default React.memo(AutocompleteDropDown)
