import React from "react";
import img from '../../Imagenes/loading.ro.gif';
import styles from './MessageNotFound.module.css';
import {Link} from 'react-router-dom'

export default function MessageNotFound () {
    return (
        <div>
            <img src={img} alt='img not found' />
            <h2>Sorry, that Pokemon does not exist...</h2>
            <Link to='/home' >
                <button className={styles.buttonBack} >Back</button>
            </Link>
        </div>
    )
}