import { useState, useEffect } from "react"
import { DataType } from "../../common/interface/DataType"
import { useOuterClicker } from "./useOuterClicker"

export const useDropDownOpen = (
  matchedData: DataType[],
  current: string,
  wrapperNode: React.RefObject<HTMLDivElement>
) => {
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

  useOuterClicker(wrapperNode, () => {
    setShowDropDown(false)
  })

  return showDropDown
}
