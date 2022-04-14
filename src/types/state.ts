import {store} from '../store';
import {Company} from './company';

export type CompaniesData = {
	companies: Company[],
	isLoadingData: boolean,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;