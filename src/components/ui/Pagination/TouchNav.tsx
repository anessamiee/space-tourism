import React, { TouchEvent, useState } from 'react'
type Props = {
  next: () => void
  last: () => void
  children: React.ReactNode
  className?: string
}
const TouchNav: React.FC<Props> = ({ last, next, children, className }) => {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  function handleTouchStart(e: TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX)
  }

  function handleTouchMove(e: TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  function handleTouchEnd() {
    if (touchEnd !== 0) {
      if (touchStart - touchEnd > 70) {
        next()
      }

      if (touchStart - touchEnd < -70) {
        last()
      }
    }
  }
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={className}
    >
      {children}
    </div>
  )
}
export default TouchNav
