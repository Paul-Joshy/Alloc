const axios = require('axios');
const React = require('react');
const {connect} = require('react-redux');
/* all actions required */
const actions = require('alertActions');
Object.assign(actions, require('combinationsActions'));
/* all child components */
const Levels = require('./combinations/Levels.jsx');

class Combinations extends React.Component{
	componentDidMount(){
		/* get initial combinations from DB */
		axios.get(`/combinations`).then( (response)=>{
			const allCombis = response.data;
			this.props.dispatch(actions.getCombis(allCombis));
			this.props.dispatch(actions.setAlert(true, "Loaded", "success"));
		}).catch( (error)=>{
            /* The request was made, but the server responded with a status code */
            /* that falls out of the range of 2xx */
			let err = error.response.data;
			this.props.dispatch(actions.setAlert(true, err.message, "danger"));
		});
	}

	render(){
		return (
			<div>
				<h1>Combinations section</h1>;
				<Levels level="UG"/>
				<br/>
				<br/>
				<br/>
				<br/>
				<Levels level="PG"/>
			</div>
		);
	}
}

module.exports = connect((state)=>{
	return {
		combinations: state.combinations,
		alert: state.alert
	};
})(Combinations);