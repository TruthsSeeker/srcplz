import React, { Component } from 'react'
import {Switch, Link, Route, BrowserRouter} from 'react-router-dom'
import styles from '../styles/navbar.module.css'
import LoginAccountButton from './login-account-button'


class Navbar extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className={styles.navbar}>
                    <Link to="/">
                        <div className={styles.SRCPLZPlaceholder}>
                            SRCPLZ
                        </div>
                    </Link>
                    <Route path="/mission" children={props => (
                        <Link to="/mission" className={props.match ? styles.activeLink: styles.standardLink}>
                            Mission Statement
                        </Link>
                    )}/>
                    <Route path="/blog" children={props => (
                        <Link to="/blog" className={props.match ? styles.activeLink: styles.standardLink}>
                            Blog
                        </Link>
                    )}/>
                    <Route path="/contribute" children={props => (
                        <Link to="/contribute" className={props.match ? styles.activeLink: styles.standardLink}>
                                Support Us
                        </Link>
                    )}/>
                    <Route path="/contact" children={props => (
                        <Link to="/contact" className={props.match ? styles.activeLink: styles.standardLink}>
                                Contact Us
                        </Link>
                    )}/>
                    <LoginAccountButton/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Navbar