import { DataType } from "../../common/interface/DataType"

export const useMatchedDropdownData = (
  originalData: DataType[],
  text: string
): DataType[] => {
  return originalData.filter(item => {
    const data = item.text.trim()
    const inputText = text.trim()
    return data.includes(inputText) && data !== inputText
  })
}
