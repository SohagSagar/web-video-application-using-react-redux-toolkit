import { createSlice } from '@reduxjs/toolkit';


// initial state for video reducer
const initialState = {
    tags: [],
    search: '',
    author:''
}


const filterSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload)
        },

        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);
            if (indexToRemove !== -1) state.tags.splice(indexToRemove, 1);
        },
        searched: (state, action) => {
            state.search = action.payload
        },
        searchedByAuthor:(state, action) =>{
            state.author = action.payload
        },
        resetFilter:(state, action) =>{
            state.tags=[];
            state.search=''
            state.author =''
        },

    }


})

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched,searchedByAuthor,resetFilter } = filterSlice.actions;