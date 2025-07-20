import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseAuthSignOutActionReturn, TUseAuthSignOutActionParam } from "@reducer/use-auth/use-auth.slice.type";

import fetcher from "@util/fetcher/fetcher.util";

import USEFETCH_OBJECT_CONST from "../OBJECT.const";
import OBJECT_CONST from "@root/OBJECT.const";

export default createAsyncThunk<TUseAuthSignOutActionReturn, TUseAuthSignOutActionParam>(
	"use-auth/sign-out",
	async function(url, thunkApi) {
		try {
			const signOutResponse = await fetcher.get<TUseAuthSignOutActionReturn>(url, undefined, USEFETCH_OBJECT_CONST.FETCHER_OPTIONS);

			if(signOutResponse.error) {
				return thunkApi.rejectWithValue(signOutResponse.error);
			}
		} catch(error) {
			if(error instanceof Error) {
				return thunkApi.rejectWithValue({ code: 0, message: error.message });
			}

			return thunkApi.rejectWithValue(OBJECT_CONST.DEFAULT_ERROR_DATA);
		}
	}
);