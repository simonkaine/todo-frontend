import React, { Component } from 'react';
import { fetchToDoData } from './fetch-utils';

class Todos extends Component {
    state = { todos: [] } // add loading state too later
    // Call fetchToDoData

    componentDidMount = () => {
        this.fetchTodos();
    };

    fetchTodos = async () => {
        const todoData = await fetchToDoData(this.props.token);
        this.setState({ todos: todoData });
    }

    render() { 
        return ( 
            <>
            <h1>todo</h1>
            {this.state.todos.map(todo => (
                <>
                <div className="todo-list" key={todo.id}>   
                    <input type = "checkbox" checked={todo.completed}></input>
                    <label>{todo.todo}</label>
                </div>
                </>
            ))}

            </>
         );
    }
}
 
export default Todos;