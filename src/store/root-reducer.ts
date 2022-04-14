import {combineReducers} from '@reduxjs/toolkit';
import {companiesData} from './slices/companies';
import {NameSpace} from '../const';

export const rootReducer = combineReducers({
	[NameSpace.data]: companiesData.reducer,
});
