import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseFetchActionsReturn, TUseMutateActionParam } from "../use-fetch.slice.type";

export default createAsyncThunk<TUseFetchActionsReturn<unknown>, TUseMutateActionParam>(
	"use-fetch/mutate",
	async function(params, thunkApi) {
		const response = await params.func(params.body, params.currState);

		if(response.error) {
			return thunkApi.rejectWithValue(response.error);
		}

		return { 
			currKeys: params.currKeys, 
			prevKeys: params.prevKeys, 
			data: response.data
		};
	}
);