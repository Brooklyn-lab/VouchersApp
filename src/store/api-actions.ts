import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Company} from '../types/company';
import {fetchCompaniesData} from './slices/companies';

console.log(process.env.REACT_APP_API_BASE_URL)

function companiesFactory(data:Array<Company>) {
	return data.map(company=>{
		console.log(process.env.REACT_APP_API_BASE_URL)
		return {
			...company,
			logo:process.env.REACT_APP_API_BASE_URL + company.logo
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
