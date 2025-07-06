import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TUseAuthWithAuthParam, TUseAuthWithAuthReturn } from "@reducer/use-auth/use-auth.slice.type";
import type { TFetcherOptions } from "@util/fetcher/fetcher.util.type";

import OBJECT_CONST from "@root/OBJECT.const";

import fetcher from "@util/fetcher/fetcher.util";

export default createAsyncThunk<TUseAuthWithAuthReturn<unknown>, TUseAuthWithAuthParam>(
	"use-auth/with-auth",
	async function(params, thunkApi) {
		try {
			const options: TFetcherOptions = { credentials: "include" };
			const headers = { Authentication: `Bearer ${params?.accessToken}` };
			const args = params.method === "post" ? [params.body, headers, options] : [headers, options];

			const firstAPIAccessTry = await fetcher[params.method as "post" | "get"](params.url, ...args);

			// Access is forbidden, try to create new access token.
			if(firstAPIAccessTry.response.status === 403) {
				// TODO: Maybe implement function that save a url to the route there create user the new access token.
				const newAccessToken = await fetcher.get<{ accessToken: string }>("user/refresh-access-token", undefined, options);

				if(newAccessToken.error) {
					return thunkApi.rejectWithValue(newAccessToken.error);
				}

				const lastAPIAccessTry = await fetcher[params.method as "post" | "get"](params.url, ...args);

				if(lastAPIAccessTry.error) {
					return thunkApi.rejectWithValue(lastAPIAccessTry.error);
				}
				
				return { accessToken: params.accessToken, data: lastAPIAccessTry.data };
			}

			// Handle all other errors.
			if(firstAPIAccessTry.error) {
				return thunkApi.rejectWithValue(firstAPIAccessTry.error);
			}

			return { accessToken: params.accessToken, data: firstAPIAccessTry.data };
		} catch(error) {
			if(error instanceof Error) {
				return thunkApi.rejectWithValue({ code: 0, message: error.message });
			}

			return thunkApi.rejectWithValue(OBJECT_CONST.DEFAULT_ERROR_DATA);
		}
	}
);