import React from "react"

export interface DorpDownOptionProps {
  text: string
  onClick: (text: string) => void
}

const DorpDownOption: React.FC<DorpDownOptionProps> = ({ text, onClick }) => {
  return <li onClick={() => onClick(text)}>{text}</li>
}

export default React.memo(DorpDownOption)
