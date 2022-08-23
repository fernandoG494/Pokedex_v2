import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from './components/Banner';
import PokeViewer from './components/PokeViewer';
import { getPokemons } from './store/slices/pokemon/pokemonThunks';

const pokemonsNum = 21;

function App() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const { page } = useSelector(state => state.pokemons);
    
    useEffect(() => {
        if(search.length === 0){
            dispatch(getPokemons(page, pokemonsNum));
        }
    }, []);

    return (
        <div>
            <Banner setSearch={ setSearch }/>

            <Grid container sx={{ mt: 2 }}>
                <PokeViewer />
            </Grid>

        </div>
    );
};

export default App;
