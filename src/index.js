import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";

const cache = new InMemoryCache();

// Check this to understand how to include cookies for authentication in graphql
// without cookies , authenication will not work , because browser will not pass cookies by default
// and graphql server will not understand the origin of the request.
// Without cookies , the graphql server will assume that the request has not come from the same user
// https://www.apollographql.com/docs/react/networking/authentication/
const httpLink = createHttpLink({
  credentials: "include",
  uri: "http://localhost:4000/graphql",
//   opts:{
//     credentials:'include'
// },
});

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  link: httpLink,
  cache,
  //   credentials: "same-origin"
//   credentials: "include",
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" ccomponent={<div>test</div>} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
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
