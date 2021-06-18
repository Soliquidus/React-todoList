import React from "react";
import 'materialize-css/dist/css/materialize.css'
import TodoList from "./TodoList";

function App() {
    return (
        <div>
            <h1>TodoList App</h1>
            <div className="row">
                <div className="col s6">
                    <TodoList/>
                </div>
                <div className="col s6">
                    Form
                </div>
            </div>
        </div>
    );
}

export default App;
