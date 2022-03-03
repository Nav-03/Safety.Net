import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Coordinator } from "./pages/coordinator.js";
import { Members } from "./pages/members.js";
import { Main_event } from "./pages/main_event.js";
import { IDcard } from "./pages/IDcard.js";
import { AdminLogin } from "./pages/admin_login.js";
import injectContext from "./store/appContext";
import { Landing } from "./pages/landing_page.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Registration } from "./pages/registration";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/coordinator">
							<Coordinator />
						</Route>
						<Route exact path="/IDcard">
							<IDcard />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/admin_login">
							<AdminLogin />
						</Route>
						<Route exact path="/registration">
							<Registration />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/landing_page">
							<Landing />
							</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
