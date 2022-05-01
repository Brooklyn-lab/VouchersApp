import React, { FC } from "react";
import { generatePath } from "react-router-dom";

import Button from "../button/button";
import { ROUTES } from "../../constants";
import { fetchCompanies, selectCompanies } from "../../store/companies/companiesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useInfiniteScroll } from "../../utils/hooks/useInfiniteScroll";

import "./stores.scss";

const Stores: FC = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompanies);
  const infiniteScrollRef = useInfiniteScroll(loadMoreCompanies, companies.list.length, companies.count);

  function loadMoreCompanies() {
    dispatch(fetchCompanies());
  }

  if (companies.loading === "pending" && !companies.isFirstObtainHappened) {
    return <div>Loading...</div>;
  }

  return (
    <section className="stores">
      <div className="stores__body">
        {companies.list.map((company) => (
          <div className="stores__item" key={company.id}>
            <div className="stores__img-wrapper">
              <img src={company.logo} alt={company.title} />
            </div>
            <Button
              className="stores__button"
              path={generatePath(ROUTES.Coupons, { id: String(company.id) })}
              text="View Details"
            />
          </div>
        ))}
      </div>
      <div ref={infiniteScrollRef}></div>
    </section>
  );
};

export default Stores;
