import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const Hello =(props)=>{
    return(
        <div>
            <App/>   
        </div>
    )
}

ReactDOM.render(<Hello/>,document.getElementById('root'))