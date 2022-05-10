import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        {props.searchIcon ?
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <button type="button" class="btn btn-dark">🔍</button>
                                </Link>
                            </li> : ""}
                    </ul>
                </div>
            </div>
        </nav>
    )

}
Header.defaultProps = {
    title: "Your Title Here",
    searchIcon: false
}

Header.propTypes = {
    title: PropTypes.string,
    searchIcon: PropTypes.bool
}
