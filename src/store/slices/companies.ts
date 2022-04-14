import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CompaniesData} from '../../types/state';
import {NameSpace} from '../../const';
import {Company} from '../../types/company';

const initialState: CompaniesData = {
	companies: [],
	isLoadingData: false,
};

export const companiesData = createSlice({
	name: NameSpace.data,
	initialState,
	reducers: {
		fetchCompaniesData: (state, action: PayloadAction<Company[]>) => {
			state.companies = action.payload;
			state.isLoadingData = true;
		},
	},
});

export const {fetchCompaniesData} = companiesData.actions;
