import React from "react"
import "./DorpDownOption.style.css"

export interface DorpDownOptionProps {
  text: string
  onClick: (text: string) => void
}

const DorpDownOption: React.FC<DorpDownOptionProps> = ({ text, onClick }) => {
  return (
    <li className="autocomplete-drop-down-option" onClick={() => onClick(text)}>
      {text}
    </li>
  )
}

export default React.memo(DorpDownOption)
