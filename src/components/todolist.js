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
        this.datafunction()
    }
    
    datafunction(){
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
                            <div className="col-lg-3 col-md-4 col-sm-6 mx-auto my-3">    
                                <div className="card ">
                                    <div className="card-header">
                                        {todo.title}
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{todo.description}</p>
                                        <Link to={"/edit/"+todo._id} className="btn btn-sm w-100 btn-outline-primary">Edit</Link>
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
        </div>
        )
    }
}

export default Todolist
