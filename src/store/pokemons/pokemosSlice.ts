import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  favorites: {
    [key : string] : SimplePokemon,
  },
}

// const getInitialState = () : PokemonsState => {

//   // if(typeof localStorage === 'undefined') return {};

//   const favorite = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}');
//   return favorite;
// }

const initialState: PokemonsState = {
  favorites:{},
  // ...getInitialState(),
  // '1': { id: '1', name: 'bulbasaur'},
  // '3': { id: '3', name: 'venusaur'},
  // '5': { id: '5', name: 'charmeleon'},
}

const pokemosSlices = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritesPokemons(state , action: PayloadAction<{[key : string] : SimplePokemon}>) {
      state.favorites = action.payload;
    },
    toogleFavorite(state, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;
      const  { id } = pokemon;
      // console.log('toogleFavorite2');

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }
      state.favorites[id] = pokemon;
      // } else {
      //   state.favorites[id] = pokemon;
      // }
      // //TODO: No se debe de hacer en Redux
      // localStorage.setItem('favorites-pokemons', JSON.stringify(state));
      
    }
  }
});

export const { toogleFavorite , setFavoritesPokemons } = pokemosSlices.actions

export default pokemosSlices.reducer