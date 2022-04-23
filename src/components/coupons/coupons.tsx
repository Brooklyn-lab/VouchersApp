import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCurrentCompany } from "../../store/slices/companies";

function Coupons() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const company = useAppSelector(({ DATA }) => DATA.selectedCompany);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentCompany(Number(id)));
    }
  }, [dispatch, id, company]);

  if (!company) {
    return null;
  }

  return (
    <section className="company">
      <div className="company__body">
        <div className="company__logo-wrapper">
          <img src={company.logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Coupons;
