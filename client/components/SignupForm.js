import React, { Component } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/LoginUser";
import { graphql } from "react-apollo";

class SignupForm extends Component {
	handleSubmit({ email, password }) {
		// this.props.mutate({
		// 	variables: { email, password },
		// });
	}

	render() {
		return (
			<div>
				<h3>Sign up</h3>
				<AuthForm handleSubmit={this.handleSubmit.bind(this)} />
			</div>
		);
	}
}

export default graphql(mutation)(SignupForm);
