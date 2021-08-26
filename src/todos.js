import React, { Component } from 'react';
import { fetchToDoData, createToDoData } from './fetch-utils';

class Todos extends Component {
    state = { todos: [], newCreatedToDo: '' } // add loading state too later
    // Call fetchToDoData

    componentDidMount = () => {
        this.fetchTodos();
    };

    fetchTodos = async () => {
        const todoData = await fetchToDoData(this.props.token);
        this.setState({ todos: todoData });
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        createToDoData( this.props.token, {
            todo: this.state.newCreatedToDo,
            completed: false
        });
        this.setState({ newCreatedToDo: '' });
        this.fetchTodos();
    }

    render() { 
        return ( 
            <>
            <h1>My toDo List!</h1>
            {this.state.todos.map(todo => (
    
                <div className="todo-list" key={todo.id}>   
                    <input type="checkbox" checked={todo.completed}></input>
                    <label>{todo.todo}</label>
                </div>

            ))}

            <form onSubmit={this.handleSubmit}>

                <input type="text" value={this.state.newCreatedToDo} 
                onChange={(e) => this.setState({ newCreatedToDo: e.target.value})} />
            

                <button>Create New ToDo</button>

            </form>

            </>
         );
    }
}
 
export default Todos;