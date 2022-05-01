import { generatePath, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getCurrentCompany, selectCompanies } from '../../store/companies/companiesSlice'
import { ROUTES } from '../../constants'
import Details from './details'
import Button from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/store'
import './coupons.scss'

function Coupons() {
  const { id } = useParams()

  const dispatch = useAppDispatch()
  const { selectedCompany } = useAppSelector(selectCompanies)

  useEffect(() => {
    if (id) {
      dispatch(getCurrentCompany(Number(id)))
    }
  }, [dispatch, id])

  function generatePathLocal(couponName: string, id: number) {
    return generatePath(ROUTES.Coupon, {
      couponName: couponName.toLocaleLowerCase().replace(/\s/g, '-'),
      id: String(id),
    })
  }

  if (!selectedCompany) {
    return null
  }

  return (
    <section className="company">
      <div className="company__body">
        <div className="company__image-wrapper">
          <div className="company__logo-wrapper">
            <img src={selectedCompany.logo} alt="" />
          </div>
        </div>
        {selectedCompany.coupons ? (
          <div className="coupons">
            {selectedCompany.coupons.map((coupon) => (
              <div key={coupon.id} className="coupons__item">
                <p className="coupons__item-header">Valid Till 28-02-2022</p>
                <div className="coupons__item-body">
                  <div className="coupons__item-shortText-wrapp">
                    <p className="coupons__item-shortText">{coupon.shortText}</p>
                  </div>
                  <div className="coupons__item-about-wrapp">
                    <p className="coupons__item-about-header">{coupon.header}</p>
                    <div className="coupons__item-about-text-wrapper">
                      {coupon.description.title ? (
                        <p className="coupons__item-about-title">{coupon.description.title}</p>
                      ) : null}
                      {coupon.description.text.map((text) => (
                        <div key={text}>
                          <p className="coupons__item-about-text">{text}</p>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="coupons__item-button"
                      path={generatePathLocal(selectedCompany.title, coupon.id)}
                      text="GET DEAL"
                    />
                  </div>
                </div>
                {coupon.details ? <Details details={coupon.details} /> : ''}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Coupons
