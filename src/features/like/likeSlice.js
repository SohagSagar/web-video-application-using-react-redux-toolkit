import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLikes } from './likeAPI';



// initial state for video reducer
const initialState = {
    likes: '',
    isLoading: false,
    isError: false,
    error: ''

}

// async thunk
export const fetchLikes = createAsyncThunk('like/fetchLike', async (id) => {
    const likes = await getLikes(id);
    return likes;
})

const likeSlice = createSlice({
    name: 'like',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchLikes.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchLikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.likes = action.payload;
            })
            .addCase(fetchLikes.rejected, (state, action) => {
                state.isLoading = false;
                state.likes = '';
                state.isError = true;
                state.error = action.error?.message;
            })
    }
})

export default likeSlice.reducer;