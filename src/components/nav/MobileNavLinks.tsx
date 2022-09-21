import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import links from './links'
import MenuButton from './MenuButton'

const MobileNavLinks: React.FC = () => {
  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <MenuButton
        isOpen={menu}
        className={`transition-transform z-30 ${menu ? 'fixed top-10 right-6 ' : ''} `}
        onClick={handleMenu}
      />
      <motion.ul
        initial='hide'
        animate={menu ? 'show' : 'hide'}
        variants={variants}
        className={`fixed top-0 right-0 h-screen w-3/4 ${
          menu ? 'flex' : 'f'
        } flex-col backdrop-blur-[81.55px] bg-[#ffffff0a] pt-28 pl-8 gap-8 z-20`}
      >
        {links.map((name, index) => {
          return (
            <li key={index + name} className='md:px-4 lg:px-6 xl:px-9'>
              <NavLink
                to={name === 'home' ? '' : name}
                className={({ isActive }) =>
                  (isActive ? 'border-opacity-100' : '') +
                  ' nav-text pb-2 text-base tracking-[0.169rem] '
                }
                onClick={handleMenu}
              >
                <span className='font-bold pr-3'>0{index}</span>
                {name}
              </NavLink>
            </li>
          )
        })}
      </motion.ul>
    </>
  )
}
export default MobileNavLinks

const variants = {
  hide: {
    opacity: 0,
    x: 768,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: { opacity: 0 },
}
