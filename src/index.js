//ES2015 module system
//you are requiring 2 packages 'react','react-dom

import React from 'react'
import ReactDOM from 'react-dom'


import App from './app'
// import Contact from './contact';
// import Users from  './users'
// import Posts from  './posts'
// import Posttable from './post-table'
// import HashTag from './Hash-tag-act'
// import {city,state,bangalore} from './values'


const Hello =(props)=>{
    return(
        <div>
            
            {/* <Users/>*/}
            <App/>
            {/* <p>{city}</p>
            <p>{state}</p> */}
            
        </div>
    )
}

ReactDOM.render(<Hello/>,document.getElementById('root'))