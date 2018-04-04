import React, {Component} from 'react';
import DataStudent from './DataStudent';
import './style.css';
const data1 = {
	cedula: '24.186.506',
	regimen: 'false',
	nombres: 'rouse angels',
	indice: '7.00',
	apellidos: 'milano pinto',
	nivel: 7,

};

class ScheduleStudent extends Component {

	constructor(){
		super();
		this.state = {
			data: data1
		};

	}
	render = () => (
  		<div className="scheduleStudentCont">
			<DataStudent data = {data1}/>
		</div>
  );
};
export default ScheduleStudent;
