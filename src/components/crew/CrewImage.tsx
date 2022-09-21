import { motion } from 'framer-motion'

type Props = {
  img: string
  alt: string
}
const CrewImage: React.FC<Props> = ({ img, alt }) => {
  return (
    <motion.img
      key={alt}
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 5, type: 'spring' },
      }}
      src={img}
      alt={alt}
      className={
        'h-[300px] md:h-[450px] md:mt-10 lg:mt-0 lg:absolute lg:bottom-0 lg:right-20 lg:h-[60%] xl:h-2/3 xl:right-36 object-contain '
      }
    />
  )
}
export default CrewImage
