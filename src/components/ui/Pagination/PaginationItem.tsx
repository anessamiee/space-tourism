import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

interface Props<T> {
  object: T
  objectStateName: string
  setState: (object: T) => void
  className: string
  activeClass?: string
  children?: ReactNode
}
const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function PaginationItem<T extends { name: string }>(props: Props<T>) {
  const active = props.object.name === props.objectStateName
  const handleClick = () => {
    props.setState(props.object)
  }
  return (
    <motion.li
      variants={item}
      onClick={handleClick}
      className={props.className + (active ? props.activeClass : ' ')}
    >
      {props.children}
    </motion.li>
  )
}

export default PaginationItem
