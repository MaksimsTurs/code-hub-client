import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import useFetchSlice from "./use-fetch/use-fetch.slice";
import useCodeHubSlice from "./use-code-hub/use-code-hub.slice";
import useAuthSlice from "./use-auth/use-auth.slice";

const reducers = combineReducers({
	useFetch: useFetchSlice,
	useCodeHub: useCodeHubSlice,
	useAuth: useAuthSlice
});

const store = configureStore({ reducer: reducers });

export type TStoreDispatch = typeof store.dispatch;
export type TStoreRootState = ReturnType<typeof store.getState>;

export default store;