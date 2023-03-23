import React from "react";
import styles from './Loading.modules.css'
import img from '../../Imagenes/loading.ro.gif'

export default function Loading (){
    return(
        <div className={styles.l}>
            <img src={img} alt='' className={styles.loading}/>
            <h1 >Loading...</h1>
        </div>
    )
}