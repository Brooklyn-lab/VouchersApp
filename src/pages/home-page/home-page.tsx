import Companies from '../../components/companies/companies'
import RandomCoupons from '../../components/random-coupons/random-coupons'
import PreviewSlider from '../../components/preview-slider/preview-slider'

function HomePage(): JSX.Element {
  return (
    <>
      <PreviewSlider />
      <div className="container">
        <RandomCoupons />
        <Companies />
      </div>
    </>
  )
}

export default HomePage
