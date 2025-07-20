import type { TStoreDispatch, TStoreRootState } from "@root/reducers/reducer.store";
import type { TUseConfirmReturn } from "./use-confirm.hook.type";
import type { TUseConfirmSliceState } from "@root/reducers/use-confirm/use-confirm.slice.type";

import { useDispatch, useSelector } from "react-redux";

import { setConfirmModalState } from "@reducer/use-confirm/use-confirm.slice";

// TODO: Very bad, save it in other place.
export const G_RESOLVERS: PromiseWithResolvers<any>[] = [];

export default function useConfirm<D>(): TUseConfirmReturn<D> {
	const dispatch = useDispatch<TStoreDispatch>();
	const { data, isVisible } = useSelector<TStoreRootState, TUseConfirmSliceState>(selectors => selectors.useConfirm);

	return {
		data: data as D,
		isVisible,
		confirm: async function<V>(data: any): Promise<V> {
			dispatch(setConfirmModalState({ data, isVisible: true }));
			
			const resolver: PromiseWithResolvers<V> = Promise.withResolvers<V>();
		
			G_RESOLVERS.push(resolver);
			
			return await resolver.promise;
		},
		respond: function<V>(value: V): void {
			const currResolver: PromiseWithResolvers<V> | undefined = G_RESOLVERS.at(-1);

			if(currResolver) {
				currResolver.resolve(value);
				dispatch(setConfirmModalState({ isVisible: false }));
			}
		}
	}
};

// Chat GPT:
// Wenn deine UI-Komponente sofort rendert (z. B. via Redux-State), ist das akzeptabel — aber es ist fragil bei asynchronem Rendering oder Animationen.
// Empfehlung: Mindestens ein Flag let isActive = false zusätzlich zu resolvers, oder: Umbau auf eine strukturierte Registry, falls du es später erweitern möchtest.

/*
	First open the modal window.
	Create new promise.
		- Somehow save the promise.
		- Resolve from other file with some boolean value.
	Wait after user click on close or confirm button.
*/