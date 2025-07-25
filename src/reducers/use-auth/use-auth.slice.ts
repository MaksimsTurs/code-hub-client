import type { PayloadAction, Draft } from "@reduxjs/toolkit";
import type { 
	TUseAuthSliceState, 
	TUseAuthSignInActionReturn, 
	TUseAuthAuthActionReturn 
} from "./use-auth.slice.type";

import { createSlice } from "@reduxjs/toolkit";

import auth from "./actions/auth.action";
import signOut from "./actions/sign-out.action";
import signIn from "./actions/sign-in.action";

let G_COUNTER: number = 0;

const initUseAuthState: TUseAuthSliceState = {
	accessToken: null,
	account: null,
	error: null,
	isPending: false,
	isLoading: false,
	isAuth: false
};

const useAuthSlice = createSlice({
	name: "use-auth",
	initialState: initUseAuthState,
	reducers: {
		// Used by useWithAuth.
		setAccessToken: function(state: Draft<TUseAuthSliceState>, action: PayloadAction<string>) {
			state.accessToken = action.payload;
		},
		setAuthState: function(state: Draft<TUseAuthSliceState>, action: PayloadAction<Partial<TUseAuthSliceState>>) {
			for(let key in action.payload) {
				// @ts-ignore
				state[key] = action.payload[key];
			}
		},
		resetError: function(state: Draft<TUseAuthSliceState>) {
			state.error = null;
		},
		deleteData: function(state: Draft<TUseAuthSliceState>) {
			state.account = null;
			state.accessToken = null;
		}
	},
	extraReducers: function(builder) {
		builder
			.addCase(auth.pending, function(state: Draft<TUseAuthSliceState>) {
				state.isPending = true;
				state.isAuth = true;
				state.isLoading = !!G_COUNTER;

				G_COUNTER++;
			})
			.addCase(auth.rejected, function(state: Draft<TUseAuthSliceState>) {
				state.isPending = false;
				state.isAuth = false;
				state.isLoading = false;
			})
			.addCase(auth.fulfilled, function(state: Draft<TUseAuthSliceState>, action: PayloadAction<TUseAuthAuthActionReturn>) {
				state.accessToken = action.payload.accessToken;
				state.account = action.payload.account;

				state.isAuth = false;
				state.isPending = false;
				state.isLoading = false;
			})
			//====================================================================================
			//====================================================================================
			//====================================================================================
			.addCase(signIn.pending, function(state: Draft<TUseAuthSliceState>) {
				state.isPending = true;
				state.isLoading = !!G_COUNTER;

				G_COUNTER++;
			})
			.addCase(signIn.rejected, function(state: Draft<TUseAuthSliceState>) {
				state.isPending = false;
				state.isLoading = false;
			})
			.addCase(signIn.fulfilled, function(state: Draft<TUseAuthSliceState>, action: PayloadAction<TUseAuthSignInActionReturn>) {
				state.accessToken = action.payload.accessToken;
				state.account = action.payload.account;

				state.isPending = false;
				state.isLoading = false;
			})
			//====================================================================================
			//====================================================================================
			//====================================================================================
			.addCase(signOut.pending, function(state: Draft<TUseAuthSliceState>, action) {
				console.log("REJECT", action)

				state.isPending = true;
				state.isLoading = !!G_COUNTER;

				G_COUNTER++;
			})
			.addCase(signOut.rejected, function(state: Draft<TUseAuthSliceState>, action) {
				console.log("REJECT", action)
				state.isPending = false;
				state.isLoading = false;
			})
			.addCase(signOut.fulfilled, function(state: Draft<TUseAuthSliceState>) {
				console.log("BEFORE", state.accessToken, state.account)
				state.accessToken = null;
				state.account = null;
				console.log("AFTER", state.accessToken, state.account)

				state.isPending = false;
				state.isLoading = false;
			})
	}
});

export const { setAccessToken, setAuthState, resetError, deleteData } = useAuthSlice.actions;
export default useAuthSlice.reducer;