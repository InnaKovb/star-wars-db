import { createSlice } from '@reduxjs/toolkit';

export const entitiesSlice = createSlice ({
    name: "starWarsStore",
    initialState: {
        heroes: [],
        starships: [],
        films: [],
        planets: [],
        currentPage: 1,
        totalItemsCount: 0,
        error: null,
        isLoading: false,
    },
    reducers: {
        heroesRequest: (state) => {
            state.isLoading = true;
        },
        heroesReceived: (state, action) => {
            state.isLoading = false;
            state.heroes = action.payload.results;
            state.totalItemsCount = action.payload.count;
        },
        heroesRequestFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        filmsRequest: (state) => {
            state.isLoading = true;
        },
        filmsReceived: (state, action) => {
            state.isLoading = false;
            state.films = action.payload.results;
            state.totalItemsCount = action.payload.count;
        },
        filmsRequestFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        planetsRequest: (state) => {
            state.isLoading = true;
        },
        planetsReceived: (state, action) => {
            state.isLoading = false;
            state.planets = action.payload.results;
            state.totalItemsCount = action.payload.count;
        },
        planetsRequestFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        starshipsRequest: (state) => {
            state.isLoading = true;
        },
        starshipsReceived: (state, action) => {
            state.isLoading = false;
            state.starships = action.payload.results;
            state.totalItemsCount = action.payload.count;
        },
        starshipsRequestFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
          },

    }
})

export const {heroesRequest, heroesReceived, heroesRequestFailed, filmsRequest, filmsReceived, filmsRequestFailed, planetsRequest, planetsReceived, planetsRequestFailed, starshipsRequest, starshipsReceived, starshipsRequestFailed, setCurrentPage} = entitiesSlice.actions;
export default entitiesSlice.reducer;