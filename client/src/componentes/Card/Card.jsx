import React from "react";
import styles from './Card.module.css';

export default function Card({name, img, type, id}){
    return(
        <div key={id} className={styles.card}>
            <h2>{name[0].toUpperCase() + name.slice(1)}</h2>
            <img src={img} alt='img not found' />
            <div>
                {type?.map(e => {
                    return <h4 key={e} value={e} className={styles.type}>{e[0].toUpperCase() + e.slice(1)}</h4>
                })}
            
            </div>
          
        </div>
    )
}