import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseAuthAuthActionsReturn } from "@reducer/use-auth/use-auth.slice.type";

import fetcher from "@util/fetcher/fetcher.util";

import OBJECT_CONST from "@root/OBJECT.const";

export default createAsyncThunk<TUseAuthAuthActionsReturn, string>(
	"use-auth/authorization",
	async function(url, thunkApi) {
		try {
			const account = await fetcher.get<TUseAuthAuthActionsReturn>(url, undefined, { credentials: "include" });
			
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