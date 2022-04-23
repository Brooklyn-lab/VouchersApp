import './button-back.scss';
import {useNavigate} from 'react-router-dom';

function ButtonBack(): JSX.Element {
	const navigate = useNavigate();

	return (
		<div className='navigate'>
			<div className='navigate__button'>
				<svg className='navigate__arrow' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
					<path d="M20 24L8 14.5988L18.7945 4" stroke="#282828"/>
				</svg>
				<p className='navigate__text' onClick={() => navigate(-1)}>
					Go Back
				</p>
			</div>
		</div>
	);
}

export default ButtonBack;
