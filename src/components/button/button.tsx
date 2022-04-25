import { Link } from "react-router-dom";
import { FC } from "react";

import "./button.scss";

// enum ButtonClasses {
//   "mainCompanies" = "companies__button",
//   "stores" = "stores__button",
//   "coupons" = "coupons__item-button",
// }
//
// enum PathType {
//   "mainCompanies" = AppRoute.Stores,
//   "stores" = AppRoute.Coupon,
//   "coupons" = AppRoute.Coupons,
// }

// type ButtonProps = {
// 	typeButton: 'mainCompanies' | 'stores' | 'coupons',
// }

interface ButtonProps {
  className: string;
  path: string;
  text: string;
}

const Button: FC<ButtonProps> = ({ className, path, text }) => {
  return (
    <div className={`button ${className}`}>
      <Link className="button__link" to={path} />
      <span className="button__text">{text}</span>
    </div>
  );
};

export default Button;
