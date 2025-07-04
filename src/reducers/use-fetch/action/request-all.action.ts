import { createAsyncThunk } from "@reduxjs/toolkit";

import type { 
	TUseFetchErrorResponse, 
	TUseFetchActionsReturn, 
	TUseRequestAllActionParam, 
	TUseRequestAllActionReturnData 
} from "../use-fetch.slice.type";

// TODO: Fix @ts-ignore hell.
export default createAsyncThunk<TUseFetchActionsReturn<TUseRequestAllActionReturnData>, TUseRequestAllActionParam, { rejectValue: TUseFetchErrorResponse }>(
	"use-fetch/request-all",
	async function(params) {
		// @ts-ignore
		const data: TUseRequestAllActionReturnData = await Promise.allSettled(params.promises);

		return { newKeys: params.newKeys, prevKeys: params.prevKeys, data };
	}
);