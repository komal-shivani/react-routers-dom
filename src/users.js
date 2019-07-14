import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        //ajax request or API call to the server
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data)
            this.setState(()=>({
                users:response.data
            }))
        })
    }
    render(){
        return(
            <div>
                <h2>Listing users-{this.state.users.length}</h2>
                <ul className="list-group">
                    {this.state.users.map(user=>{
                        return <li className="list-group-item" key={user.id} ><Link to={`/users/${user.id}`}> {user.name}</Link>
                       </li>
                    })}
                </ul>

            </div>
        )
    }
}


export default Users