import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ id: 1, txt: 'First Task' }, { id: 2, txt: 'Second Task' }, { id: 3, txt: 'Third Task' }],
            currTask: ''
        }
    }

    handleChange = (e) => {
        let val = e.target.value;
        console.log(val);
        this.setState({
            currTask: val
        });
    }

    handleClick = (e) => {
        if (this.state.currTask !== '') {
            let arr = [...this.state.tasks, { id: this.state.tasks.length + 1, txt: this.state.currTask }];
            this.setState({
                tasks: arr,
                currTask: ''
            });
        }
    }

    onDelete = (id) => {
        let nfa = this.state.tasks.filter((tobj) => {
            return tobj.id !== id;
        });

        this.setState({
            tasks: nfa
        });
    }

    render() {

        return (
            <div>
                <div className='input-container'>
                    <input type="text" value={this.state.currTask} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Add</button>
                </div>
                <div className='class-list'>
                    <ul>
                        {
                            // JSX automatically breaks down array elements here and extracts li
                            // the function returns an array of li
                            this.state.tasks.map((tobj) => {
                                return (
                                    <li key={tobj.txt}>
                                        <h1>{tobj.txt}</h1>
                                        <button onClick={() => {
                                            this.onDelete(tobj.id);
                                        }}>Delete</button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todo;