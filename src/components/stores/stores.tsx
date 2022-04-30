import { useAppSelector } from '../../hooks'
import './stores.scss'
import { AppRoute } from '../../const'
import Button from '../button/button'
import { generatePath } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Company } from '../../types/company'

function Stores(): JSX.Element {
  const companies = useAppSelector(({ DATA }) => DATA.companies)
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [fetching, setFetching] = useState<boolean>(false)
  const [currentCompany, setCurrentCompany] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setCurrentCompany(companies.slice(0, limit))
    console.log(currentCompany.length)
    console.log(companies.length)
  }, [limit])

  useEffect(() => {
    if (fetching) {
      setFetching(false)
      setPage((prevState) => prevState + 1)
      setLimit((prevState) => prevState + 8)
      setIsLoading(false)
      console.log(`page: ${page}`)
      console.log(`fetching: ${fetching}`)
    }
  }, [fetching, page])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (evt: any) => {
    if (currentCompany.length !== companies.length) {
      if (evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight) < 400) {
        setFetching(true)
        setIsLoading(true)
      }
    }
  }

  return (
    <section className="stores">
      <div className="stores__body">
        {currentCompany.map((company) => (
          <div className="stores__item" key={company.id}>
            <div className="stores__img-wrapper">
              <img src={company.logo} alt={company.title} />
            </div>
            <Button
              className="stores__button"
              path={generatePath(AppRoute.Coupons, { id: String(company.id) })}
              text="View Details"
            />
          </div>
        ))}
        {isLoading ? <h1>LOADING</h1> : ''}
      </div>
    </section>
  )
}

export default Stores
