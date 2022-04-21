import './companies.scss';
import {useAppSelector} from '../../hooks';
import {randoms} from '../../utils/utils';
import {Company} from '../../types/company';

function Companies():JSX.Element {
	const companies = useAppSelector(({DATA}) => DATA.companies);
	console.log(companies)
	// function randoms(arr: Company[], length: number) {
	// 	return first(shuffle(arr), length);
	// }
	//
	// function first(arr: Company[], length: number) {
	// 	return arr.slice(0, length);
	// }
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
	// const filterCompanies = randoms(companies, 9);
	
	return(
		<section className='companies'>
			<h2 className='content-title'>More Than 1000+ Stores In One Place!</h2>
			<div className='companies__body'>
				{companies.map((company) => (
					<div key={company.id}>
						<img src={company.logo} alt={company.title} />
					</div>
				))}
			</div>
		</section>
	);
}

export default Companies;
