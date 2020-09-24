import React from 'react';


class Searchbar extends React.Component {
    constructor(props) {
        super(props) 
    }


    render() {
        return (
            <label>Search Here
                <input type="search" placeholder="Search for Businesses" />
            </label>
        )
    }
}

export default Searchbar;