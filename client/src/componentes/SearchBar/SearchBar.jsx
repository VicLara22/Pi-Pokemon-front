import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../action/index";
/* import  validateName from '../PokemonCreated/Validation'; */
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value.toLowerCase());
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNamePokemons(name))
        setName('')
    }

    return (
        <div className={styles.container}>
            <input
                type='text'
                placeholder='Search pokemon...'
                className={styles.input}
                onChange={(e) => handleInputChange(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)} className={styles.button}>&#128269;</button>
        </div>
    )

}