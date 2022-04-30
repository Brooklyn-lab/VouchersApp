import About from '../../components/about/about'
import ButtonBack from '../../components/button-back/button-back'

function AboutPage(): JSX.Element {
  return (
    <div className="container">
      <ButtonBack />
      <About />
    </div>
  )
}

export default AboutPage
