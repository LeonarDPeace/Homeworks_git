import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch(startLoading());

        const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
        const resp = await fetch(url);
        const data = await resp.json();

        dispatch(setPokemons({
            page: page + 1,
            pokemons: data.results,
        }));
    }
}