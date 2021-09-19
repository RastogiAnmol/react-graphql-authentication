import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { withRouter } from "react-router";
import mutation from "../mutations/Login";
import { graphql } from "@apollo/client/react/hoc";
import query from "../queries/CurrentUser";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { error: [] };
  }

  onSubmit = async ({ email, password }) => {
    try {
      await this.props.mutate({
        variables: { email, password },
        refetchQueries: [{ query }],
        //this is needed so that we don't go to the dashboard before the user was fetched
        //otherwise we'd get redirected to login from the requireAuth HOC
        awaitRefetchQueries: true,
      });
      this.props.history.push("/dashboard");
    } catch (error) {
      const errs = error.graphQLErrors.map((err) => {
        const msg = err.message;
        return msg.replaceAll('"', "").replace("Unexpected error value:", "");
      });
      this.setState({ errors: errs });
    }
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit} errors={this.state.errors} />
      </div>
    );
  }
}

const withMutation = graphql(mutation);

export default withMutation(withRouter(LoginForm));
