// components/Layout.js

import {  NavLink, Outlet } from "react-router-dom";

const Layout = ({isAuthenticated}) => {

    const handleLogout = () => {};

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }>
                                Contact
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }>
                                Dashboard
                            </NavLink>
                        </li> */}
                        {isAuthenticated ? (
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            ) : null}
            {isAuthenticated ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
                    </ul>
                </nav>
            </header>
            <main>
             <Outlet /> {/* Renders the child route component */}
            </main>
        </div>
    );
};

export default Layout;
