import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseFetchActionsReturn, TUseRequestActionParams } from "../use-fetch.slice.type";

export default createAsyncThunk<TUseFetchActionsReturn<unknown>, TUseRequestActionParams>(
	"use-fetch/request",
	async function(params, thunkApi) {
		const respone = await params.callback(...params.args);

		if(respone.error) {
			return thunkApi.rejectWithValue(respone.error);
		}

		return {
			currKeys: params.currKeys,
			prevKeys: params.prevKeys,
			data: respone.data
		};
	}
);