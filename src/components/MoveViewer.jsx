import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { pokeApi } from '../api/pokemonsApi';
import { divideByChar } from '../helpers/formatHelpers';
import ElementChip from './ElementChip';

const MoveViewer = ({ move }) => {
    const { name, url } = move;
    const [moveInfo, setMoveInfo] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await pokeApi(url.slice(26));
            setMoveInfo(response.data);
        }
        fetchData();
    }, []);

    return (
        <Grid
            container
            direction='row'
        >
            <Grid item xs={ 5 }>
                <Typography>
                    {divideByChar(name, '-')}
                </Typography>
            </Grid>
            <Grid item xs={ 3 }>
                <Typography>
                    {moveInfo?.accuracy}
                </Typography>
            </Grid>
            <Grid item xs={ 4 }>
                {moveInfo.type ? (
                    <ElementChip element={moveInfo.type.name} />
                ) : (
                    ''
                )}
            </Grid>
        </Grid>
    );
};

export default MoveViewer;
