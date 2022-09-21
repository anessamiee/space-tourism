import { NavLink } from 'react-router-dom'
import links from './links'

const NavLinks: React.FC = () => {
  return (
    <ul className='md:py-9 md:px-5 lg:px-0 lg:py-6 xl:py-9 hidden md:flex items-center justify-center backdrop-blur-[81.55px] bg-[#ffffff0a] lg:w-[59%] '>
      {links.map((name, index) => {
        return (
          <li key={index + name} className='md:px-4 lg:px-6 xl:px-9'>
            <NavLink
              to={name === 'home' ? '' : name}
              className={({ isActive }) =>
                (isActive ? 'border-opacity-100' : '') +
                ' nav-text md:py-9 lg:py-6 xl:py-9 uppercase'
              }
            >
              <span className='font-bold pr-3 hidden lg:inline'>0{index}</span>
              {name}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
export default NavLinks
