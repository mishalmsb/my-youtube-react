import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchQuery: '' };
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="/">
					Navbar
				</a>
				<form className="form-inline margin-auto">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						value={this.state.searchQuery}
						onChange={event =>
							this.setState({ searchQuery: event.target.value })
						}
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

export default SearchBar;
