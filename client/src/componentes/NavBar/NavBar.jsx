import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.nav}>
            <Link to='/' >
                <button className={styles.link}>Exit</button>
            </Link>
            <SearchBar className={styles.searchBar} />
            <Link to='/create'>
                <button className={styles.link}>Create</button>
            </Link>
        </div>
    )
}