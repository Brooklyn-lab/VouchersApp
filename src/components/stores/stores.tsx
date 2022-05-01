import React, { FC, useEffect } from 'react'
import { generatePath } from 'react-router-dom'
import Button from '../button/button'
import { ROUTES } from '../../constants'
import { fetchCompanies, selectCompanies } from '../../store/companies/companiesSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import './stores.scss'

const Stores: FC = () => {
  const dispatch = useAppDispatch()
  const companies = useAppSelector(selectCompanies)

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [dispatch])

  if (companies.loading === 'pending') {
    return <div>Loading...</div>
  }

  return (
    <section className="stores">
      <div className="stores__body">
        {companies.companies.map((company) => (
          <div className="stores__item" key={company.id}>
            <div className="stores__img-wrapper">
              <img src={company.logo} alt={company.title} />
            </div>
            <Button
              className="stores__button"
              path={generatePath(ROUTES.Coupons, { id: String(company.id) })}
              text="View Details"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stores
