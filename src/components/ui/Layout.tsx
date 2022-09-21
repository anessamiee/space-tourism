import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import Nav from '../nav/Nav'
import BackgroundImage from './BackgroundImage'
const Layout = (props: React.PropsWithChildren) => {
  return (
    <div className='flex flex-col'>
      <BackgroundImage />
      <Nav />
      <main className='z-20'>{props.children}</main>
    </div>
  )
}
export default Layout
