'use client'

import { Provider } from 'react-redux';
import { store } from './';
import { useEffect } from 'react';
import { setFavoritesPokemons } from './pokemons/pokemosSlice';

interface Props {
    children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
  const favorite = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
  store.dispatch(setFavoritesPokemons(favorite));
  
  }, [])
  
  return (
    <Provider store={store}>
        { children }
    </Provider>
  )
}

