const React = require('react');

class Track extends React.Component{
	render(){
		const status = this.props.status;
		const printProgressStatus = (i) => {
			return status[i] ? "progress-bar progress-bar-success active" : "progress-bar progress-bar-success deactive";
		};

		return (
			<div className="progress">
				<div className={ printProgressStatus(0) } style={{width: 33.33+'%'}}>
					<p><span className="badge">1</span> <a href="#/prereqs">Building and Benches</a></p>
				</div>
				<div className={ printProgressStatus(1) } style={{width: 33.33+'%'}}>
					<p><span className="badge">2</span> <a href="#/prereqs/combinations">Combinatons and Conflicts</a></p>
				</div>
				<div className={ printProgressStatus(2) } style={{width: 33.33+'%'}}>
					<p><span className="badge">3</span> <a href="#/prereqs/combination-details">Combination Details</a></p>
				</div>
			</div>
		);
	}
}

module.exports = Track;
