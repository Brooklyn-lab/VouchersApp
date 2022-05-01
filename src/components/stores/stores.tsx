import React, { FC, useCallback, useEffect, useRef } from "react";
import { generatePath } from "react-router-dom";
import Button from "../button/button";
import { ROUTES } from "../../constants";
import { fetchCompanies, selectCompanies } from "../../store/companies/companiesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./stores.scss";

function useInfiniteScroll(callbackParam: any) {
  const observer = useRef<any>(null);

  const callback = useCallback(
    (entries: any) => {
      if (entries.length === 0) return false;

      if (entries[0].isIntersecting) {
        callbackParam();
      }
    },
    [callbackParam]
  );

  const infiniteScrollRef = useCallback(
    (node: any) => {
      if (!node) return false;

      observer.current = new IntersectionObserver(callback, { threshold: 1 });
      observer.current.observe(node);
    },
    [callback]
  );
  useEffect(() => {
    return () => observer.current?.disconnect();
  }, []);

  return infiniteScrollRef;
}

const Stores: FC = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompanies);
  const loadMoreCompanies = useCallback(() => {
    if (companies.list.length < companies.count) {
      dispatch(fetchCompanies());
    }
  }, []);

  const infiniteScrollRef = useInfiniteScroll(loadMoreCompanies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

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
        <div ref={infiniteScrollRef}></div>
      </div>
    </section>
  );
};

export default Stores;
