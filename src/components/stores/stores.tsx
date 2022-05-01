import React, { FC, useCallback, useEffect, useRef } from "react";
import { generatePath } from "react-router-dom";
import Button from "../button/button";
import { ROUTES } from "../../constants";
import { fetchCompanies, selectCompanies } from "../../store/companies/companiesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./stores.scss";

function useInfiniteScroll(callbackParam: any, listLength: number, count: number) {
  const observer = useRef<null | IntersectionObserver>(null);

  const hasMore = listLength < count;

  if (!hasMore) {
    observer.current?.disconnect();
  }

  const infiniteScrollRef = useCallback((node: null | HTMLDivElement) => {
    if (!node) return false;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries.length === 0) return false;

        if (entries[0].isIntersecting) {
          callbackParam();
        }
      },
      { threshold: 1 }
    );
    observer.current.observe(node);
  }, []);

  useEffect(() => {
    return () => observer.current?.disconnect();
  }, []);

  return infiniteScrollRef;
}

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
