import "@scss/root.scss";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode, JSX } from "react";

import { Provider } from "react-redux";

import store from "@reducer/reducer.store";

import ErrorBoundary from "@component/Error-Boundary/Error-Boundary.component";
import Footer from "@component/Footer/Footer.component";
import SideMenu from "@component/Side-Menu/Side-Menu.component";
import ConfirmModal from "@component/Modals/Confirm-Modal/Confirm-Modal.component";

import Home from "@page/Home/Layout.page";
import Projects from "@page/Projects/Layout.page";
// import Project from "@page/Project/Layout.page";
import CreateProject from "@page/Create-Project/Layout.page";
import SignUp from "@page/Sign-Up/Layout.page";
import SignIn from "@page/Sign-In/Layout.page";
import Account from "@page/Account/Layout.page";
import AccountSetting from "@page/Account-Setting/Layout.page";

import fetcher from "./utils/fetcher/fetcher.util";

// TODO: Add Shema markup for better SEO.
// TODO: Rename use fetch actions folder to "actions".
// TODO: Make Side menu for some devie widths fixed positioning.

function App(): JSX.Element {
	fetcher.base = import.meta.env.DEV ? "http://localhost:4000/" : "https://code-hub-server.vercel.app/";

	return(
		<Routes>
			<Route index element={<Home/>}/>

			<Route path="/sign-up" element={<SignUp/>}/>
			<Route path="/sign-in" element={<SignIn/>}/>

			<Route path="/account/projects" element={<Projects/>}/>
			<Route path="/account/:accountId" element={<Account/>}/>
			<Route path="/account/:accountId/setting" element={<AccountSetting/>}/>

			{/* <Route path="/project/:projectId" element={<Project/>}/> */}
			<Route path="/project/create" element={<CreateProject/>}/>
		</Routes>
	);
};

createRoot(document.getElementById("app_container") as HTMLElement).render(
  <StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<BrowserRouter>
					<SideMenu/>
					<div className="fc-n-n-xs app_body">
						<App/>
						<Footer/>
					</div>
				</BrowserRouter>
			</ErrorBoundary>
			<ConfirmModal/>
		</Provider>
	</StrictMode>
);