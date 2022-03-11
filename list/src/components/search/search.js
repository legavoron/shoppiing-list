import React from "react";
import { Component } from "react";

import './search.css';


class Search extends Component{
    constructor(props) {
        super(props)
    }

    render () {
        return(
            <div className="search">
                <input type="text" className="form-control search-input" placeholder="Найти продукт"/>
            </div>
        )
    }
    
}

export default Search;