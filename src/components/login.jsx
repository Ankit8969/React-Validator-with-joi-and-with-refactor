import React from "react";
import "../index.css";
import Input from "./common/input";

class Login extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: { username: "", password: "" },
  };

  // We can also use the array of error but in case of array if we want to find the username we have to use
  // errors.find(e => e.name === 'username') like this
  //but in case of object we can directly access the like this errors['username'] that's why we are using errors of object.

  validate = () => {
    const errors = {};
    if (this.state.account["username"] === "")
      errors.username = "Username is Required";
    if (this.state.account["password"] === "")
      errors.password = "Password is Required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // call the server
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
