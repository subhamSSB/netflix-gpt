import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'GPT Slice',
    initialState:{
        showGptSearch:false,
        movieResult:null,
        moviesName:null
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGPTMovieResult:(state,action) => {
            const {moviesName,movieResult} = action.payload;
            state.movieResult = movieResult;
            state.moviesName = moviesName
        }
    }
});


export const {toggleGptSearchView,addGPTMovieResult} = gptSlice.actions;


export default gptSlice.reducer;