import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getInfoMunicipio = createAsyncThunk("municipios/getInfoMunicipio", async (municipio) =>{
    return fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipio}/distritos`).then((resp) => resp.json())
})


const infoMunicipiosSlice = createSlice(({
    name: "infoMunicipios",
    initialState: {
        infoMunicipios: [],
        loading: false
    },
    extraReducers: {
        [getInfoMunicipio.pending]: (state, action) =>{
            state.loading = true;
        },
        [getInfoMunicipio.fulfilled]: (state, action) =>{
            state.loading = false;
            state.infoMunicipios = action.payload;
        },
        [getInfoMunicipio.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))

export default infoMunicipiosSlice.reducer;