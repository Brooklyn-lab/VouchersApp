import {createAPI} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../types/state';
import {Action} from '@reduxjs/toolkit';
import {makeFakeCompanies} from '../utils/mock';
import {fetchCompaniesDataAction} from './api-actions';
import {fetchCompaniesData} from './slices/companies';

describe('Async actions', () => {
	const api = createAPI();
	const mockAPI = new MockAdapter(api);
	const middlewares = [thunk.withExtraArgument(api)];
	
	const mockStore = configureMockStore<
			State,
			Action,
			ThunkDispatch<State, typeof api, Action>
		>(middlewares);
	
	it('should dispatch fetchCompaniesData when GET /companies', async () => {
		const mockCompanies = [makeFakeCompanies()];
		mockAPI
			.onGet('/companies')
			.reply(200, mockCompanies);
		
		const store = mockStore();
		
		await store.dispatch(fetchCompaniesDataAction());
		
		const action = store.getActions().map(({type}) => type);
		expect(action).toContain(fetchCompaniesData.toString());
	});
});
