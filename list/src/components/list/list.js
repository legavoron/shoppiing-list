import React from 'react';
import { Component } from 'react';
import ListItem from '../list-item/list-item';

class List extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        
        const {data} = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            return(
            <ListItem
                key={id}
                {...itemProps} 
                onUpdateName = {this.props.onUpdateName}
                onUpdateNum = {this.props.onUpdateNum}
                onUpdateSel = {this.props.onUpdateSel}
                />
            )
        })
        return(
            <ul className='list '>
                {elements}
            </ul>
        )
    }
}

export default List;