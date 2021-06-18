import React from "react";
import 'materialize-css/dist/css/materialize.css'

function TodoItem(props) {
    const todo = props.todo;
    return (
        <tr className={todo.completed ? "blue" : ""}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? "done" : "not done"}</td>
            <td>{todo.dueDate}</td>
            <td>
                <button className="waves-effect waves-light btn-small red"
                        onClick={_ => props.onDelete(todo)}>delete
                </button>
            </td>
        </tr>
    );
}

export default TodoItem;
