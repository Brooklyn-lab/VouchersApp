import {Outlet} from 'react-router-dom';
import Header from '../header/header';

function Layout():JSX.Element {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
