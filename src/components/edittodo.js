import React, { Component } from 'react'
import axios from 'axios'

class Edittodo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             title: "",
             description: "",
        }
        this.titlevaluehandler = this.titlevaluehandler.bind(this)
        this.descriptionvaluehandler = this.descriptionvaluehandler.bind(this)
        this.onSubmitClick = this.onSubmitClick.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:4000/todo/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    description: res.data.description
                })
                // console.log(res.data.title)
                // console.log(res.data.description)

            })
            .catch(err => console.log(err))
            
    }
    titlevaluehandler(event){
        this.setState({
            title: event.target.value
        })
    }
    
    descriptionvaluehandler(event){
        this.setState({
            description: event.target.value
        })
    }

    onSubmitClick(event){
        event.preventDefault()
        // console.log(`Title : ${this.state.title}`)
        // console.log(`Description : ${this.state.description}`)
        
        const afterEdit = {
            title: this.state.title,
            description: this.state.description
        }

        axios.post('http://localhost:4000/todo/update/'+this.props.match.params.id,afterEdit)
            .then(res => console.log(res))
            
        this.setState({
            title: this.state.title,
            description: this.state.description
        })
        this.props.history.push('/')
    }

    render() {
        return ( <div>
            <h3 align="center">Update Todo</h3>
            <form onSubmit={this.onSubmitClick} className="w-25 mx-auto">
                <div className="form-group row mx-5"> 
                    <label>Title: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.titlevaluehandler}
                            />
                </div>
                <div className="form-group row mx-5">
                    <label>Description: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.description}
                            onChange={this.descriptionvaluehandler}
                            />
                </div>
                <button type="submit" className="btn btn-outline-success">Save</button>
            </form>
        </div>
        )
    }
}

export default Edittodo
