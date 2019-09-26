import { useState, useEffect } from "react"
import { DataType } from "../../common/interface/DataType"

export const useDropDownOpen = (matchedData: DataType[], current: string) => {
  const [showDropDown, setShowDropDown] = useState(false)

  useEffect(() => {
    if (current) {
      if (matchedData.length) {
        setShowDropDown(true)
      } else {
        setShowDropDown(false)
      }
    } else {
      setShowDropDown(false)
    }
  }, [current, matchedData.length])

  return showDropDown
}
