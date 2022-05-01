import { Company } from '../store/companies/types'

export function randoms(arr: Company[], length: number) {
  return first(shuffle(arr), length)
}

function first(arr: Company[], length: number) {
  return arr.slice(0, length)
}

function shuffle(arr: Company[]) {
  let result: Company[] = []

  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1)
    let elem = arr.splice(random, 1)[0]
    result.push(elem)
    // if (result.length > 0) {
    //   result.map((company) => {
    //     if (company.id !== elem.id) {
    //       // result.push(elem)
    //       console.log(`company.id: ${company.id}`)
    //       console.log(`elem.id: ${elem.id}`)
    //     }
    //     return null
    //   })
    // } else {
    //   result.push(elem)
    // }

    // if (result.length !== 0) {
    //   result.map((item) => {
    //     if (item.id !== elem.id) {
    //       return result.push(elem)
    //     }
    //     return item
    //   })
    // }

    // console.log(`'result:' ${result}`)
    //
  }
  return result
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
