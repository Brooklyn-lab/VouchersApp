import { useAppDispatch, useAppSelector } from "../../hooks";
import { generatePath, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCurrentCompany } from "../../store/slices/companies";
import { AppRoute } from "../../const";
import Details from "./details";
import Button from "../button/button";
import "./coupons.scss";

function Coupons() {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const company = useAppSelector(({ DATA }) => DATA.selectedCompany);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentCompany(Number(id)));
    }
  }, [dispatch, id]);

  function generatePathLocal(couponName: string, id: number) {
    return generatePath(AppRoute.Coupon, {
      couponName: couponName.toLocaleLowerCase().replace(/\s/g, "-"),
      id: String(id),
    });
  }

  if (!company) {
    return null;
  }

  return (
    <section className="company">
      <div className="company__body">
        <div className="company__image-wrapper">
          <div className="company__logo-wrapper">
            <img src={company.logo} alt="" />
          </div>
        </div>
        {company.coupons ? (
          <div className="coupons">
            {company.coupons.map((coupon) => (
              <div key={coupon.id} className="coupons__item">
                <p className="coupons__item-header">Valid Till 28-02-2022</p>
                <div className="coupons__item-body">
                  <div className="coupons__item-shortText-wrapp">
                    <p className="coupons__item-shortText">{coupon.shortText}</p>
                  </div>
                  <div className="coupons__item-about-wrapp">
                    <p className="coupons__item-about-header">{coupon.header}</p>
                    <div className="coupons__item-about-text-wrapper">
                      {coupon.description.title ? (
                        <p className="coupons__item-about-title">{coupon.description.title}</p>
                      ) : null}
                      {coupon.description.text.map((text) => (
                        // fixme не используй id
                        <div id={text}>
                          <p className="coupons__item-about-text">{text}</p>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="coupons__item-button"
                      path={generatePathLocal(company.title, coupon.id)}
                      text="GET DEAL"
                    />
                    {/*<div className="button coupons__item-button">*/}
                    {/*  <Link*/}
                    {/*    className="button__link"*/}
                    {/*    to={generatePath(AppRoute.Coupon, { couponName: company.title, id: String(coupon.id) })}*/}
                    {/*  />*/}
                    {/*  <span className="button__text">GET DEAL</span>*/}
                    {/*</div>*/}
                  </div>
                </div>
                {coupon.details ? <Details details={coupon.details} /> : ""}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Coupons;
