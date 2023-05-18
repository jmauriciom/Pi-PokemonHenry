import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createPokemon } from "../redux/actions";

const usePostPokemon = ({setSelectedPokemons}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        types: [],
});


const handleInputChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    });
};

const handleSelectChange = (e) => {
    setInput({
        ...input,
        types: [...input.types, e.target.value]
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemon(input));
    setInput({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        types: [],
    });
    setSelectedPokemons([]);
    navigate('/home');
    console.log(input)
};


return [input, handleInputChange, handleSelectChange, handleSubmit];
}

export default usePostPokemon;
