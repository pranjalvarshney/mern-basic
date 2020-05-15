import React, { Component } from 'react'
import axios from 'axios'

class Createtodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: "",
             description: "",
             completed: false
        }
        this.onchangeDescriptionHandle = this.onchangeDescriptionHandle.bind(this)
        this.onchangeTitleHandle = this.onchangeTitleHandle.bind(this)
        this.onSubmitHandle = this.onSubmitHandle.bind(this)
    }
    onchangeTitleHandle(event){
        this.setState({
            title : event.target.value
        })
    }
    onchangeDescriptionHandle(event){
        this.setState({
            description : event.target.value
        })
    }
    onSubmitHandle(event){
        event.preventDefault()
        console.log(`Title : ${this.state.title}`)
        console.log(`Description : ${this.state.description}`)
        
        const todoData = {
            title : this.state.title,
            description : this.state.description
        }

        axios.post('http://localhost:4000/todo/add',todoData)
            .then(res => console.log(res.data))     

        this.setState ({
            title: "",
            description: "",
            completed: false
       })
    }
    
    render() {
        return (
        <div className="container w-25">
            <h3>Create New Todo</h3>
            <form onSubmit={this.onSubmitHandle}>
                <div className="form-group"> 
                    <label>Title: </label>
                    <input  type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onchangeTitleHandle}
                            className="form-control"
                            />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <textarea 
                            name="description"
                            type="text" 
                            value={this.state.description}
                            onChange={this.onchangeDescriptionHandle}
                            className="form-control"
                            />
                </div>
                
                <button type="submit" className="btn btn-outline-success" onClick={this.onSubmitHandle} >Save</button>
            </form>
        </div>
        )
    }
}

export default Createtodo
