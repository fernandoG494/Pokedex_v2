import React from 'react';
import PokeCard from './PokeCard';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';

const PokeViewer = () => {
    const { isLoading, pokemons } = useSelector(state => state.pokemons);
    
    return (
        <Grid
            container
            sx={{ ml: 1, mb: 2 }}
        >
            {isLoading ? (
                <Grid container
                    direction='row'
                    justifyContent='center'
                >
                    <CircularProgress color='info' />
                </Grid>
            ) : (
                <Grid
                    container
                    spacing={ 2 }
                    direction='row'
                    justifyContent='center'
                >
                    {pokemons.map((pokemon) => 
                        <PokeCard key={`${pokemon.id + pokemon.name}`} pokemon={pokemon} />
                    )}
                </Grid>
            )}
        </Grid>
    );
};

export default PokeViewer;
