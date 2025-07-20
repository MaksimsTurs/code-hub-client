import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseAuthAuthActionReturn, TUseAuthAuthActionParam } from "@reducer/use-auth/use-auth.slice.type";

import fetcher from "@util/fetcher/fetcher.util";

import USEFETCH_OBJECT_CONST from "../OBJECT.const";
import OBJECT_CONST from "@root/OBJECT.const";

export default createAsyncThunk<TUseAuthAuthActionReturn, TUseAuthAuthActionParam>(
	"use-auth/auth",
	async function(url, thunkApi) {
		try {
			const account = await fetcher.get<TUseAuthAuthActionReturn>(url, undefined, USEFETCH_OBJECT_CONST.FETCHER_OPTIONS);

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