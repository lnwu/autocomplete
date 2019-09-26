import { DataType } from "../../common/interface/DataType"

export const useMatchedDropdownData = (
  originalData: DataType[],
  text: string
): DataType[] => {
  return originalData.filter(item => item.text.trim().includes(text.trim()))
}
