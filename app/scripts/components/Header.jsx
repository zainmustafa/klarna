import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { logOut } from "actions";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        playListCount: PropTypes.number.isRequired,
        user: PropTypes.object.isRequired
    };

    handleClickLogout = () => {
        const { dispatch } = this.props;

        dispatch(logOut());
    };

    render() {
        const { user, playListCount } = this.props;

        const loginBtn = (
            <NavLink
                to="/login"
                className="app__header__link"
                activeClassName="is-active"
                exact
            >
                <div className="app__header__login btn btn-sm btn-primary btn-icon">
                    <i
                        className={cx({
                            "i-circle-o-notch i-spin": user.isRunning,
                            "i-sign-in": !user.isRunning
                        })}
                    />
                    <span>Login</span>
                </div>
            </NavLink>
        );

        const logoutBtn = (
            <button
                className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
                onClick={this.handleClickLogout}
            >
                <i className="i-sign-out" />
                <span>logout</span>
            </button>
        );

        return (
            <header className="app__header">
                <div className="app__container">
                    <ul className="app__header__menu">
                        <li>
                            <NavLink
                                to="/"
                                className="app__header__link"
                                activeClassName="is-active"
                                exact
                            >
                                <span
                                    style={{ color: "red", fontWeight: "bold" }}
                                >
                                    NETFLIX
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/private"
                                className="app__header__link"
                                activeClassName="is-active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            {user.isAuthenticated ? (
                                <NavLink
                                    to="/playlist"
                                    className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
                                    activeClassName="is-active"
                                    exact
                                >
                                    <i className="i-playlist" />
                                    <span>PLAYLIST: {playListCount}</span>
                                </NavLink>
                            ) : (
                                <span />
                            )}
                            {user.isAuthenticated ? logoutBtn : loginBtn}
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
