import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import SearchBar from "../../components/Searchbar/searchbar";


const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    }, [])
    

    return (
        <>
            <h1>Esta es la vista de Home</h1>
            <SearchBar/>
            <CardsContainer />
        </>
    );

}

export default Home