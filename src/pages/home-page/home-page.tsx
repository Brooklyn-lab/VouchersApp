import {useAppSelector} from '../../hooks';
import {useEffect} from 'react';

function HomePage():JSX.Element {
  const {companies} = useAppSelector(({DATA}) => DATA);
  
  useEffect(() => {
    console.log(companies);
  }, [companies]);
  
  return (
   <div className='container'>
     <h1>Main Page</h1>
   </div>
  );
}

export default HomePage;
