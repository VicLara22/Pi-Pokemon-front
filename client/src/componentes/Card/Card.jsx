import React from "react";
import styles from './Card.module.css';

export default function Card({name, img, types, id}){
    return(
        <div key={id} className={styles.card}>
            <h2>{name}</h2>
            <img src={img} alt='img not found' />
            <div>
                 <h3 className={styles.type} >{types}</h3>
            </div>
          
        </div>
    )
}
