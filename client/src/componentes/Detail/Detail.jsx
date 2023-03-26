import React from "react";
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetail, restState } from '../../action/index'
import { useDispatch, useSelector } from "react-redux";
import styles from './Detail.module.css'
import Loading from "../Loading/Loading";


export default function Detail() {
    const dispatch = useDispatch()
    let idPokemon = useParams();

    useEffect(() => {
        dispatch(getDetail(idPokemon.id))
    }, [dispatch])

    function handleRestState (){
        dispatch(restState());
    }

    const detail = useSelector((state) => state.detail)


    return (
        <div className={styles.fondo}>
                {
                    detail?.length > 0 ?
                        <div className={styles.container}>
                           <div> 
                           <h1>{detail[0].name[0].toUpperCase() +detail[0].name.slice(1)}</h1>
                            <img src={detail[0].img} alt='img not the found' className={styles.img}/>
                            </div>
                            <div>
                            <h4>Life: {detail[0].life}</h4>
                            <h4>Attack: {detail[0].attack}</h4>
                            <h4>Defense: {detail[0].defense}</h4>
                            <h4>Speed: {detail[0].speed}</h4>
                            <h4>Height: {detail[0].height}</h4>
                            <h4>Weight: {detail[0].weight}</h4>
                         
                            <h3>Types: {detail[0].types?.map(e => {
                                    return <h3 key={e} value={e} className={styles.type}>{e}</h3>
                             })} </h3>

{/*                          {e.toUpperCase()+ e.slice(1)} <h3>Types: {detail[0].types[0].name} </h3>
 */}                              

                            </div>
                        </div> :

                        <Loading />

                }
                <Link to='/home' >
                    <button className={styles.button} onClick={handleRestState}>Back</button>
                </Link>
        </div>
    )

}
