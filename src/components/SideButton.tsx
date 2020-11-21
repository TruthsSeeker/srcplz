import React, { Component } from 'react'
import styles from '../styles/sidebar.module.css'
import {ReactComponent as SocialIcon} from '../img/sourcerers.svg'
import {ReactComponent as EditIcon} from '../img/edit.svg'
import {ReactComponent as FavoritesIcon} from '../img/favorites.svg'
import {ReactComponent as FolderIcon} from '../img/folder.svg'
import {ReactComponent as SearchIcon} from '../img/search.svg'

export enum ButtonTypes {
    Search,
    Create, 
    Favorites,
    Social,
    Saved,
}

interface SideButtonProps {
    collapsed: boolean,
    type: ButtonTypes
}

export class SideButton extends Component<SideButtonProps, {}>{

    render() {
        return (
            <button className={styles.sidebuttonContainer}>
                {this.getButtonImage()}
                {this.props.collapsed ? null:
                <div className={styles.sidebuttonText}>{this.getButtonName()}</div>}
            </button>
        )
    }

    getButtonImage(): JSX.Element  {
        switch (this.props.type) {
            case ButtonTypes.Search:
                return <SearchIcon/>
            case ButtonTypes.Create:
                return <EditIcon/>
            case ButtonTypes.Favorites:
                return <FavoritesIcon/>
            case ButtonTypes.Social:
                return <SocialIcon/>
            case ButtonTypes.Saved:
                return <FolderIcon/>
            default:
                return <img src={'/search.svg'} alt={"Search Icon"}/>
                
        }
    }

    getButtonName(): String {
        switch (this.props.type) {
            case ButtonTypes.Search:
                return "Search"
            case ButtonTypes.Create:
                return "Create"
            case ButtonTypes.Favorites:
                return "Favorites"
            case ButtonTypes.Social:
                return "Sourcerers"
            case ButtonTypes.Saved:
                return "My source sheets"
            default:
                return ""
        }
    }
}

export default SideButton
