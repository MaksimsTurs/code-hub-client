import "@/scss/root.scss";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode, JSX } from "react";

import { Provider } from "react-redux";

import store from "./reducers/reducer.store";

import ErrorBoundary from "./components/Error-Boundary/Error-Boundary.component";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

import Home from "./pages/Home/Layout.page";
import Projects from "./pages/Projects/Layout.page";
import Project from "./pages/Project/Layout.page";
import CreateProject from "./pages/Create-Project/Layout.page";
import SignUp from "./pages/Sign-Up/Layout.page";
import SignIn from "./pages/Sign-In/Layout.page";

import fetcher from "./utils/fetcher/fetcher.util";

function App(): JSX.Element {
	fetcher.base = import.meta.env.DEV ? "http://localhost:4000/" : "https://";

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