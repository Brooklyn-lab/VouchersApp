import './header.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'
import Logo from '../logo/logo'

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Logo />
          <div className="header__nav-wrapp">
            <nav>
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link className="header__nav-item-link" to={ROUTES.Main}>
                    Home
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-item-link" to={ROUTES.Stores}>
                    Stores
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-item-link" to={ROUTES.About}>
                    About Us
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-item-link" to={ROUTES.Contacts}>
                    Contacts Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
