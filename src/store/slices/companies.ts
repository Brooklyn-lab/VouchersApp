import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CompaniesData} from '../../types/state';
import {NameSpace} from '../../const';
import {Company} from '../../types/company';

const initialState: CompaniesData = {
	companies: [],
	isLoadingData: false,
	selectedCompany: null,
};

export const companiesData = createSlice({
	name: NameSpace.data,
	initialState,
	reducers: {
		fetchCompaniesData: (state, action: PayloadAction<Company[]>) => {
			state.companies = action.payload;
			state.isLoadingData = true;
		},
		getCurrentCompany: (state, action: PayloadAction<number>) => {
			state.selectedCompany = state.companies.find((company) => company.id === action.payload) ?? [];
		},
	},
});

export const {fetchCompaniesData, getCurrentCompany} = companiesData.actions;
