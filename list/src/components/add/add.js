import React from "react";
import { Component } from "react";
import './add.css';

class Add extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <form className="add">
                <h1 className="add__h1">Добавить новый продукт</h1>

                <div className="add__container">
                <input type="text" className="form-control new-post-label"
                    placeholder="Наименование">
                </input>

                <input type="text" className="form-control new-post-label"
                    placeholder="1">
                </input>

                <select>
                    <option value="">шт</option>
                    <option value="">кг</option>
                    <option value="">уп</option>
                    <option value="">л</option>
                </select>
                
                <button>Добавить</button>
                </div>

                
            </form>
        )
    }
}

export default Add;