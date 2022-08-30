import { createSlice } from '@reduxjs/toolkit';


// initial state for video reducer
const initialState = {
    tags: [],
    search: ''
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
        search: (state, action) => {
            state.search = action.payload
        }
    }


})

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, search } = filterSlice.actions;