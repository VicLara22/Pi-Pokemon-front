import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { postPokemons, getTypes } from '../../action/index';
import { useDispatch, useSelector } from "react-redux";
import styles from '../PokemonCreated/PokemonCreated.module.css'
import validate from './Validation';

export default function PokemonCreated() {
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.types)
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        life: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        img: '',
        type: ['']
    })


    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

   
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e) {
        setErrors(validate({
            ...input,
            type: [...input.type, e.target.value]
        }))
         if (input.type.length < 2) {
            setInput({
                ...input,
                type: [...input.type, e.target.value]
            })
        } else {
            alert("You can only choose 2 types")
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postPokemons(input))
        alert('Pokemon successfully created!');
        setInput({
            name: '',
            life: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            img: '',
            type: ['']
        })
        history.push('/home') //redirigir
    }

    function handleDelete(e) {

        setErrors(validate({
            ...input,
            type: input.type.filter(t => t !== e)
        }))
        setInput({
            ...input,
            type: input.type.filter(t => t !== e)
        })
    }


    return (
        <div className={styles.fondo}>
            <Link to='/home' >
                <button className={styles.buttonBack} >Back</button>
            </Link>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <div>
                    <label key='name'>Name: </label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        placeholder='Write a name...'
                        onChange={handleChange}
                        className={errors.name && styles.danger}
                    />
                    {errors.name && <p className={styles.danger}>{errors.name}</p>}
                </div>
                <div>
                    <label key='life'>Life: </label>
                    <input
                        type='number'
                        min='0'
                        max='100'
                        value={input.life}
                        name='life'
                        onChange={handleChange}
                        className={errors.life && styles.danger}
                    />
                    {errors.life && <p className={styles.danger}>{errors.life}</p>}
                </div>
                <div>
                    <label key='attack'>Attack: </label>
                    <input
                        type='number'
                        min='0'
                        max='100'
                        value={input.attack}
                        name='attack'
                        onChange={handleChange}
                        className={errors.attack && styles.danger}
                    />
                    {errors.attack && <p className={styles.danger}>{errors.attack}</p>}
                </div>
                <div>
                    <label key='defense'>Defense: </label>
                    <input
                        type='number'
                        min='0'
                        max='100'
                        value={input.defense}
                        name='defense'
                        onChange={handleChange}
                        className={errors.defense && styles.danger}
                    />
                    {errors.defense && <p className={styles.danger}>{errors.defense}</p>}
                </div>
                <div>
                    <label key='speed'>Speed: </label>
                    <input
                        type='number'
                        min='0'
                        max='100'
                        value={input.speed}
                        name='speed'
                        onChange={handleChange}
                        className={errors.speed && styles.danger}
                    />
                    {errors.speed && <p className={styles.danger}>{errors.speed}</p>}
                </div>
                <div>
                    <label key='height'>Height: </label>
                    <input
                        type='number'
                        min='0'
                        max='100'
                        value={input.height}
                        name='height'
                        onChange={handleChange}
                        className={errors.height && styles.danger}
                    />
                    {errors.height && <p className={styles.danger}>{errors.height}</p>}
                </div>
                <div>
                    <label key='weight'>Weight: </label>
                    <input
                        type='number'
                        min='0'
                        max='100'
                        value={input.weight}
                        name='weight'
                        onChange={handleChange}
                        className={errors.weight && styles.danger}
                    />
                    {errors.weight && <p className={styles.danger}>{errors.weight}</p>}
                </div>
                <div>
                    <label key='img'>Imagen: </label>
                    <input
                        type='url'
                        value={input.img}
                        name='img'
                        placeholder='Put a picture link...'
                        onChange={handleChange}
                        className={errors.img && styles.danger}
                    />
                    {errors.img && <p className={styles.danger}>{errors.img}</p>}
                </div>
                <div>
                    <label key='type'>Types:</label>
                    <select onChange={e => handleSelect(e)}>

                        {
                            types?.map(t => (<option key={t.id}  value={t.name} name='type'>{t.name}</option>))
                        }
                    </select>
                    {errors.type && <p className={styles.danger}>{errors.typs}</p>}

                    <div>
                        {input?.type?.map(e =>
                            <div>
                                <div>
                                    <p className={styles.type}>{e}</p>
                                    <button key='botonX' className={styles.botonX} onClick={() => handleDelete(e)}>X</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div>
                <button  className={styles.buttonCreate} disabled={errors.name || errors.life || errors.strength || errors.speed || errors.defense || errors.height || errors.weight || errors.type || errors.img || input.name === "" ? true : false}>Create your Pokemon</button>

                </div>
            </form>
            </div>
       
    )
}
