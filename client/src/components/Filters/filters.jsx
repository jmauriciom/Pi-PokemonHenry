import React from "react";
import { useDispatch } from "react-redux";
import style from "./filters.module.css";
import {
    filterByApi,
    filterByDb,
    filterByAttack,
    filterByName,
    filterType,
    getPokemons,
} from "../../redux/actions";


const FilterAndOrder = ({ setPage }) => {


    const dispatch = useDispatch();
    const clickHandlerDb = () => {
        dispatch(filterByDb());
    };
    const clickHandlerApi = () => {
        dispatch(filterByApi());
    };
    const clickHandlerAttack = (e) => {
        dispatch(filterByAttack(e.target.value));
    };
    const clickHandlerName = (e) => {
        dispatch(filterByName(e.target.value))
    }

    const handleTypeFilter = (e) => {
        const selectedType = e.target.value;
        dispatch(filterType(selectedType));
        setPage(1);
    };

    const resetInput = () => { 
        const selects = document.querySelectorAll(".resetSelect");
            selects.forEach((select) => (select.selectedIndex = 0)); //funcion para resetear los selects
        }

    const types = [
        'all',
        'water',
        'fire',
        'grass',
        'electric',
        'fairy',
        'dragon',
        'ghost',
        'bug',
        'normal',
        'rock',
        'ice',
        'poison',
        'ground',
        'psychic',
        'fighting',
        'flying',
        'steel',
        'dark',
        'unknown',
        'shadow',
    ]

    return (
        <div className={style.container}>
            <select className={`${style.select} resetSelect`} onChange={handleTypeFilter}>
                {types.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>

            <button onClick={clickHandlerApi}>Filter Api</button>
            <button onClick={clickHandlerDb}>Filter Create</button>
            <button value="desc" onClick={clickHandlerAttack}>
                -ATCK
            </button>
            <button value="asc" onClick={clickHandlerAttack}>
                +ATCK
            </button>
            <button value="asc" onClick={clickHandlerName}>A-Z</button>
            <button value="desc" onClick={clickHandlerName}>Z-A</button>
            <button onClick={() => {
                setPage(1)
                dispatch(getPokemons())
                dispatch(filterType('all'))
                resetInput()
            }}>Reset</button>
        </div>
    );
};
export default FilterAndOrder;