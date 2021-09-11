import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route, IndexRoute } from "react-router-dom";
import App from "./components/App";

const client = new ApolloClient({
  dataIdfroObject: (o) => o.id,
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <Route path="/" component={App} />
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
