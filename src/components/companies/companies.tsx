import './companies.scss';
import {useAppSelector} from '../../hooks';
import {randoms} from '../../utils/utils';
import {Company} from '../../types/company';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {generatePath} from 'react-router-dom';

function Companies():JSX.Element {
	const companies = useAppSelector(({DATA}) => DATA.companies);
	// function randoms(arr: Company[], length: number) {
	// 	return first(shuffle(arr), length);
	// }
	//
	function first(arr: Company[], length: number) {
		return arr.slice(0, length);
	}
	//
	// function shuffle(arr: Company[]) {
	// 	let result = [];
	//
	// 	while (arr.length > 0) {
	// 		let random = getRandomInt(0, arr.length - 1);
	// 		let elem = arr.splice(random, 1)[0];
	// 		console.log(elem);
	// 		result.push(elem);
	// 	}
	//
	// 	return result;
	// }
	//
	// function getRandomInt(min: number, max: number) {
	// 	return Math.floor(Math.random() * (max - min + 1)) + min;
	// }
	const filterCompanies = first(companies, 10);
	
	return(
		<section className='companies'>
			<h2 className='content-title'>More Than 1000+ Stores In One Place!</h2>
			<div className='companies__body'>
				{filterCompanies.map((company) => (
					<div
						className='companies__item'
						key={company.id}
					>
						<Link
							className='companies__item-link'
							to={generatePath(AppRoute.Coupons, {id: String(company.id)})} />
						<img src={company.logo} alt={company.title} />
					</div>
				))}
			</div>
			<div className='button companies__button'>
				<Link className='button__link' to={AppRoute.Stores} />
				<span className='button__text'>View All Stores</span>
			</div>
		</section>
	);
}

export default Companies;
