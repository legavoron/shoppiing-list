import React from "react";
import { Component } from "react";
import './list-item.css';
import done from './done.svg';
import del from './del.svg';

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            num: '',
            sel: ''
        }
    }

    onUpdateName= (e) => {
        const name = e.target.value;
        this.setState({name})
        console.log(name);
        this.props.onUpdateName(name)
    }
    onUpdateNum = (e) => {
        const num = e.target.value;
        this.setState({num});
        this.props.onUpdateName(num);
    }
    onUpdateSel = (e) => {
        const sel = e.target.value;
        console.log(sel);
        this.setState({sel})
        this.props.onUpdateSel(sel);
    }


    render() {
        const {name, num, sel} = this.props;

        return(
            <li className="listItem ">
                <input type="text" placeholder="Продукт" className="listItem__name" onChange={this.onUpdateName}/>

                <input type="text" className="listItem__num" placeholder="1" onChange={this.onUpdateNum}/>
                
                <select className="listItem_select" onChange={this.onUpdateSel}>
                    <option value="шт">шт</option>
                    <option value="кг">кг</option>
                    <option value="уп">уп</option>
                    <option value="л">л</option>
                </select>

                <button type="button" className="listItem__btn btn_done"><img src={done} className="logo"/></button>
                <button type="button" className="listItem__btn btn_delete"><img src={del} className="logo"/></button>
            </li>
        )
    }
}

export default ListItem;