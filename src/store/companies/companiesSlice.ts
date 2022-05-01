import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompaniesInitialState, Company } from "./types";
import { api, AppState } from "../store";
import { companiesFactory } from "./factories";

const initialState: CompaniesInitialState = {
  list: [],
  page: 1,
  count: 0,
  isFirstObtainHappened: false,
  loading: "idle",
  selectedCompany: undefined,
};

export const fetchCompanies = createAsyncThunk("companies/fetchCompanies", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as AppState;
  const page = state.companies.page;
  const { headers, data } = await api.get<Company[]>("/companies/", { params: { _page: page, _limit: 5 } });

  return { count: parseInt(headers["x-total-count"]), data: companiesFactory(data) };
});

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    getCurrentCompany: (state, action: PayloadAction<number>) => {
      state.selectedCompany = state.list.find((company) => company.id === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchCompanies.fulfilled,
      (state, action: PayloadAction<{ count: number; data: Array<Company> }>) => {
        if (state.page === 1) {
          state.isFirstObtainHappened = true;
        }
        state.count = action.payload.count;
        state.list = [...state.list, ...action.payload.data];
        state.page++;
        state.loading = "fulfilled";
      }
    );
    builder.addCase(fetchCompanies.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export const { getCurrentCompany } = companiesSlice.actions;

export const selectCompanies = (state: AppState) => state.companies;
