import { useAppSelector } from "../../hooks";
import "./stores.scss";
import {AppRoute} from '../../const';
import Button from '../button/button';
import {generatePath} from 'react-router-dom';

function Stores(): JSX.Element {
  const { companies } = useAppSelector(({ DATA }) => DATA);

  return (
    <section className="stores">
      <div className="stores__body">
        {companies.map((company) => (
          <div className="stores__item" key={company.id}>
            <div className="stores__img-wrapper">
              <img src={company.logo} alt={company.title} />
            </div>
	          <Button
		          className="stores__button"
		          path={generatePath(AppRoute.Coupons, {id: String(company.id)})}
		          text="View Details"
	          />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stores;
