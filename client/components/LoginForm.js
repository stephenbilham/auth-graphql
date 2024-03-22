import React, { Component } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/LoginUser";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: [],
		};
	}
	handleSubmit({ email, password }) {
		this.props
			.mutate({
				variables: { email, password },
				refetchQueries: [{ query }],
			})
			.catch((res) => {
				const errors = res.graphQLErrors.map((el) => el.message);
				this.setState({ errors });
			});
	}

	render() {
		return (
			<div>
				<h3>Login</h3>
				<AuthForm
					handleSubmit={this.handleSubmit.bind(this)}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

export default graphql(mutation)(LoginForm);
