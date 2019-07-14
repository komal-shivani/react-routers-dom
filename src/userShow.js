import React from 'react'
import axios from 'axios'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            userbody:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            console.log(response)
            this.setState(()=>({user:response.data}))
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response=>{
            this.setState(()=>({userbody:response.data}))
        })
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>{this.state.user.name}</h2>
                <p>email:{this.state.user.email}</p>
                <p>username:{this.state.user.username}</p>
                <ol>
                    {this.state.userbody.map(body=>{
                        return <li key={body.id}>
                        title={body.title}</li>
                    })}
                    <h2>{this.state.userbody.title}</h2>
                    
                </ol>
            </div>
        )
    }
}

export default UserShow