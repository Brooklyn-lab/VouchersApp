import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Company} from '../types/company';
import {fetchCompaniesData} from './slices/companies';

export const fetchCompaniesDataAction = createAsyncThunk<void, undefined, {
	dispatch: AppDispatch,
	state: State,
	extra: AxiosInstance
}>(
	'data/fetchCompaniesData',
	async (_arg, {dispatch, extra: api}) => {
		try {
			const {data} = await api.get<Company[]>('/companies');
			dispatch(fetchCompaniesData(data));
		} catch (error) {
			console.error(error);
		}
	});
