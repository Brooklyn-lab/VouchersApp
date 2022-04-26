import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../../pages/error-page/error-page'
import { AppRoute } from '../../const'
import HomePage from '../../pages/home-page/home-page'
import Layout from '../layout/layout'
import StoresPage from '../../pages/stores-page/stores-page'
import AboutPage from '../../pages/about-page/about-page'
import ContactsPage from '../../pages/contact-page/contact-page'
import { useAppSelector } from '../../hooks'
import LoadingScreen from '../loading-screen/loading-screen'
import CouponsPage from '../../pages/coupons-page/coupons-page'
import CouponPage from '../../pages/coupon-page/coupon-page'

function App(): JSX.Element {
  const isLoadingData = useAppSelector(({ DATA }) => DATA.isLoadingData)

  if (!isLoadingData) {
    return <LoadingScreen />
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={AppRoute.Stores} element={<StoresPage />} />
        <Route path={AppRoute.About} element={<AboutPage />} />
        <Route path={AppRoute.Contacts} element={<ContactsPage />} />
        <Route path={AppRoute.Coupons} element={<CouponsPage />} />
        <Route path={AppRoute.Coupon} element={<CouponPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
