import { Grid, Typography } from '@mui/material';
import React from 'react';

const StatsViewer = ({stat}) => {
    const { name } = stat.stat;
    const { base_stat } = stat;

    return (
        <div>
            <Grid container direction={'row'}>
                <Grid item xs={ 11 }>
                    <Typography xs={{  }}>
                        {name.toUpperCase()}
                    </Typography>
                </Grid>
                <Grid item xs={ 1 }>
                    {base_stat}
                </Grid>
            </Grid>
        </div>
    );
};

export default StatsViewer;