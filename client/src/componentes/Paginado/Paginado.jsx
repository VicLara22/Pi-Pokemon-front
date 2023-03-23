import React from "react";
import styles from './Paginado.module.css';


//declaro mi paginado             //me traigo com props del otro comp
export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
    const pageNumbers = [];//arreglo de numeros

    for (let i = 0; i < Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i+1)//recorremos el arr que resulta el dividir todos los pokemons por los pers por pag 
    }

    return (
        <nav className={styles.paginado}>
         
                {pageNumbers &&
                pageNumbers.map(number =>  {
                  return ( 
                        <a key={number} className={styles.active} onClick={()=>paginado(number)}> {number}</a>
                    )
                })}
            
        </nav>
    )
}