import React from 'react';
import PropTypes from 'prop-types';
import Data from './Data';
import './style.css';

const DataStudent = ({data}) => {
	const {cedula, regimen, nombres, indice, apellidos, nivel} = data;
	return( 
	<div className="dataStudentCont">
		<Data cedula = {cedula} regimen = {regimen} nombres = {nombres} indice = {indice} apellidos = {apellidos} nivel= {nivel}/>
	</div>);
};
DataStudent.propTypes = {
	cedula: PropTypes.string.isRequired,
	regimen: PropTypes.string.isRequired,
	nombres: PropTypes.string.isRequired,
	indice: PropTypes.number.isRequired,
	apellidos: PropTypes.string.isRequired,
	nivel: PropTypes.number.isRequired,
}

export default DataStudent;