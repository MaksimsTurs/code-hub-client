import { createAsyncThunk } from "@reduxjs/toolkit";

import OBJECT_CONST from "@root/OBJECT.const";

import type { TUseAuthAuthenticationParam, TUseAuthAuthActionsReturn } from "../use-auth.slice.type";

import fetcher from "@util/fetcher/fetcher.util";

export default createAsyncThunk<TUseAuthAuthActionsReturn, TUseAuthAuthenticationParam>(
	"use-auth/authentication",
	async function(params, thunkApi) {
		try {
			const account = await fetcher.post<TUseAuthAuthActionsReturn>(params.url, params.body, undefined, { credentials: "include" });
		
			if(account.error) {
				return thunkApi.rejectWithValue(account.error);
			}
	
			return account.data!;
		} catch(error) {
			if(error instanceof Error) {
				return thunkApi.rejectWithValue({ code: 0, message: error.message });
			}

			return thunkApi.rejectWithValue(OBJECT_CONST.DEFAULT_ERROR_DATA);
		}
	}
);