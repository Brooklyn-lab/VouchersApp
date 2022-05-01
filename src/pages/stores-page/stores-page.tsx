import Title from '../../components/title/title'
import ButtonBack from '../../components/button-back/button-back'
import Stores from '../../components/stores/stores'

function StoresPage(): JSX.Element {
  return (
    <>
      <Title namePage="All Stores" />
      <div className="container">
        <ButtonBack />
        <Stores />
      </div>
    </>
  )
}

export default StoresPage
