import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    user : { rank: 4, percentile: 70, score: 8 }
}

const dashBoardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setStats : (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setStats } = dashBoardSlice.actions

export const store = configureStore({
    reducer: dashBoardSlice.reducer
});
