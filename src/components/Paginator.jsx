import React from 'react';
import { Stack } from '@mui/system';
import { Grid, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/slices/pokemon/pokemonSlice';

const Paginator = () => {
    const dispatch = useDispatch();
    const { page } = useSelector(state => state.pokemons);

    const handleChange = (event, value) => {
        event.preventDefault();
        dispatch(setPage(value));
    };

    return (
        <Grid container
            direction='row'
            justifyContent='center'
        >
            <Grid item sx={{ mt: 4 }}>
                <Stack spacing={2}>
                    <Pagination
                        color="primary"
                        count={55}
                        page={page}
                        onChange={handleChange}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Paginator;
