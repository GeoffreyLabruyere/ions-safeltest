import React, { Component } from 'react';
import searchIcon from './search-icon.svg';
import './SearchBar.css';

const data = [
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
    { name: 'item 4' }
];

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchResults: []
    }
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchResults = data.filter(item => item.name.toLowerCase().includes(this.state.searchValue));
    this.setState({searchResults});
  }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="search-bar">
              <img src={searchIcon} alt="search-icon" className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={this.state.searchValue}
                onChange={this.handleChange}
                className="search-input"
              />
            </div>
            <div className="search-results">
              { this.state.searchResults.map((result, index) => <div key={index}>{result.name}</div>) }
            </div>
          </form>
        );
    }
}

export default SearchBar;
