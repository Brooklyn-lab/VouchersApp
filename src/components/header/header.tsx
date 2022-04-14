import './header.scss';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import HeaderLogo from '../header-logo/header-logo';

function Header():JSX.Element {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__body'>
          <HeaderLogo />
          <div className='header__nav-wrapp'>
            <nav>
              <ul className='header__nav-list'>
                <li className='header__nav-item'>
                  <Link className='header__nav-item-link' to={AppRoute.Main}>
                    Home
                  </Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-item-link' to={AppRoute.Stores}>
                    Stores
                  </Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-item-link' to={AppRoute.About}>
                    About Us
                  </Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-item-link' to={AppRoute.Contacts}>
                    Contacts Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
