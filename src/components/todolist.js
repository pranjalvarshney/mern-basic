import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export class Todolist extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todolist : []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/todo')
            .then(res => this.setState({
                todolist : res.data
            }))
            .catch(err => console.log(err))
        }
    tododisplayfunction(){
        console.log(this.state.todolist)
        return this.state.todolist.map((todo,index)=> {
            return <React.Fragment key={index}>
                        <div className="col-3">    
                            <div class="card ">
                                <div class="card-header">
                                    {todo.title}
                                </div>
                                  <div class="card-body">
                                    <p class="card-text">{todo.description}</p>
                                    <Link to={"/edit/"+todo._id} class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                   </React.Fragment>
        })
    }
    

    render() {
        return (
            <div>
            <h3>My Todos </h3>
            
            <div className="mt-5">
                <div className="row container mx-auto">
                        {this.tododisplayfunction()}
                </div>
            </div>
            {/* <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>    
                    </tr>
                </thead>
                <tbody>
                    {this.tododisplayfunction()}
                </tbody>
            </table> */}
        </div>
        )
    }
}

export default Todolist
