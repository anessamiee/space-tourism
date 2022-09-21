import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const steps = ['', 'Pick your destination', 'Meet your crew', 'Space launch 101']

const Steps: React.FC = () => {
  const [step, setStep] = useState(0)
  const { pathname } = useLocation()
  useEffect(() => {
    switch (pathname.substring(1)) {
      case 'destination':
        if (step !== 1) setStep(1)
        break
      case 'crew':
        if (step !== 2) setStep(2)
        break
      case 'technology':
        if (step !== 3) setStep(3)
        break
      default:
        if (step !== 0) setStep(0)
    }
  }, [pathname, step])
  return (
    <motion.h5
      key={pathname}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1, type: 'spring' } }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
      className='md:ml-9 lg:ml-40 mt-8 lg:mt-10 md:mt-10 mb-8 md:mb-14 lg:mb-14 md:self-start '
    >
      <span className='mr-4 lg:mr-7 opacity-25'>{step ? '0' + step : ''}</span>
      {steps[step]}
    </motion.h5>
  )
}
export default Steps
