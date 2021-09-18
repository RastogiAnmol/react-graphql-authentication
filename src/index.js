import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import LoginForm from "./components/LoginForm";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  link: httpLink,
  cache,
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" ccomponent={<div>test</div>} />
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/login" component={LoginForm} />
            {/* <Route exact path="/signup" component={SignupForm} /> */}
          </Switch>
        </App>
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
