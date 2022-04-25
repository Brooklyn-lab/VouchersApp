import './button.scss';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

enum ButtonClasses {
	'mainCompanies' = 'companies__button',
	'stores' = 'stores__button',
	'coupons' = 'coupons__item-button',
}

enum PathType {
	'mainCompanies' = AppRoute.Stores,
	'stores' = AppRoute.Coupon,
	'coupons' = AppRoute.Coupons,
}

type ButtonProps = {
	typeButton: 'mainCompanies' | 'stores' | 'coupons',
}

function Button({typeButton}: ButtonProps):JSX.Element {
	const buttonType = ButtonClasses[typeButton];
	const buttonPath = PathType[typeButton];
	
	return (
		<div className={`button ${buttonType}`}>
			<Link className='button__link' to={buttonPath} />
			<span className='button__text'>View All Stores</span>
		</div>
	);
}

export default Button;
