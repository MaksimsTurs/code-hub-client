import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { TUseCodeHubState, TFileExplorerFile } from "@/hooks/use-code-hub/use-code-hub.hook.type";

const initUseCodeHubState: TUseCodeHubState = {
	selectedFile: undefined
};

const codeHub = createSlice({
	name: "code-hub",
	initialState: initUseCodeHubState,
	reducers: {
		selectFile: function(store, action: PayloadAction<TFileExplorerFile | undefined>) {
			store.selectedFile = action.payload;
		}
	}
});

export const {
	selectFile
} = codeHub.actions;
export default codeHub.reducer;