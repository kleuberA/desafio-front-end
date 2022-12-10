import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getMunicipios = createAsyncThunk("", async (id) =>{
    return fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`).then((resp) => resp.json())
})


const municipiosSlice = createSlice(({
    name: "municipios",
    initialState: {
        municipios: [],
        loading: false
    },
    extraReducers: {
        [getMunicipios.pending]: (state, action) =>{
            state.loading = true;
        },
        [getMunicipios.fulfilled]: (state, action) =>{
            state.loading = false;
            state.municipios = action.payload
        },
        [getMunicipios.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))

export default municipiosSlice.reducer;