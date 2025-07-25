import type { LazyExoticComponent, JSX } from "react";
import type { TAccountPageParams } from "./Page.page.type";
import type { TAccount, TFormatedError } from "@root/global.type";

import Document from "@component/Document/Document.component";
import ErrorPage from "@component/Errors/Error-Page/Error-Page.component";
import Loader from "./Loader.page";

import { useRequest } from "@hook/use-fetch/use-fetch.hook";
import useAuth from "@hook/use-auth/use-auth.hook";

import { useParams } from "react-router-dom";
import { Fragment, lazy } from "react";

import getAccountById from "./requests/get-account-by-id.request";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page"));

export default function PageLayout(): JSX.Element {
	const params = useParams<TAccountPageParams>();
	const { auth } = useAuth();
	const { isLoading, data, error } = useRequest<TAccount, TFormatedError>({
		args: [params.accountId],
		key: `account/${params.accountId}`,
		callback: getAccountById,
	});

	auth("account/auth");

	return(
		<Document
			isLoading={isLoading}
			loader={<Loader/>}
			Metadata={() => {
				return(
					<Fragment>
						<title>{data?.name}</title>
						<meta name="description" content={`Account of ${data?.name}.`}/>
						<meta name="robots" content="index,follow"></meta>
					</Fragment>
				);
			}}>
		  {error ? <ErrorPage message={error.message} code={error.code}/> : <Page/>}
		</Document>
	);
};