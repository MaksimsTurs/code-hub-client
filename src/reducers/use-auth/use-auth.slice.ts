import type { TUseAuthSliceState } from "./use-auth.slice.type";
import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initUseAuthState: TUseAuthSliceState = {
	isLoading: true,
	isPending: false,
	accessToken: undefined
};

const useAuthSlice = createSlice({
	name: "use-auth",
	initialState: initUseAuthState,
	reducers: {
		saveAccessToken: function(state, action: PayloadAction<string>) {
			state.accessToken = action.payload;
		}
	}
});

export const { saveAccessToken } = useAuthSlice.actions;

export default useAuthSlice.reducer;