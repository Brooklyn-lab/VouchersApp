import './random-coupons.scss'
import { useAppSelector } from '../../hooks'
import { randoms } from '../../utils/utils'
import Button from '../button/button'
import { AppRoute } from '../../const'
import { generatePath } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Company } from '../../types/company'
import useMediaQuery from '../../hooks/useMediaQuery'

function RandomCoupons(): JSX.Element {
  const { companies } = useAppSelector(({ DATA }) => DATA)
  const [companiesWidthCoupons, setCompaniesWidthCoupons] = useState<Company[]>([])
  const [length, setLength] = useState<number>(7)
  const tabletMedia = useMediaQuery('(max-width: 992px)')
  const mobileMedia = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (tabletMedia) {
      setLength(6)
      console.log(length)
    }

    if (mobileMedia) {
      setLength(2)
      console.log(length)
    }
  }, [length, tabletMedia, mobileMedia])

  useEffect(() => {
    companies.map((company) => {
      if (company.coupons) {
        setCompaniesWidthCoupons((prevState) => {
          if (prevState) {
            return [...prevState, company]
          }
          return prevState
        })
      }

      return companiesWidthCoupons
    })
  }, [companies])

  return (
    <section className="random-coupons">
      <h2 className="content-title">Latest Coupons & Deals</h2>
      <div className="random-coupons__body">
        {randoms(companiesWidthCoupons, length).map((company) => (
          <div key={company.id} className="random-coupons__coupon">
            <div className="random-coupons__image-wrapper">
              <img src={company.logo} alt={company.title} />
            </div>
            <div>
              <p className="random-coupons__free">Get Free Shipping & Free Delivery</p>
              {company.coupons?.map((coupon, index) => {
                if (index >= 1) {
                  return null
                }
                return (
                  <Button
                    key={coupon.id}
                    className="random-coupons__button"
                    path={generatePath(AppRoute.Coupon, { couponName: 'a', id: String(coupon.id) })}
                    text="View Details"
                  />
                )
              })}
              <p className="random-coupons__date">Expires On : 2023-10-31</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RandomCoupons
