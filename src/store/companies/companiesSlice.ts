import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CompaniesInitialState, Company } from './types'
import { companiesFactory } from './factories'
import { api, AppState } from '../store'

const initialState: CompaniesInitialState = {
  companies: [],
  loading: 'idle',
  selectedCompany: undefined,
}

const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const { data } = await api.get<Company[]>('/companies/')
  return companiesFactory(data)
})

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    getCurrentCompany: (state, action: PayloadAction<number>) => {
      state.selectedCompany = state.companies.find((company) => company.id === action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companies = action.payload
      state.loading = 'fulfilled'
    })
    builder.addCase(fetchCompanies.rejected, (state) => {
      state.loading = 'rejected'
    })
  },
})

export const { getCurrentCompany } = companiesSlice.actions

export const selectCompanies = (state: AppState) => state.companies
