import { Component } from 'react';
import './app.css';

import Info from '../info/info';
import Search from '../search/search';
import List from '../list/list';
import Add from '../add/add';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: '', num: '', sel: "шт", id: 1, purchased: false}
            ]
        }
    }

    onUpdateName = (name) => {
        this.setState ({name})
    }
    onUpdateNum = (num) => {
        this.setState ({num})
    }
    onUpdateSel = (sel) => {
        this.setState ({sel})
    }
    


    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <Info/>
                <Search/>
                <List data={data} onUpdateName={this.onUpdateName} onUpdateNum={this.onUpdateNum} onUpdateSel={this.onUpdateSel}/>
                <Add/>
            </div>
        );
    }
}

export default App;