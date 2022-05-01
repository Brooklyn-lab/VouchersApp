export type Coupon = [
  {
    id: number;
    shortText: string;
    header: string;
    description: {
      title?: string;
      text: string[];
    };
    details?: string[];
  }
];

export type Company = {
  id: number;
  title: string;
  logo: string;
  link: string;
  coupons?: Coupon;
};

export type CompaniesInitialState = {
  list: Company[];
  page: number;
  count: number;
  isFirstObtainHappened: boolean;
  loading: Loading;
  selectedCompany?: Company;
};
type Loading = "idle" | "pending" | "fulfilled" | "rejected";
