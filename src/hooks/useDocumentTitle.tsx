import { useEffect } from 'react'
const baseTitle = 'Space Tourism'

const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    if (title) document.title = title
    else document.title = baseTitle
  }, [title])
}

export { useDocumentTitle }
