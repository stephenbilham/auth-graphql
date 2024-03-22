import React, { Component } from "react";

class AuthForm extends Component {
	constructor(props) {
		super(props);

		this.state = { email: "", password: "" };
	}

	handleSubmit(e) {
		const { email, password } = this.state;
		e.preventDefault();
		this.props.handleSubmit({ email, password });
	}

	render() {
		return (
			<div className="row">
				<form className="col s6" onSubmit={this.handleSubmit.bind(this)}>
					<div className="input-field">
						<input
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
							placeholder="Email"
						/>
					</div>
					<div className="input-field">
						<input
							value={this.state.password}
							onChange={(e) => this.setState({ password: e.target.value })}
							placeholder="Password"
							type="password"
						/>
					</div>

					<div className="errors">
						{this.props.errors.map((error) => (
							<div key={error}>{error}</div>
						))}
					</div>

					<button className="btn">Submit</button>
				</form>
			</div>
		);
	}
}

export default AuthForm;
