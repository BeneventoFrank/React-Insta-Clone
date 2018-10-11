import React from 'react';
import './SearchContainer.css';
import LogoContainer from '../LogoContainer/LogoContainer';
import SearchBar from '../SearchBar/SearchBar';
import ActionsContainer from '../ActionsContainer/ActionsContainer';

const SearchContainer = props => {
    return(
        <div className='search-container'>
            <LogoContainer />
            <SearchBar searchText={props.searchText} handleSearchChange={props.handleSearchChange} handleSearchSubmit={props.handleSearchSubmit} />
            <ActionsContainer logout={props.logout} />
        </div>
        
    )
}

export default SearchContainer;