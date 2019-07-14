
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
import PostTable from './post-table'


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
                <li><Link to="/posttable">PostTable</Link></li>
                
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
                <Route path="/posttable" component={PostTable}/>
                

               
        </div>
        </BrowserRouter>
    )
}

 export default App