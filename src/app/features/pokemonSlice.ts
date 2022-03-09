import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface PokemonState {
    pokemonData: {
        status: string,
        data: any,
        error: any,
    };
}

const initialState: PokemonState = {
    pokemonData: {
        status: 'sleeping',
        data: null,
        error: null
    }
};

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        return response.data.results;
    }
);

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPokemons.pending.type]: (state, action) => {
            state.pokemonData = {
                status: 'sleeping',
                data: null,
                error: null
            };
        },
        [fetchPokemons.fulfilled.type]: (state, action) => {
            state.pokemonData = {
                status: 'sleeping',
                data: action.payload,
                error: null
            };
        },
        [fetchPokemons.rejected.type]: (state, action) => {
            state.pokemonData = {
                status: 'sleeping',
                data: null,
                error: action.payload
            };
        }
    }
});

export const pokemonReducer = pokemonSlice.reducer;
