import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from './components/todolist'
import CreateTodo from './components/createtodo'
import EditTodo from './components/edittodo'

function App() {
  return (
    <Router>
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <Link to="/" className="navbar-brand m-auto">MERN Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
