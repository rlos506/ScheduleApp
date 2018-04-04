import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
const Data = ({cedula, regimen, nombres, indice, apellidos, nivel}) => (
	
	<div className="dataCont">
	
	<div className="infCont1">{` Cedula: ${cedula} `}   		 {` Regimen: ${regimen}`}</div> 
	<div className="infCont2">{` Nombre: ${nombres}`}         {` Indice Acad: ${indice}`}</div>
	<div className="infCont3">{` Apellidos: ${apellidos}`}    {` Nivel: ${nivel} `}</div>

	</div>

	);
Data.propTypes = {
	cedula: PropTypes.string.isRequired,
	regimen: PropTypes.string.isRequired,
	nombres: PropTypes.string.isRequired,
	indice: PropTypes.number.isRequired,
	apellidos: PropTypes.string.isRequired,
	nivel: PropTypes.number.isRequired,
}
export default Data;