import type { PayloadAction } from "@reduxjs/toolkit";
import type { TUseConfirmSliceState, TUseConfirmSetStatePayload } from "../use-confirm/use-confirm.slice.type";

import { createSlice } from "@reduxjs/toolkit";

const initUseFetchState: TUseConfirmSliceState = {
	isVisible: false
};

const useConfirm = createSlice({
	name: "use-confirm",
	initialState: initUseFetchState,
	reducers: {
		setConfirmModalState: function(state, action: PayloadAction<TUseConfirmSetStatePayload>) {
			state.data = action.payload.data || state.data;
			state.isVisible = action.payload.isVisible ?? state.isVisible;
		},
	}
});

export const { setConfirmModalState } = useConfirm.actions;

export default useConfirm.reducer;