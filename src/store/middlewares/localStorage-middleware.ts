import { Action , Middleware} from '@reduxjs/toolkit';
import { RootState } from "..";


export const localStorageMiddleware : Middleware = 
(store) => (next) => (action)   =>{

    next(action);
    // console.log('toogleFavorite1');

    const { pokemons } = store.getState() as RootState;
    const { type } = action as Action;
    
    if (type === "pokemons/toogleFavorite") {

        localStorage.setItem("favorites-pokemons", JSON.stringify(pokemons.favorites));
    }
};
