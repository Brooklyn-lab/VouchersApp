import {useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import Companies from '../../components/companies/companies';

function HomePage():JSX.Element {
  const {companies} = useAppSelector(({DATA}) => DATA);
  
  useEffect(() => {
    console.log(companies);
  }, [companies]);
  
  return (
   <div className='container'>
     <Companies />
   </div>
  );
}

export default HomePage;
