import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseFetchActionsReturn, TUseMutateActionParam, TUseFetchErrorResponse } from "../use-fetch.slice.type";

export default createAsyncThunk<TUseFetchActionsReturn<unknown>, TUseMutateActionParam, { rejectValue: TUseFetchErrorResponse }>(
	"use-fetch/mutate",
	async function(params, thunkApi) {
		const response = await params.func(params.body, params.currState);

		if(response.error) {
			// @ts-ignore
			return thunkApi.rejectWithValue({ code: response.error?.code || 0, message: response.error.message });
		}

		return { newKeys: params.newKeys, prevKeys: params.prevKeys, data: response.data };
	}
);