import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPokemons } from '../app/features/pokemonSlice';

export function Pokemon() {
    const dispatch = useDispatch();
    const pokemonData = useSelector((state: any) => {
        return {
            ...state
        }
    });

    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    useEffect(() => {
    }, [pokemonData]);

    if (!pokemonData?.pokemon?.pokemonData?.data?.length) return null;

    return (
        <div>
            <ul>
                {
                    pokemonData.pokemon.pokemonData.data.map((pokemon: any) => <li>{pokemon.name}</li>)
                }
            </ul>
        </div>
    );
}
