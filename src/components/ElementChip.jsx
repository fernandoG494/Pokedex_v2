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
                setColor('#4FC3F7');
                break;
            case 'water':
                setColor('#3498DB');
                break;
            case 'bug':
                setColor('#239B56');
                break;
            case 'normal':
                setColor('');
                break;
            case 'electric':
                setColor('#F4F70C');
                break;
            case 'ground':
                setColor('#A04000');
                break;
            case 'fairy':
                setColor('#F08080');
                break;
            case 'fighting':
                setColor('#F44336');
                break;
            case 'psychic':
                setColor('#CE93D8');
                break;
            case 'rock':
                setColor('#8D6E63');
                break;
            case 'steel':
                setColor('#9E9E9E');
                break;
            case 'ice':
                setColor('#B2EBF2');
                break;
            case 'ghost':
                setColor('#9FA8DA');
                break;
            case 'dragon':
                setColor('#D1C4E9');
                break;
            case 'dark':
                setColor('#616161');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        verifyElement();
    }, [element]);
    
    return(
        <Grid item xs={ 12 } sx={{ mt: 1 }}>
            <Chip style={{ backgroundColor: `${color}`}} label={`${element}`} />
        </Grid>
    );
};

export default ElementChip;