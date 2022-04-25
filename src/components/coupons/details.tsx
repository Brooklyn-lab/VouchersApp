import {useState} from 'react';

type DetailsProps = {
	details: string[]
}

function Details({details}: DetailsProps):JSX.Element {
	const [isShow, setIsShow] = useState(false);
	
	return (
		<div className='details'>
			<p
				className='details__button'
				onClick={() => setIsShow(!isShow)}
			>
				{isShow ? 'Hide Details' : 'Show Details'}
			</p>
			{isShow ?
				<div className='details__body'>
					<p className='details__title'>
						Terms and conditions:
					</p>
					{details.map((detailsItem) => (
						<div className='details__text-wrapper' key={detailsItem}>
							<p className='details__text'>{detailsItem}</p>
						</div>
					))}
				</div>
				: ''}
		</div>
	);
}

export default Details;
