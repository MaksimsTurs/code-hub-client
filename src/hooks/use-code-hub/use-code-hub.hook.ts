import type { TStoreRootState, TStoreDispatch } from "@/reducers/reducer.store";
import type { TUseCodeHubState, TFileExplorerFile } from "./use-code-hub.hook.type";

import { useDispatch, useSelector } from "react-redux";

import { selectFile } from "@/reducers/use-code-hub/use-code-hub.slice";

export default function useCodeHub() {
	const dispatch = useDispatch<TStoreDispatch>();
	const store = useSelector<TStoreRootState, TUseCodeHubState>(state => state.useCodeHub);

	return {
		...store,
		selectFile: function(file: TFileExplorerFile): void {
			dispatch(selectFile(file));
		}
	};
};