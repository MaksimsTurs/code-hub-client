import type { TUseAuthSliceState } from "./use-auth.slice.type";

import { createSlice } from "@reduxjs/toolkit";

import authorization from "./actions/authorization.action";
import authentication from "./actions/authentication.action";
import withAuth from "./actions/with-auth.action";

const initUseAuthState: TUseAuthSliceState = {
	accessToken: undefined,
	isPending: false
};

const useAuthSlice = createSlice({
	name: "use-auth",
	initialState: initUseAuthState,
	reducers: {},
	extraReducers: function(builder) {
		builder
			//
			// Authorization
			//
			.addCase(authorization.pending, function(state) {
				state.isPending = true;
			})
			.addCase(authorization.rejected, function(state, _action: ReturnType<typeof authorization.rejected>) {
				state.isPending = false;
			})
			.addCase(authorization.fulfilled, function(state, action: ReturnType<typeof authorization.fulfilled>) {
				state.accessToken = action.payload.accessToken;
				state.account = action.payload.account;

				state.isPending = false;
			})
			//
			//	Authentication
			//
			.addCase(authentication.pending, function(state) {
				state.isPending = true;
			})
			.addCase(authentication.rejected, function(state, _action: ReturnType<typeof authentication.rejected>) {
				state.isPending = false;
			})
			.addCase(authentication.fulfilled, function(state, action: ReturnType<typeof authentication.fulfilled>) {
				state.accessToken = action.payload.accessToken;
				state.account = action.payload.account;

				state.isPending = false;
			})
			//
			// WithAut
			//
			.addCase(withAuth.pending, function(state) {
				state.isPending = true;
			})
			.addCase(withAuth.rejected, function(state, _action: ReturnType<typeof withAuth.rejected>) {
				state.isPending = false;
			})
			.addCase(withAuth.fulfilled, function(state, action: ReturnType<typeof withAuth.fulfilled>) {
				state.accessToken = action.payload.accessToken;

				state.isPending = false;
			})
	}
});

export default useAuthSlice.reducer;