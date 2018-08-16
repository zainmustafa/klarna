import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "actions/index";

class Login extends PureComponent {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());

        this.state = {
            username: "",
            password: "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        login: PropTypes.func.isRequired
    };

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        // const { dispatch } = this.props;
        if (username && password) {
            this.props.login({ username, password });
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        const { isLoading } = this.props;
        return (
            <div key="Private" className="app__auth app__route">
                <div className="app__container">
                    <div className="auth__container">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div
                                className={`form-group${
                                    submitted && !username ? " has-error" : ""
                                }`}
                            >
                                <label htmlFor="username">Register</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                />
                                {submitted &&
                                    !username && (
                                        <div className="help-block">
                                            Email is required
                                        </div>
                                    )}
                            </div>
                            <div
                                className={`form-group${
                                    submitted && !password ? " has-error" : ""
                                }`}
                            >
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                />
                                {submitted &&
                                    !password && (
                                        <div className="help-block">
                                            Password is required
                                        </div>
                                    )}
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                                {isLoading && (
                                    <img
                                        alt="img"
                                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                    />
                                )}
                                <Link to="/register" className="btn btn-link">
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {
        user: { isLoading }
    } = state;
    return {
        isLoading
    };
}

const mapDispatchToProps = {
    login
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
