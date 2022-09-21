import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 3 } }}
      src={'./assets/shared/logo.svg'}
      alt='Logo'
      className='lg:pl-14 md:pl-10 hover:cursor-pointer'
    />
  )
}
export default Logo
