import React, { Component } from 'react';
import searchIcon from './search-icon.svg';
import './SearchBar.css';

const data = [
  [{ name: 'item 1', category: 'category 1', price: 20 }, { name: 'item 2', category: 'category 2', price: 30 }],
  [{ name: 'item 3', category: 'category 3', price: 40 }, { name: 'item 4', category: 'category 4', price: 50 }],
  [{ name: 'item 5', category: 'category 5', price: 60 }, { name: 'item 6', category: 'category 6', price: 70 }],
  [{ name: 'item 7', category: 'category 7', price: 20 }, { name: 'item 8', category: 'category 8', price: 99.99 }]
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
      if(!this.state.searchValue.trim()){
          this.setState({searchResults:[]});
          return;
      }
      const searchResults = data.flat().filter(item => item.name.toLowerCase().includes(this.state.searchValue));
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
          { this.state.searchResults.length === 0 ? console.log('aucune correspondance') :
            this.state.searchResults.map((result, index) => <div key={index}>{result.name} <div>Category: {result.category}</div> <div>Price: {result.price}</div></div>)
          }
        </div>
      </form>
    );
  }

}

export default SearchBar;
