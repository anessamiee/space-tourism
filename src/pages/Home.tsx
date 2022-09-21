import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const headerVariants = {
  in: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 2 } },
  exit: { opacity: 0, y: 10, transition: { delay: 0, duration: 0.5 } },
}
const buttonVariants = {
  in: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.85, transition: { delay: 0, duration: 0.5 } },
}

const Home: React.FC = () => {
  useDocumentTitle()

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='px-6 md:px-40 lg:pt-24 lg:px-32 xl:px-40 flex flex-col items-center justify-between gap-16 md:gap-32 lg:gap-0 lg:flex-row '
    >
      <motion.header
        initial='in'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.25, duration: 1 }}
        variants={headerVariants}
        className='flex flex-col text-center lg:text-left lg:w-5/12 items-center lg:items-baseline'
      >
        <h5 className='text-blue-light'>So, you want to travel to</h5>
        <h1>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </motion.header>
      <motion.div
        initial='in'
        animate='animate'
        exit='exit'
        transition={{
          delay: 1.5,
          duration: 1.25,
        }}
        variants={buttonVariants}
      >
        <Link to='destination'>
          <motion.div
            animate={{
              y: ['0.7rem', '0rem', '0.7rem'],
              transition: { repeat: Infinity, duration: 10, type: 'keyframes' },
            }}
            className='relative flex group'
          >
            <div
              id='button-shadow'
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[27rem] w-[27rem] bg-white-warm opacity-10 scale-0 duration-300  group-hover:scale-100 transition-all transform-gu rounded-full '
            />
            <div className=' mb-20 md:mb-0 h-36 w-36 md:h-72 md:w-72 bg-white-warm rounded-full text-blue-dark flex items-center justify-center '>
              <h4 className='text-xl tracking-[0.078rem] md:text-[2rem] md:tracking-normal '>
                Explore
              </h4>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}
export default Home
