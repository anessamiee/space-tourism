type Props = {
  title: string
  info: string
}
const InfoCard: React.FC<Props> = ({ title, info }) => {
  return (
    <section className='flex flex-col items-center md:items-baseline mb-8 md:mb-0'>
      <h6 className='subh2'>{title}e</h6>
      <h6 className='subh1'>{info}</h6>
    </section>
  )
}
export default InfoCard
