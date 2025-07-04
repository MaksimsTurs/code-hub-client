import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseFetchActionsReturn, TUseRequestActionParam, TUseFetchErrorResponse } from "../use-fetch.slice.type";

export default createAsyncThunk<TUseFetchActionsReturn<any>, TUseRequestActionParam, { rejectValue: TUseFetchErrorResponse }>(
	"use-fetch/request",
	async function(params, thunkApi) {
		const respone = await params.func();

		if(respone.error) {
			//@ts-ignore
			return thunkApi.rejectWithValue({ code: "code" in respone.error ? respone.error.code : 0, message: respone.error?.message })
		}

		return {...params, data: respone.data, func: undefined };
	}
);