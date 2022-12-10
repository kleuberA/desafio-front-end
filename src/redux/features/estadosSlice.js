import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getEstados = createAsyncThunk("estados/getEstados", async () =>{
    return fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((resp) => resp.json())
})


const estadoSlice = createSlice(({
    name: "estados",
    initialState: {
        estados: [],
        loading: false
    },
    extraReducers: {
        [getEstados.pending]: (state, action) =>{
            state.loading = true;
        },
        [getEstados.fulfilled]: (state, action) =>{
            state.loading = false;
            state.estados = action.payload
        },
        [getEstados.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))

export default estadoSlice.reducer;