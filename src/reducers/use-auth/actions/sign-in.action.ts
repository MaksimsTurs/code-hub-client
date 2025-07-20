import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseAuthSignInActionReturn, TUseAuthSignInActionParam } from "@reducer/use-auth/use-auth.slice.type";

import fetcher from "@util/fetcher/fetcher.util";

import USEFETCH_OBJECT_CONST from "../OBJECT.const";
import OBJECT_CONST from "@root/OBJECT.const";

export default createAsyncThunk<TUseAuthSignInActionReturn, TUseAuthSignInActionParam>(
	"use-auth/sign-in",
	async function(param, thunkApi) {
		try {
			const signInResponse = await fetcher.post<TUseAuthSignInActionReturn>(param.url, param.body, undefined, USEFETCH_OBJECT_CONST.FETCHER_OPTIONS);

			if(signInResponse.error) {
				return thunkApi.rejectWithValue(signInResponse.error);
			}
	
			return signInResponse.data!;
		} catch(error) {
			if(error instanceof Error) {
				return thunkApi.rejectWithValue({ code: 0, message: error.message });
			}

			return thunkApi.rejectWithValue(OBJECT_CONST.DEFAULT_ERROR_DATA);
		}
	}
);