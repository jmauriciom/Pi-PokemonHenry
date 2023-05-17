import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'


const Card = ({ id , name, img, types }) => {
    return (
        <div className={style.card}>
            <div>
                <Link to={`/detail/${id}`}>name: {name}</Link>
            </div>
            <div>
                <img src={img} alt='' />
            </div>
            <p>Types: {types}</p>
        </div>

    )
}

export default Card