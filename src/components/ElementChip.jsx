import React, { useEffect, useState } from 'react';
import { Chip, Grid } from '@mui/material';

const ElementChip = ({ element='' }) => {
    const [color, setColor] = useState('');

    const verifyElement = () => {
        switch (element) {
            case 'grass':
                setColor('#DAF7A6');
                break;
            case 'poison':
                setColor('#7D3C98');
                break;
            case 'fire':
                setColor('#FF5733');
                break;
            case 'flying':
                setColor('#D5D8DC');
                break;
            case 'water':
                setColor('#3498DB');
                break;
            case 'bug':
                setColor('#239B56');
                break;
            case 'normal':
                setColor('#95A5A6');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        verifyElement();
    }, []);

    return(
        <Grid item xs={ 12 } sx={{ mt: 1 }}>
            <Chip style={{ backgroundColor: `${color}`}} label={`${element}`} />
        </Grid>
    );
};

export default ElementChip;