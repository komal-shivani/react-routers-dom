import React from 'react'
import axios from 'axios'

class Posttable extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState(()=>({
                posts:response.data
            }))
        })
    }
    render(){
        return(
            <div><h2>Listing Posts-{this.state.posts.length}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
               
                <tbody>
                    
                     {this.state.posts.map(post=>{
                        return<tr keys={post.id}>
                              <td>{post.id}</td>
                              <td>{post.title}</td>
                              <td>{post.body}</td>
                              </tr>

  
                      })}
                      
                </tbody>
                </table>
            </div>
        )
    }
}

export default Posttable
