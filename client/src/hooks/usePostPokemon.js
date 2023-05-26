import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { postPokemon } from "../redux/actions";


const usePostPokemon = ({ setSelectedType }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });

    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };

    const handleSelectChange = (event) => {
        setInput({
            ...input,
            types: [...input.types, event.target.value]
        })
    };
    const handleDeleteType  = (type) => {
        setInput({
            ...input,
            types: input.types.filter(el => el !== type)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postPokemon(input))
        setInput({
            name: "",
            img: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        });
        setSelectedType([]);
        history.push('./home');
    };

    return [input, handleInputChange, handleSelectChange, handleSubmit, handleDeleteType];

};

export default usePostPokemon;