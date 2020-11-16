import React, { Component } from 'react'
import {Switch, Link, Route, BrowserRouter} from 'react-router-dom'
import styles from '../styles/navbar.module.css'


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
                </div>
            </BrowserRouter>
        )
    }
}

export default Navbar