import {useAppDispatch, useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getCurrentCompany} from '../../store/slices/companies';
import {Company} from '../../types/company';

const isEmpty = (object: Company | {}) => {
	for (let key in object) {
		return false;
	}
	return true;
}

function Coupons() {
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const company = useAppSelector(({DATA}) => DATA.selectedCompany);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (id) {
			dispatch(getCurrentCompany(Number(id)));
			
			if (!isEmpty(company)) {
				setIsLoaded(!isLoaded);
				console.log(company);
			}
			
		}
	}, [dispatch, id, company]);
	
	return (
		<section className='company'>
			{!isLoaded ?
				<h2>Loaded...</h2>
				:
				<div className='company__body'>
					<div className='company__logo-wrapper'>
						<img />
					</div>
				</div>}
		</section>
	);
}

export default Coupons;
