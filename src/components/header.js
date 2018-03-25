import React, { Component } from 'react';

class Header extends Component {
	onInputChange(event) {
		console.log(event.target.value);
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={this.onInputChange}
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						Search
					</button>
				</form>
			</nav>
		);
	}
}

export default Header;
