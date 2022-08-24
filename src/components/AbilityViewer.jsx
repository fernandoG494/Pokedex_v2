import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { pokeApi } from '../api/pokemonsApi';
import { firstToUpperCase } from '../helpers/formatHelpers';

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

    const entry = abilityData?.effect_entries?.find(entry => {
        return entry.language.name === 'en'
    });

    return (
        <div>
            <Grid
                container
                direction='column'
            >
                <Grid item sm={ 8 }>
                    <Typography>
                        {firstToUpperCase(name)}:
                    </Typography>
                </Grid>
                <Grid item sm={ 8 }>
                    <Typography
                        sx={{ fontStyle: 'italic' }}
                    >
                        {entry?.effect}
                    </Typography>
                </Grid>
                <hr />
            </Grid>
        </div>
    );
};

export default AbilityViewer;