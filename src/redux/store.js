import { configureStore } from  '@reduxjs/toolkit';
import estadosSlice from './features/estadosSlice';
import municipiosSlice from './features/municipiosSlice';
import infoMunicipioSlice from './features/infoMunicipioSlice';


export default configureStore({
    reducer: {
        estados: estadosSlice,
        municipios:  municipiosSlice,
        infoMunicipios: infoMunicipioSlice,
    }
})