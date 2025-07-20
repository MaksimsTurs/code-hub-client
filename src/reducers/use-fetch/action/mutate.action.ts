import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseFetchActionsReturn, TUseMutateActionParam, TUseFetchErrorResponse } from "../use-fetch.slice.type";

import OBJECT_CONST from "@root/OBJECT.const";

export default createAsyncThunk<TUseFetchActionsReturn<unknown>, TUseMutateActionParam, { rejectValue: TUseFetchErrorResponse }>(
	"use-fetch/mutate",
	async function(params, thunkApi) {
		try {
			return { newKeys: params.newKeys, prevKeys: params.prevKeys, data: await params.func(params.body, params.currState) };
		} catch(error) {
			if(error instanceof Error) {
				return thunkApi.rejectWithValue({ code: 0, message: error.message });
			}

			return thunkApi.rejectWithValue(OBJECT_CONST.DEFAULT_ERROR_DATA);
		}
	}
);