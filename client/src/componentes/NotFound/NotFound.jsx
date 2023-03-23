import React from "react";
import img from '../../Imagenes/Loading.gif'

export default function NotFound () {
    return(
        <div>
            <h1>404 - SORRY, THE PAGE NOT FOUND</h1>
            <img src={img} alt=''/>
        </div>
    )
}