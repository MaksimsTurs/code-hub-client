import { createAsyncThunk } from "@reduxjs/toolkit";

import type { 
	TUseFetchErrorResponse, 
	TUseFetchActionsReturn, 
	TUseRequestAllActionParam, 
	TUseRequestAllActionReturnData 
} from "../use-fetch.slice.type";

export default createAsyncThunk<TUseFetchActionsReturn<TUseRequestAllActionReturnData>, TUseRequestAllActionParam, { rejectValue: TUseFetchErrorResponse }>(
	"use-fetch/request-all",
	async function(params) {
		// @ts-ignore
		const data: TUseRequestAllActionReturnData = await Promise.allSettled(params.promises);

		for(let index: number = 0; index < data.length; index++) {
			// @ts-ignore
			const response = data[index].value;
			// @ts-ignore
			data[index].value = { data: response.data, error: response.error };
		}

		return { newKeys: params.newKeys, prevKeys: params.prevKeys, data };
	}
);