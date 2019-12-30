import React from 'react';
import { Link } from 'react-router-dom'

export default class TopNavigationBar extends React.Component {
	render() {
		return (

			<nav className="navbar navbar-expand-md navbar-light bg-light">
				<span href="#" className="navbar-brand">
					<Link to="/userlist" className="navbar-brand">Inspired Mobile</Link>
				</span>
				<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav">
						<span className="nav-item nav-link active"><Link to="/userlist">User list</Link></span>
						<span className="nav-item nav-link active"><Link to="/signup">Add User</Link></span>

					</div>
				</div>
			</nav>
		);
	}

}
