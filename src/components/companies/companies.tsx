import "./companies.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { generatePath } from "react-router-dom";
import Button from "../button/button";
import { selectCompanies } from "../../store/companies/companiesSlice";
import { useAppSelector } from "../../store/store";
import { Company } from "../../store/companies/types";

function Companies(): JSX.Element {
  const { list } = useAppSelector(selectCompanies);
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
  const filterCompanies = first(list, 10);

  return (
    <section className="companies">
      <h2 className="content-title">More Than 1000+ Stores In One Place!</h2>
      <div className="companies__body">
        {filterCompanies.map((company) => (
          <div className="companies__item" key={company.id}>
            <Link className="companies__item-link" to={generatePath(ROUTES.Coupons, { id: String(company.id) })} />
            <img src={company.logo} alt={company.title} />
          </div>
        ))}
      </div>

      <Button className="companies__button" path={ROUTES.Stores} text="View All Stores" />
    </section>
  );
}

export default Companies;
