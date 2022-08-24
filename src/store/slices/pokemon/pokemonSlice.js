import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 1,
        pokemons: [],
        isLoading: false,
        pokemonSelected: []
    },
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.pokemons = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
        finishLoadingPokemons: (state) => {
            state.isLoading = false;
        },
        setPokemonData: (state, action) => {
            state.pokemonSelected = action.payload;
        },
        removeSelectedPokemon: (state) => {
            state.pokemonSelected = [];
        },
        setPage: (state, action) => {
            console.log('>>>', action);
            state.page = action.payload;
        },
    },
});

export const {
    setPage,
    setPokemons,
    setPokemonData,
    startLoadingPokemons,
    finishLoadingPokemons,
    removeSelectedPokemon,
} = pokemonSlice.actions;
