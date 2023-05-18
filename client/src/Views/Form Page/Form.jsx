import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const infoTypes = useSelector((state) => state.infoType);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [form, setForm] = useState({
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


  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "types") {
      const selectedTypes = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
      setForm({ ...form, [property]: selectedTypes });
    } else {
      setForm({ ...form, [property]: value });
    }
  };

  // const validate = (form) => {

  // }

  const submitHandler = (event) => {
    event.preventDefault();
    // evito que se recarge la pagina al usar el boton submit
    const response = axios
      .post("http://localhost:3001/pokemon", form)
      .then((res) => alert(res));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>

      <div>
        <label>Image: </label>
        <input
          type="text"
          value={form.img}
          onChange={changeHandler}
          name="img"
        />
      </div>

      <div>
        <label>Hp: </label>
        <input
          type="number"
          value={form.hp}
          onChange={changeHandler}
          name="hp"
        />
      </div>

      <div>
        <label>Attack: </label>
        <input
          type="number"
          value={form.attack}
          onChange={changeHandler}
          name="attack"
        />
      </div>

      <div>
        <label>Defense: </label>
        <input
          type="number"
          value={form.defense}
          onChange={changeHandler}
          name="defense"
        />
      </div>

      <div>
        <label>Speed: </label>
        <input
          type="number"
          value={form.speed}
          onChange={changeHandler}
          name="speed"
        />
      </div>

      <div>
        <label>Height: </label>
        <input
          type="number"
          value={form.height}
          onChange={changeHandler}
          name="height"
        />
      </div>

      <div>
        <label>Weight: </label>
        <input
          type="number"
          value={form.weight}
          onChange={changeHandler}
          name="weight"
        />

      </div>
      <div>
      <label>Types: </label>
      <select
          multiple
          value={form.types}
          onChange={changeHandler}
          name="types"
        >
          {infoTypes.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
    </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
