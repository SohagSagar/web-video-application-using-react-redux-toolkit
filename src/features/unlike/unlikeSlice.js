import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUnlikes } from './unlikeAPI';




// initial state for video reducer
const initialState = {
    unlikes: '',
    isLoading: false,
    isError: false,
    error: ''

}

// async thunk
export const fetchUnlikes = createAsyncThunk('unlikes/fetchUnlikes', async (id) => {
    const unlikes = await getUnlikes(id);
    return unlikes;
})

const unlikesSlice = createSlice({
    name: 'like',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUnlikes.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchUnlikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.unlikes = action.payload;
            })
            .addCase(fetchUnlikes.rejected, (state, action) => {
                state.isLoading = false;
                state.unlikes = '';
                state.isError = true;
                state.error = action.error?.message;
            })
    }
})

export default unlikesSlice.reducer;