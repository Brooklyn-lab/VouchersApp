import Logo from '../logo/logo'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'
import './footer.scss'

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__logo-wrapper">
            <Logo className="footer__logo" />
          </div>
          <div className="footer__navigation">
            <div className="footer__nav-wrapper">
              <p className="footer__title">Quick links</p>
              <ul className="footer__nav">
                <li className="footer__nav-item">
                  <Link className="footer__nav-link" to={ROUTES.Main}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link className="footer__nav-link" to={ROUTES.Main}>
                    Terms & Conditions
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link className="footer__nav-link" to={ROUTES.Main}>
                    About us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__nav-wrapper">
              <p className="footer__title">Contact us</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__text">© 2022 All rights reserved by ProfitVouchers.com</p>
          <p className="footer__text">
            "If you make a purchase after clicking on the links on this site, ProfitVouchers.com may earn an affiliate
            commission from the site you visit."
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
