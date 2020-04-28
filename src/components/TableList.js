import React, { Component } from 'react'
import axios from 'axios'
import './tablestyle.css';

class TableList extends Component{

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

    renderTableData() {
        return this.state.posts.map((post) => {
           return (
              <tr key={post.id}>
                 <td>{post.id}</td>
                 <td>{post.userId}</td>
                 <td>{post.title}</td>
                 <td>{post.body}</td>
              </tr>
           )
        })
     }

     getTableKeys(){
         return {
            id: '',
            userId: '',
            title:'',
            body:''
            } ;
     }

     renderTableHeader() {
        let header = Object.keys(this.getTableKeys())
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render(){
        return (
            <div>
                <h1 id='title'>List of Data</h1>
                <table id='posts'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                     </tbody>
                </table>
            </div>
            )
         }
    
}

export default TableList