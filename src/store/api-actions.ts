import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Company} from '../types/company';
import {fetchCompaniesData} from './slices/companies';

const REACT_APP_API_BASE_URL = 'http://localhost:8000';

function companiesFactory(data:Array<Company>) {
	return data.map(company=>{
		return {
			...company,
			logo:REACT_APP_API_BASE_URL + company.logo
		}
	})
}

export const fetchCompaniesDataAction = createAsyncThunk<void, undefined, {
	dispatch: AppDispatch,
	state: State,
	extra: AxiosInstance
}>(
	'data/fetchCompaniesData',
	async (_arg, {dispatch, extra: api}) => {
		try {
			const {data} = await api.get<Company[]>('/companies/');
			dispatch(fetchCompaniesData(companiesFactory(data)));
		} catch (error) {
			console.error(error);
		}
	});
