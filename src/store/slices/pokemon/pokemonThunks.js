import { pokeApi } from '../../../api/pokemonsApi';
import { startLoadingPokemons, setPokemons } from './pokemonSlice';

export const getPokemons = (page = 0, pokemonNum) => {
    return async(dispatch) => {
        dispatch(startLoadingPokemons());

        const { data } = await pokeApi.get(`/pokemon?limit=${pokemonNum}&offset=${page * pokemonNum}`);

        dispatch(setPokemons({
            pokemons: data.results,
            page: page + 1
        }));
    };
};