import './title.scss';

type TitleProps = {
	namePage: 'AllStores' | 'Coupons',
}

function Title({namePage}: TitleProps):JSX.Element {
	return (
		<div className='title'>
			<h1 className='title__text'>{namePage}</h1>
		</div>
	);
}

export default Title;
