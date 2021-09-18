import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import query from "../queries/CurrentUser";
import { Link } from "react-router-dom";
import mutation from "../mutations/Logout";

class Header extends Component {
  onLogoutClick = () => {
    this.props.mutate({ refetchQueries: [{ query: query }] });
  };
  renderButtons = () => {
    const { loading, user, error } = this.props.data;
    if (loading) {
      return <div></div>;
    }
    if (error) return <p>ERROR: {error.message}</p>;
    if (user) {
      return (
        <li>
          <button onClick={this.onLogoutClick}>Logout</button>
        </li>
      );
    }
    return (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

const withMutation = graphql(mutation);
const withData = graphql(query);
export default withMutation(withData(Header));
