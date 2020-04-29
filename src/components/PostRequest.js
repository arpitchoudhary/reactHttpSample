import React, { Component } from 'react'
import axios from 'axios'

class PostRequest extends Component{

    constructor(props){
        super(props)

        this.state = {
            userid : '',
            title: '',
            body:''
        }
    }

    changeState = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = e =>{
        e.preventDefault() // prevent reloading of browser
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
        }).catch(err =>{
            console.log(err)
        })
    }


    render(){
        const {userid, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <input type="text" 
                    name="userid" 
                    value = {userid}
                    onChange={this.changeState} ></input>
                    </div>
                    <div>
                    <input type="text" 
                    name="title" 
                    value = {title}
                    onChange={this.changeState}></input>
                    </div>
                    <div>
                    <input type="text" 
                    name="body" 
                    value = {body}
                    onChange={this.changeState}></input>
                    </div>
                    <div>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}


export default PostRequest