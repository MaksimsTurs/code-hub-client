import "@scss/root.scss";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode, JSX } from "react";

import { Provider } from "react-redux";

import store from "@reducer/reducer.store";

import ErrorBoundary from "@component/Error-Boundary/Error-Boundary.component";
import Header from "@component/Header/Header.component";
import Footer from "@component/Footer/Footer.component";

import Home from "@page/Home/Layout.page";
import Projects from "@page/Projects/Layout.page";
import Project from "@page/Project/Layout.page";
import CreateProject from "@page/Create-Project/Layout.page";
import SignUp from "@page/Sign-Up/Layout.page";
import SignIn from "@page/Sign-In/Layout.page";

import fetcher from "./utils/fetcher/fetcher.util";

function App(): JSX.Element {
	fetcher.base = import.meta.env.DEV ? "http://localhost:4000/" : "https://code-hub-server.vercel.app/";

	return(
		<main>
			<Routes>
				<Route index element={<Home/>}/>

				<Route path="/sign-up" element={<SignUp/>}/>
				<Route path="/sign-in" element={<SignIn/>}/>

				<Route path="/user/:userId/projects" element={<Projects/>}/>
				
				<Route path="/project/:projectId" element={<Project/>}/>
				<Route path="/project/create" element={<CreateProject/>}/>
			</Routes>
		</main>
	);
};

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<BrowserRouter>
					<Header/>
					<App/>
					<Footer/>
				</BrowserRouter>
			</ErrorBoundary>
		</Provider>
	</StrictMode>
);