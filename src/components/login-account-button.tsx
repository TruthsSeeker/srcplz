import React, { Component } from 'react'
import { AuthContext } from '../utils/context'
import styles from '../styles/navbar.module.css'

export default class LoginAccountButton extends Component {
    static contextType = AuthContext
    context!: React.ContextType<typeof AuthContext>

    render() {
        return (
            <div className={styles.accountButton}>
                {this.context.isLoggedIn 
                ? <div onClick={e => this.context.logout()}> Logged In </div>
                : <div onClick={e => this.context.login()}> Log In </div>}  
            </div>
        )
    }
}