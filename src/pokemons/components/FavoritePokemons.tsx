'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid"
// import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";


export const FavoritePokemons = () => {

    const pokemonsState = useAppSelector(state => state.pokemons.favorites);
    const favoritePokemons = Object.values(pokemonsState);

    // const [pokemons , setPokemons ] = useState(favoritePokemons);

    // useEffect(() => {
    // //   console.log({favoritePokemons});
    // setPokemons(favoritePokemons);
    
    // }, [favoritePokemons])
    

    return (
        <>
            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (<PokemonGrid pokemons={favoritePokemons} />)
            }
        </>
    )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center p-3">

            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay pokemones favoritos</span>

        </div>
    );
}