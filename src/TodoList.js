import React from "react";
import 'materialize-css/dist/css/materialize.css'
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        //In order to assure that "this" is defined by todo
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    loadTodos() {
        fetch('http://localhost:3300/todos')
            .then(response => response.json())
            .then(data => this.setState({todos: data}))
    }

    deleteTodo(todo) {
        const url_delete = `http://localhost:3300/todos/${todo.id}`
        fetch(url_delete, {method: 'DELETE'}).then(_ => this.loadTodos())
    }

    componentDidMount() {
        this.loadTodos();
    }

    render() {
        const todos = this.state.todos

        return (
            <div>
                <h1>TodoList</h1>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>completed</th>
                        <th>dueDate</th>
                        <th>actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map(todo => <TodoItem key={todo.id} todo={todo} onDelete={this.deleteTodo}/>)}
                    </tbody>
                </table>
            </div>
        )
            ;
    }
}

export default TodoList;
