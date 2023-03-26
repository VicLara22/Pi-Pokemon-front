import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, filterPokemonsByTypes, filterCreated, orderByName, filterAttack } from "../../action";
import { Link } from 'react-router-dom'
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import styles from './Home.module.css';
import NavBar from "../NavBar/NavBar";
//import NotFound from "../Ups/NoEncontrado";
import Loading from "../Loading/Loading";

export default function Home() {
  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.pokemons)
  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemons = currentPage * pokemonsPerPage;
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
  const currentPokemons = Array.isArray(allPokemons) && allPokemons?.slice(indexOfFirstPokemons, indexOfLastPokemons);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  } //me ayudo con el renderizado

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch])


  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrder(e.target.value)
  }

  function handleFilterAttack(e) {
    e.preventDefault();
    dispatch(filterAttack(e.target.value))
    setCurrentPage(1);
    setOrder(e.target.value)
  }

  function handleFilterTypes(e) {
    dispatch(filterPokemonsByTypes(e.target.value));
    setCurrentPage(1)
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1)
  }


  return (
    <div className={styles.home}>
       <div className={styles.fondo}>
      <div>
        <NavBar />
      </div>
      <div>
        <div className={styles.box}>
          <label className={styles.label}>Order</label>
          <select onChange={e => handleSort(e)} className={styles.filter}>
            <option value='A-Z'>Ascendant</option>
            <option value='Z-A'>Falling</option>
          </select>
        </div>
        <div className={styles.box}>
        <label className={styles.label}>Attack</label>
          <select onChange={e => handleFilterAttack(e)} className={styles.filter}>
            <option value='strong'>Stronger</option>
            <option value='weak'>Weaker</option>
          </select>
        </div>
        <div className={styles.box}>
        <label className={styles.label}>Types</label>
          <select onChange={e => handleFilterTypes(e)} className={styles.filter}>
            <option value='all'>All types</option>
            <option value='normal'>Normal</option>
            <option value='fighting'>Fighting</option>
            <option value='flying'>Flying</option>
            <option value='poison'>Poison</option>
            <option value='ground'>Ground</option>
            <option value='rock'>Rock</option>
            <option value='bug'>Bug</option>
            <option value='ghost'>Ghost</option>
            <option value='steel'>Steel</option>
            <option value='fire'>Fire</option>
            <option value='water'>Water</option>
            <option value='grass'>Grass</option>
            <option value='electric'>Electric</option>
            <option value='psychic'>Psychic</option>
            <option value='ice'>Ice</option>
            <option value='dragon'>Dragon</option>
            <option value='dark'>Dark</option>
            <option value='fairy'>Fairy</option>
            <option value='unknown'>Unknown</option>
            <option value='shadow'>Shadow</option>
          </select>
        </div>
        <div className={styles.box}>
        <label className={styles.label}>Origin</label>
        <select onChange={e => handleFilterCreated(e)} className={styles.filter}>
          <option value='api'>Existing</option>
          <option value='created'>Created</option>
        </select>
        </div>
        <div className={styles.box}>
        <label className={styles.label}>Refresh</label>
        <button onClick={e => { handleClick(e) }} className={styles.filter}>All Filters</button>
        </div>
        <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado} />
        <div className={styles.pokemonContainer}>
          {
            currentPokemons?.length > 0 
            ?
              currentPokemons?.map((e) =>
                <Link to={`/home/${e.id}`}>
                  <Card id={e.id} name={e.name} img={e.img} types={e.type} key={e.id} />   
                </Link>)
            :
             
            <Loading/>
               }            
        </div>
      </div>
      </div>
    </div>
  )
}
