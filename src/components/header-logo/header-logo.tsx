import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import logo from '../../assets/images/header/logo.svg';

function HeaderLogo(): JSX.Element {
	return (
		<Link to={AppRoute.Main} className='header__logo-wrapp'>
			<img src={logo} alt='Profit vouchers' />
		</Link>
	);
}

export default HeaderLogo;
