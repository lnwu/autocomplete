import { RefObject, useEffect } from "react"

// trigger on click event when click anywhere in body but out of passing node
export const useOuterClicker = (
  node: RefObject<HTMLElement>,
  onClick: (e: MouseEvent) => void
) => {
  useEffect(() => {
    const windowClickHandler = (e: MouseEvent) => {
      if (node.current && !node.current.contains(e.target as Node)) {
        onClick(e)
      }
    }
    window.addEventListener("click", windowClickHandler)
    return () => {
      window.removeEventListener("click", windowClickHandler)
    }
  }, [])
}
