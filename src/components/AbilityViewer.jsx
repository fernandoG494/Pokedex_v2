import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { pokeApi } from '../api/pokemonsApi';
import { firstToUpperCase } from '../helpers/formatHelpers';
import { findEnglishDescription } from '../helpers/searchHelpers';

const AbilityViewer = ({ ability }) => {
    const { name, url } = ability;
    const [abilityData, setAbilityData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await pokeApi(url.slice(26));
            setAbilityData(response.data);
        }
        fetchData();
    }, [ability]);

    return (
        <div>
            <Grid
                container
                direction='column'
            >
                <Grid item sm={ 8 }>
                    <Typography>
                        {firstToUpperCase(name)}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default AbilityViewer;