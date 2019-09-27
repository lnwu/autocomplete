import React, { useState, useEffect } from "react"
import { DataType } from "../common/interface/DataType"
import { useMatchedDropdownData } from "./hooks/useMatchedDropdownData"
import { useDropDownOpen } from "./hooks/useDropDownOpen"
import AutocompleteDropDown from "./components/AutocompleteDropDown"

export interface AutocompleteProps {
  data: DataType[]
  onChange: (text: string) => void
  placeholder?: string
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  data,
  onChange,
  placeholder
}) => {
  const [currentText, setCurrentText] = useState("")

  const matchedData = useMatchedDropdownData(data, currentText)
  const showDropDown = useDropDownOpen(matchedData, currentText)

  useEffect(() => {
    currentText && onChange(currentText)
  }, [currentText, onChange])

  return (
    <div>
      <input
        type="text"
        value={currentText}
        onChange={e => setCurrentText(e.target.value)}
        placeholder={placeholder}
      />
      {showDropDown && (
        <AutocompleteDropDown
          data={matchedData}
          onSelected={text => setCurrentText(text)}
        />
      )}
    </div>
  )
}

export default React.memo(Autocomplete)
