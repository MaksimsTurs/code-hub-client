import type { TUseAuthSliceState } from "./use-auth.slice.type";

import { createSlice } from "@reduxjs/toolkit";

import authorization from "./actions/authorization.action";
import authentication from "./actions/authentication.action";
import withAuth from "./actions/with-auth.action";

const initUseAuthState: TUseAuthSliceState = {
	accessToken: undefined
};

const useAuthSlice = createSlice({
	name: "use-auth",
	initialState: initUseAuthState,
	reducers: {},
	extraReducers: function(builder) {
		builder
			.addCase(authorization.fulfilled, function(state, action: ReturnType<typeof authorization.fulfilled>) {
				state.accessToken = action.payload.accessToken;
				state.account = action.payload.account;
			})
			.addCase(authentication.fulfilled, function(state, action: ReturnType<typeof authentication.fulfilled>) {
				state.accessToken = action.payload.accessToken;
				state.account = action.payload.account;
			})
			.addCase(withAuth.fulfilled, function(state, action: ReturnType<typeof withAuth.fulfilled>) {
				state.accessToken = action.payload.accessToken;
			})
	}
});

export default useAuthSlice.reducer;