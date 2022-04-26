import Companies from '../../components/companies/companies'
import RandomCoupons from '../../components/random-coupons/random-coupons'

function HomePage(): JSX.Element {
  return (
    <div className="container">
      <RandomCoupons />
      <Companies />
    </div>
  )
}

export default HomePage
