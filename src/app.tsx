import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home-page/home-page'
import StoresPage from './pages/stores-page/stores-page'
import AboutPage from './pages/about-page/about-page'
import ContactsPage from './pages/contact-page/contact-page'
import CouponsPage from './pages/coupons-page/coupons-page'
import CouponPage from './pages/coupon-page/coupon-page'
import ErrorPage from './pages/error-page/error-page'
import Layout from './components/layout/layout'
import { ROUTES } from './constants'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ROUTES.Main} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.Stores} element={<StoresPage />} />
        <Route path={ROUTES.About} element={<AboutPage />} />
        <Route path={ROUTES.Contacts} element={<ContactsPage />} />
        <Route path={ROUTES.Coupons} element={<CouponsPage />} />
        <Route path={ROUTES.Coupon} element={<CouponPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
