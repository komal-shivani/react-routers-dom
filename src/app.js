// import React from 'react'

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             cal:''
//         }
//     }
//     render(){
//         return(
//             <div>
                
//             </div>

//         )
//     }
// }

// export default App



// import axios from 'axios'
// import TicketTable from './ticket-master/table'

// const Header={
//     padding:"5px 20px",
//     textAlign:"center",
//     color:"blue"}

// const Header1={
//     padding:"5px 5px",
//     textAlign:"left",
//     color:"green"}

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             tickets:[]
//         }
//     }
//     componentDidMount(){
//         axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=ae10e2fa0a200eb8`)
//         .then(response=>{
//             console.log(response)
//             this.setState(()=>({
//                 tickets:response.data
//             }))
//         })
//     }
   

//     render(){
//         return(
//             <div>
//                 <h1 style={Header}>Ticket Master</h1>
//                 <h3 style={Header1} >Listing Tickets-{this.state.tickets.length}</h3>
//                 <TicketTable tickets={this.state.tickets}/>
//             </div>
//         )
//         }    
// }
// export default App

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route, Link} from 'react-router-dom'
import Users from './users';
import Home from './home'
import Contact from './contact'
import About from './about'
import HashTag from './Hash-tag-act'
import Convertunits from './convert-units'
import UserShow from './userShow'
import PostShow from './postShow'
import Posts from './posts';


const App=(props)=>{
    return(
        <BrowserRouter>
        <div>
            {/* <h2>Welcome To React</h2> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/Hash-tag-act">HashTag</Link></li>
                <li><Link to="/convert-units">ConvertUnit</Link></li>
                {/* <li><Link to="/usershow">UserShow</Link></li> */}
                
                </ul>
                {/* Route-matchers*/}

                <Route path="/" component={Home} exact={true}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/users" component={Users}  exact={true}/>
                <Route path="/users/:id" component={UserShow} />
                <Route path="/posts" component={Posts} exact={true}/>
                <Route path="/posts/:id" component={PostShow}/>
                <Route path="/Hash-tag-act" component={HashTag} />
                <Route path="/convert-units" component={Convertunits}/>
                

               
        </div>
        </BrowserRouter>
    )
}

 export default App