import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
        pokemonSelected: null
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
    },
});

export const {
    startLoadingPokemons,
    setPokemons,
    finishLoadingPokemons
} = pokemonSlice.actions;
