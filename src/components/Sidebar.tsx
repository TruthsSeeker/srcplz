import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styles from '../styles/sidebar.module.css'
import SideButton, { ButtonTypes } from './SideButton'

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <BrowserRouter>
            <div className={collapsed ? styles.collapsedContainer : styles.container}>
                <SideButton collapsed={collapsed} type={ButtonTypes.Search}/>
                <SideButton collapsed={collapsed} type={ButtonTypes.Favorites}/>
                <SideButton collapsed={collapsed} type={ButtonTypes.Social}/>
                <SideButton collapsed={collapsed} type={ButtonTypes.Create}/>
                <SideButton collapsed={collapsed} type={ButtonTypes.Saved}/>
            </div>
        </BrowserRouter>
    )
}
