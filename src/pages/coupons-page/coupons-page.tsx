import Title from '../../components/title/title';
import Coupons from '../../components/coupons/coupons';
import ButtonBack from '../../components/button-back/button-back';

function CouponsPage():JSX.Element {
	return (
		<>
			<Title namePage='Coupons' />
			<div className='container'>
				<ButtonBack />
				<Coupons />
			</div>
		</>
	);
}

export default CouponsPage;
