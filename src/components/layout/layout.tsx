import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'

function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
