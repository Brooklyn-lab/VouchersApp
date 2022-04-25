import { store } from "../store";
import {Company, Coupon} from "./company";

export type CompaniesData = {
  companies: Company[];
  isLoadingData: boolean;
  selectedCompany?: Company;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
