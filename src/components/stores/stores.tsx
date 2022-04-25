import { useAppSelector } from "../../hooks";
import "./stores.scss";

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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stores;
