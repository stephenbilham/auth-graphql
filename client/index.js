import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import App from "./components/App";

const client = new ApolloClient({
	dataIdFromObject: (od) => od.id,
});

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					Home
				</Route>
			</Router>
		</ApolloProvider>
	);
};

ReactDOM.render(<Root />, document.querySelector("#root"));
