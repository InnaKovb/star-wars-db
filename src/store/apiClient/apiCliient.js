import { heroesRequest, heroesReceived, heroesRequestFailed, filmsRequest, filmsReceived, filmsRequestFailed, planetsRequest, planetsReceived, planetsRequestFailed, starshipsRequest, starshipsReceived, starshipsRequestFailed, setCurrentPage } from '../entitiesSlice';
import {API_URL} from '../../components/constants/generalConstants';

// это все мои экшены

export const heroesListRequest = (page = 1) => async (dispatch) => {
    try {
        dispatch(heroesRequest())
        const heroesList = await fetch(`${API_URL}/people/?1=&page=${page}`).then(response => response.json());
        console.log(heroesList);
        dispatch(heroesReceived(heroesList));
        dispatch(setCurrentPage(page));
        
    } catch (error) {
        return dispatch(heroesRequestFailed(error))
    }
};

export const filmsListRequest = (page = 1) => async (dispatch) => {
    try {
        dispatch(filmsRequest())
        const filmsList = await fetch(`${API_URL}/films/?1=&${page}`).then(response => response.json());
        console.log(filmsList);
        dispatch(filmsReceived(filmsList));
        dispatch(setCurrentPage(page));
        
    } catch (error) {
        return dispatch(filmsRequestFailed(error))
    }
};

export const planetsListRequest = (page = 1) => async (dispatch) => {
    try {
        dispatch(planetsRequest())
        const planetsList = await fetch(`${API_URL}/planets/?1=&${page}`).then(response => response.json());
        console.log(planetsList);
        dispatch(planetsReceived(planetsList));
        dispatch(setCurrentPage(page));

        
    } catch (error) {
        return dispatch(planetsRequestFailed(error))
    }
};

export const starshipsListRequest = (page = 1) => async (dispatch) => {
    try {
        dispatch(starshipsRequest())
        const starshipsList = await fetch(`${API_URL}/starships/?1=&${page}`).then(response => response.json());
        console.log(starshipsList);
        dispatch(starshipsReceived(starshipsList));
        dispatch(setCurrentPage(page));
        
    } catch (error) {
        return dispatch(starshipsRequestFailed(error))
    }
};