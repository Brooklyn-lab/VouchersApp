import { useEffect, useState } from 'react'
import { generatePath } from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import { selectCompanies } from '../../store/companies/companiesSlice'
import { ROUTES } from '../../constants'
import { Company } from '../../store/companies/types'
import Button from '../button/button'
import './stores.scss'

function Stores(): JSX.Element {
  const { companies } = useAppSelector(selectCompanies)
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [fetching, setFetching] = useState<boolean>(false)
  const [currentCompany, setCurrentCompany] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // useEffect(() => {
  //   setCurrentCompany(companies.slice(0, limit))
  //   console.log(currentCompany.length)
  //   console.log(companies.length)
  // }, [limit])

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
    // if (currentCompany.length !== companies.length) {
    //   if (evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight) < 400) {
    //     setFetching(true)
    //     setIsLoading(true)
    //   }
    // }
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
              path={generatePath(ROUTES.Coupons, { id: String(company.id) })}
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
