import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component{

    constructor(props){
        super(props)
        this.state = {
            posts:[],
            errorMessage : ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({
                posts : response.data
            })
        })
        .catch( error =>{
            console.log('this is error from getApi')
            this.setState({
                errorMessage:'Something Went Wrong!!'
            })
        })
    }

    render(){
        const {posts, errorMessage} = this.state
        return(
            <div>
                List of data
                {
                    posts.length ?
                    posts.map(post => 
                    <div key={post.id}> {post.title}</div>
                    ) : null
                }
                {
                    errorMessage ? <div>{errorMessage}</div> : null
                }
            </div>
        )
    }
}

export default PostList