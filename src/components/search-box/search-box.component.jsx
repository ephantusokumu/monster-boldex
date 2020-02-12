import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input
    className = 'search'
    type='search' 
   placeholder={placeholder} 
   onChange ={e => this.setState({handleChange}
   )}
   />

)

// export const SearchBox = props => (
//   <input
//     className='search-box'
//     type='search'
//     placeholder='search monsters'
//     onChange={props.onSearchChange}
//   />
// );