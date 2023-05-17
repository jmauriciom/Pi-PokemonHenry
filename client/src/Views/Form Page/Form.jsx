import { useState } from 'react'
import  axios  from 'axios'

const Form = () => {

    const [form, setForm] = useState({
        name: '',
        image: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: '',
    })

    const [error, setError] = useState({
        name: '',
        image: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: ''
    })

    const validate = (form) => {
        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const response = axios.post('http://localhost:3001/pokemon', form)
        .then(res => alert(res))
    }


    const changeHandler = (e) => {
        const property = e.target.name
        const value = e.target.value

        validate({...form, [property]: value})
        setForm({...form, [property]: value})
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>NAME: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"></input>
            </div>
            <div>
                <label>IMAGE: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"></input>
            </div>
            <div>
                <label>HP: </label>
                <input type="number" value={form.hp} onChange={changeHandler} name="hp"></input>
            </div>
            <div>
                <label>ATTACK: </label>
                <input type="number" value={form.attack} onChange={changeHandler} name="attack"></input>
            </div>
            <div>
                <label>DEFENSE: </label>
                <input type="number" value={form.defense} onChange={changeHandler} name="defense"></input>
            </div>
            <div>
                <label>SPEED: </label>
                <input type="number" value={form.speed} onChange={changeHandler} name="speed"></input>
            </div>
            <div>
                <label>HEIGHT: </label>
                <input type="number" value={form.height} onChange={changeHandler} name="height"></input>
            </div>
            <div>
                <label>WEIGHT: </label>
                <input type="number" value={form.weight} onChange={changeHandler} name="weight"></input>
            </div>
            <div>
                <label>TYPES: </label>
                <input type="number" value={form.types} onChange={changeHandler} name="types"></input>
                
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}


export default Form