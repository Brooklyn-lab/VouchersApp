import { Company } from './types'

export function companiesFactory(data: Array<Company>) {
  return data.map((company) => {
    return {
      ...company,
      logo: process.env.REACT_APP_API_BASE_URL + company.logo,
    }
  })
}
