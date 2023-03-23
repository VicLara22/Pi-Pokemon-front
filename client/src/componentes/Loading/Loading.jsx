import React from "react";
import styles from './Loading.modules.css'
import img from '../../Imagenes/loading.ro.gif'

export default function Loading (){
    return(
        <div >          
          <img src={img} alt='' className={styles.loading}/>
        </div>
    )
}