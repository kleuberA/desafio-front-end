import React, { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { getEstados } from './redux/features/estadosSlice';
import { getMunicipios } from './redux/features/municipiosSlice';
import { getInfoMunicipio } from './redux/features/infoMunicipioSlice';



function App() {

  const {estados, loading} = useSelector((state) => state.estados);
  const {municipios, loadingMunicipios} = useSelector((state) => state.municipios);
  const {infoMunicipios, loadingInfoMunicipio} = useSelector((state) => state.infoMunicipios);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getEstados());
  }, [])


  return (
    <div className="App">
      <div className='containerSelectEstadoEMunicipio'>
        <select className='selectEstado' onChange={(element) => dispatch(getMunicipios(element.target.value))}>
          <option>Selecione um Estado</option>
        {estados.map((element,key) =>{
          return(
            <option key={key} value={element.id}>{element.nome} - {element.sigla}</option>
          )
        })}
        </select>
        <select className='selectMunicipio' onChange={(element) => dispatch(getInfoMunicipio(element.target.value))}>
          <option>Selecione um Municipio</option>
        {municipios.map((element,key) =>{
          return(
            <option key={key} value={element.id}>{element.nome}</option>
          )
        })}
        </select>
      </div>

      <div className='containerInfos'>
        {infoMunicipios.map((element, key) =>{
          return(
            <div className='containerElementoInfo' key={key}>
              <div className='containerTituloMunicipio'>
                <span className='tagTituloNomeMunicipio'>Municipio</span>
                <h1 className='tituloNomeMunicipio'>{element.nome}</h1>
              </div>
              <div className='containerMicroMesoRegiao'>
                <span className='tagTituloNomeMunicipio'>Micro Região</span>
                <h2>{element.municipio.microrregiao.nome}</h2>
                <span className='tagTituloNomeMunicipio'>Meso Região</span>
                <h2>{element.municipio.microrregiao.mesorregiao.nome}</h2>
              </div>
              <div className='containerUFRegiao'>
                <span className='tagTituloNomeMunicipio'>UF</span>
                <h2>{element.municipio.microrregiao.mesorregiao.UF.sigla}</h2>
                <span className='tagTituloNomeMunicipio'>Região</span>
                <h2>{element.municipio.microrregiao.mesorregiao.UF.regiao.nome}</h2>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
