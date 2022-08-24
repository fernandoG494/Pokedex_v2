import { pokeApi } from '../api/pokemonsApi';
import React, { useEffect, useState } from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import { firstToUpperCase } from '../helpers/formatHelpers';
import ElementChip from './ElementChip';
import { useDispatch } from 'react-redux';
import { setPokemonData } from '../store/slices/pokemon/pokemonSlice';

const PokeCard = ({ pokemon, setOpen }) => {
    const [{id, name, types, sprites, abilities, base_experience,
        height, moves, stats, weight}, setPokemonInfo] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(){
            const response = await pokeApi(pokemon.url.slice(26));
            setPokemonInfo(response.data);
        }
        fetchData();
    }, []);

    const handlePokemonView = () => {
        setOpen(true);
        dispatch(setPokemonData({
            id,
            name,
            types,
            sprites,
            abilities, base_experience,
            height, moves, stats, weight
        }));
    };

    return (
        <Grid item>
            <Grid container>
                <Grid item>
                    <Card
                        variant="outlined"
                        sx={{
                            bgcolor: 'background.paper',
                            boxShadow: 1,
                            borderRadius: 2,
                            p: 2,
                            minWidth: 300,
                        }}
                    >
                        <Grid container>
                            <Grid item xs={ 9 }>
                                <Typography
                                    sx={{ fontSize: 20 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    { firstToUpperCase(name) }
                                </Typography>
                            </Grid>
                            <Grid item xs={ 3 }>
                                <Typography
                                    sx={{ fontSize: 20 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    #{ id }
                                </Typography>
                            </Grid>

                            <Grid item xs={ 8 }>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                    component={'span'}
                                >
                                    Types
                                    {types?.map((element) => {
                                        return (
                                            <ElementChip element={element.type.name} key={element.type.name} />
                                        );
                                    })}
                                </Typography>
                            </Grid>

                            <Grid item xs={ 4 }>
                                <img src={sprites?.front_default} />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row-reverse"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid
                                item
                                sx={{ mt: 2 }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={ handlePokemonView }
                                >
                                    More info
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PokeCard;
