import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    
    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            this.setState(()=>({
                posts:response.data
            }))
        })
    }
    render(){
        return(
            <div>
                <h2>Listing Posts-{this.state.posts.length}</h2>
                <ol>
                     {this.state.posts.map(post=>{
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link>
                        
                        </li>
                      })}
                </ol>
            </div>
        )
    }
}

export default Posts


