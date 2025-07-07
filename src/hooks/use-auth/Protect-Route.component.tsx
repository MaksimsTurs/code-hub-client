import type { JSX } from "react";
import type { TProtectRouteProps, TProtectCondition } from "./use-auth.hook.type.ts";

import { Navigate } from "react-router-dom";

import useAuth from "./use-auth.hook.ts";

export default function ProtectRoute(props: TProtectRouteProps): JSX.Element {
	const { isPending } = useAuth();

	if(!isPending && ((props.and && props.and.length && !and(props.and)) ||
		 (props.or && props.or.length && !or(props.or)))) {
		return <Navigate to={props.redirectUrl}/>;
	}

	return props.children as JSX.Element;
};

function and(conditions: TProtectCondition[]): boolean {
	let index: number = 0;

	const length: number = conditions.length;

	while(index < length) {
		if(!conditions[index]) {
			break;
		}

		index++;
	}

	return index === length;
};

function or(conditions: TProtectCondition[]): boolean {
	let index: number = 0;
	let res = false;

	const length: number = conditions.length;

	while(index < length) {
		if(conditions[index]) {
			res = true;
		}

		index++;
	}

	return res;
}