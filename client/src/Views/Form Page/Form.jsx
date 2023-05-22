import { useEffect, useState } from "react";
import usePostPokemon from "../../hooks/usePostPokemon";
import useGetTypes from "../../hooks/useGetTypes";
import validation from "./validatePokemonForm";
import style from "./form.module.css";


const Form = () => {
  const [selectedType, setSelectedType] = useState([]);
  const [input, handleInputChange, handleSelectChange, handleSubmit] =
    usePostPokemon({ setSelectedType });
  const types = useGetTypes();

  const handleTypeSelection = (event) => {
    const selectedTypesName = event.target.value;
    const selectedTypes = types.find((t) => t.name === selectedTypesName);
    if (selectedType) {
      setSelectedType([...selectedType, selectedTypes]);
    }
  };

  const handleTypeRemoval = (typeName) => {
    const updatedSelectedTypes = selectedType.filter(
      (type) => type.name !== typeName
    );
    setSelectedType(updatedSelectedTypes);
  };

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validation(input));
  }, [input])

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.formcontainer}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={input.name}
          onChange={handleInputChange}
          name="name"
        />
        <div className={style.errors}>
          {errors.name && <span>{errors.name}</span>}
        </div>
      </div>

      <div className={style.formcontainer}>
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          value={input.img}
          onChange={handleInputChange}
          name="img"
        />
        <div className={style.errors}>
          {errors.img && <span>{errors.img}</span>}
        </div>
      </div>

      <div className={style.formcontainer}>
        <label>hp: </label>
        <input
          type="number"
          min={0}
          max={255}
          value={input.hp}
          onChange={handleInputChange}
          name="hp"
        />
        <div className={style.errors}>
          {errors.hp && <span>{errors.hp}</span>}
        </div>
      </div>

      <div className={style.formcontainer}>
        <label>Attack: </label>
        <input
          type="number"
          min={0}
          max={255}
          value={input.attack}
          onChange={handleInputChange}
          name="attack"
        />
        <div className={style.errors}>
          {errors.attack && <span>{errors.attack}</span>}
        </div>
      </div>

      <div className={style.formcontainer}>
        <label>Defense: </label>
        <input
          type="number"
          min={0}
          max={255}
          value={input.defense}
          onChange={handleInputChange}
          name="defense"
        />
        <div className={style.errors}>
          {errors.defense && <span>{errors.defense}</span>}
        </div>
      </div>

      <div className={style.formcontainer}>
        <label>Speed: </label>
        <input
          type="number"
          min={0}
          max={255}
          value={input.speed}
          onChange={handleInputChange}
          name="speed"
        />
        <div className={style.errors}>
          {errors.speed && <span>{errors.speed}</span>}
        </div>
      </div>

      <div className={style.formcontainer}>
        <label>Height: </label>
        <input
          type="number"
          min={0}
          max={255}
          value={input.height}
          onChange={handleInputChange}
          name="height"
        />
        <div className={style.errors}>
          {errors.height && <span>{errors.height}</span>}
        </div>
      </div>

      <div className={style.formcontainer}>
        <label>Weight: </label>
        <input
          type="number"
          min={0}
          max={255}
          value={input.weight}
          onChange={handleInputChange}
          name="weight"
        />
        <div className={style.errors}>
          {errors.weight && <span>{errors.weight}</span>}
        </div>
      </div>

      <div className={style.formcontainer}>
        <label htmlFor="types">Types: </label>
        <select
          name="types"
          onChange={(e) => {
            handleSelectChange(e);
            handleTypeSelection(e);
          }}
          multiple
        >
          {types.map((t, i) => (
            <option key={i} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      {selectedType.map((type, index) => (
        <li key={index} >
          {type.name}
          <span
            onClick={() => handleTypeRemoval(type.name)}
          >
            ❌
          </span>
        </li>
      ))}
      <button type="submit" disabled={Object.keys(errors).length > 0}>SUBMIT</button>
    </form>
  );
};

export default Form;