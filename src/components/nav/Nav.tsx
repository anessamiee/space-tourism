import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'
import Logo from './Logo'
import MobileNav from './MobileNavLinks'
import NavLinks from './NavLinks'
import Steps from './Steps'

const Nav: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 767px)')
  return (
    <nav className='flex flex-col items-center md:items-start lg:mt-10 z-30'>
      <div className='relative flex items-center justify-between p-6 md:p-0 w-full'>
        <Link to={'/'}>
          <Logo />
        </Link>
        <motion.div
          id='line'
          initial={{ x: -1000 }}
          animate={{ x: 0, transition: { duration: 3, type: 'spring' } }}
          className='h-px mix-blend-normal bg-white-warm opacity-25 absolute w-1/3 right-[56%] lg:w-[30%] lg:right-[57%] xl:w-4/12 xl:right-[54%] z-20 hidden lg:block'
        />
        {mobile ? <MobileNav /> : <NavLinks />}
      </div>
      <Steps />
    </nav>
  )
}
export default Nav
