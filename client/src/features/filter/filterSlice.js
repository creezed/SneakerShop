import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: '',
    sizes: [],
    genders: [],
    brands: [],
    age: [],
    isSale: false
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSort(state, action) {
            state.sort = action.payload
        },
        setSizes(state, action) {
            state.sizes = [...state].push(action.payload)
        },
        setIsSale(state, action) {
            state.isSale = !state
        }
    }
})

export const { setSort, setSizes, setIsSale} = filterSlice.actions;

export default filterSlice.reducer