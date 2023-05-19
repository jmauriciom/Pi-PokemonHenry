import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'


const Card = ({ id , name, img, types }) => {
    return (
        <div className={style.card}>
            <div>
            {name}
            </div>
            <div>
            <Link to={`/detail/${id}`}>
                <img src={img} alt='' />
            </Link>
                
            </div>
            <p>Types: {types}</p>
        </div>

    )
}

export default Card