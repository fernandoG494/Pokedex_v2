import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Slide, Typography } from '@mui/material';
import { firstToUpperCase } from '../helpers/formatHelpers';
import ElementChip from './ElementChip';
import { removeSelectedPokemon } from '../store/slices/pokemon/pokemonSlice';
import StatsViewer from './StatsViewer';
import AbilityViewer from './AbilityViewer';
import MoveViewer from './MoveViewer';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PokeViewer = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const pokemon = useSelector(state => state.pokemons.pokemonSelected);
    const { isLoading, pokemons } = useSelector(state => state.pokemons);

    const handleClose = () => {
        setOpen(false);
        dispatch(removeSelectedPokemon());
    };
    
    return (
        <>
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
                        {pokemons.map((pokemonSelection) => 
                            <PokeCard
                                key={`${pokemonSelection.id + pokemonSelection.name}`}
                                pokemon={pokemonSelection}
                                setOpen={setOpen}
                            />
                        )}
                    </Grid>
                )}
            </Grid>

            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        <Grid
                            container
                            direction={'row'}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={ 9 }>
                                <Typography
                                    sx={{ fontSize: 22, fontWeight: 'bold' }}
                                >
                                    
                                    {firstToUpperCase(pokemon.name)}
                                </Typography>
                            </Grid>
                            <Grid item xs={ 3 }>
                                <Typography
                                    sx={{ fontSize: 16 }}
                                >
                                    {pokemon.id ? (
                                        <>Id: #{pokemon.id}</>
                                    ) :(
                                        ''
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                    </DialogTitle>
                    <DialogContent>
                        <Grid
                            container
                            direction={'row'}
                        >
                            <Grid item xs={ 8 } sx={{ width: 300 }}>
                                <Typography
                                    sx={{ fontSize: 16, fontWeight: 'bold' }}
                                >
                                    Pokemon types:
                                </Typography>
                                {pokemon.types ?
                                    pokemon.types.map(({type}) => {
                                        return (
                                            <Grid item sx={{ ml: 1}}>
                                                <ElementChip element={type.name} key={type.name} />
                                            </Grid>
                                        );
                                    })
                                    : ''
                                }
                            </Grid>
                            
                            <Grid item xs={ 4 }>
                                {pokemon.sprites ? (
                                    <img src={`${pokemon.sprites.front_default}`} width="100%" height="100%"/>
                                ) : (
                                    ''
                                )}
                            </Grid>

                            <Grid item xs={ 12 }>
                                <Typography
                                    sx={{ fontSize: 16, fontWeight: 'bold' }}
                                >
                                    Base stats:
                                </Typography>
                                {pokemon.stats ? (
                                    pokemon.stats.map((stat) => {
                                        return <StatsViewer stat={stat} />
                                    })
                                ) : (
                                    ''
                                )}
                            </Grid>

                            <Grid item xs={ 12 } sx={{ mt: 1 }}>
                                <Typography
                                    sx={{ fontSize: 16, fontWeight: 'bold' }}
                                >
                                    Abilities:
                                </Typography>
                                {pokemon.abilities ? (
                                    pokemon.abilities.map(({ability}) => {
                                        return <AbilityViewer ability={ability} />
                                    })
                                ) : (
                                    ''
                                )}
                            </Grid>

                            <Grid item xs={ 12 } sx={{ mt: 1 }}>
                                <Typography
                                    sx={{ fontSize: 16, fontWeight: 'bold' }}
                                >
                                    Available moves:
                                </Typography>
                                <Grid container direction='row'>
                                    <Grid item xs={ 5 }>
                                        <Typography
                                            sx={{ fontSize: 16, fontWeight: 'bold' }}
                                        >
                                            Name
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={ 3 }>
                                        <Typography
                                            sx={{ fontSize: 16, fontWeight: 'bold' }}
                                        >
                                            Accurancy
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={ 4 }>
                                    <Typography
                                            sx={{ fontSize: 16, fontWeight: 'bold' }}
                                        >
                                            Types
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {pokemon.moves ? (
                                    pokemon.moves.map(({move}) => {
                                        return <MoveViewer move={move} />
                                    })
                                ) : (
                                    ''
                                )}
                            </Grid>
                            
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};

export default PokeViewer;
