import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { useMutation } from "@apollo/client";
import { FETCH_USER, SIGNUP } from "../queries/apollloQueries";
import { withRouter } from "react-router";

const SignupForm = ({ history }) => {
  const [signupMutation] = useMutation(SIGNUP);
  const [errors, setErrors] = useState([]);
};

class SignupForm extends Component {
  constructor(props){
    super(props)
    state = {
        errors:[]
    }
  }
  onSignup = ({ email, password }) => {
    signupMutation({
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query: FETCH_USER }],
    })
      .then(() => history.push("/dashboard"))
      .catch((res) => {
        const errs = res.graphQLErrors.map((err) => {
          const msg = err.message;
          return msg.replaceAll('"', "").replace("Unexpected error value:", "");
        });
        setErrors(errs);
      });
  };
  render() {
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm errors={errors} onSubmit={this.onSignup} />
      </div>
    );
  }
}
export default withRouter(SignupForm);
