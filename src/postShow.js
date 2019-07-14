import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

// import Users from './users';

class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            post:{},
            user:{},
            comments:[]
          
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
             this.setState(()=>({post:response.data}))

        
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
            .then(response=>{
                this.setState(()=>({user:response.data}))
            })
         
        })
    
       axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
       .then(response=>{
           this.setState(()=>({comments:response.data}))
       })
    }
    render(){
        return(
            <div>
                {/* <h2>{this.state.post.name}</h2> */}
                <p>title:{this.state.post.title}</p>
                <p>body:{this.state.post.body}</p>
                

                <p>author:<Link to={`/users/${this.state.user.id}`}>{this.state.user.username}</Link></p>
                <h2>comments:{this.state.comments.length}</h2>
                <ul>
                    {this.state.comments.map(comment=>{
                        return <li key={comment.id}>
                        email={comment.email}
                        body={comment.body}
                        </li>  
                    })}
                </ul>
                <h2>name:{this.state.user.name}</h2>
                
            </div>
        )
    }
}

export default PostShow